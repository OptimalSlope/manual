import {caseIds,preparePlot,extent,padExtent} from './plot-data.mjs';

const id=new URLSearchParams(location.search).get('case');
const svg=document.getElementById('plot');
const status=document.getElementById('status');
const legend=document.getElementById('legend');
const tooltip=document.getElementById('tooltip');
const controls=document.getElementById('controls');
const ns='http://www.w3.org/2000/svg';
const state={layers:true,bench:true,optimal:true,bounds:false,failure:true,water:true,faults:true,angles:true};
// Vivid geological fills, shared across the case views and their legends.
// Keep profile/failure strokes dark and distinct from the coloured units.
const palette=['#f4c542','#ff9865','#b18af0','#51d2b4','#e77fc5'];
const colour={bench:'#161b20',optimal:'#56ad31',bounds:'#2272bd',failure:'#ff2545',water:'#5b91ee',faults:'#be4c21',anchor:'#f16b21'};
let model,view,full,scale,drag,queued=false;

function post(type,extra={}) {
  if(parent !== window) parent.postMessage({type,case:id,...extra},location.origin);
}
function interacted(){post('tutorial-plot-interaction');}
function element(tag,attrs={},text,parentNode=svg){
  const el=document.createElementNS(ns,tag);
  for(const [key,value] of Object.entries(attrs))el.setAttribute(key,String(value));
  if(text!==undefined)el.textContent=text;
  parentNode.append(el);return el;
}
function format(n,digits=1){return n.toLocaleString('en-GB',{maximumFractionDigits:digits});}
function schedule(){if(!queued){queued=true;requestAnimationFrame(()=>{queued=false;draw();});}}
function reset(){if(!model)return;view={...full};schedule();}
function focusProfile(){
  if(!model)return;
  view=padExtent(extent([...model.opt,...model.bench,...model.failure,...model.radii.flat(),...model.cir]),.18);
  schedule();
}
function zoom(factor,centre){
  if(!view||!scale)return;
  const cx=centre?.x ?? (view.xmin+view.xmax)/2;
  const cz=centre?.z ?? (view.zmin+view.zmax)/2;
  const width=(view.xmax-view.xmin)*factor;
  const base=full.xmax-full.xmin;
  if(width<base/200 || width>base*8)return;
  view={xmin:cx+(view.xmin-cx)*factor,xmax:cx+(view.xmax-cx)*factor,
    zmin:cz+(view.zmin-cz)*factor,zmax:cz+(view.zmax-cz)*factor};
  schedule();
}
function path(points){return points.map((p,i)=>`${i?'L':'M'}${scale.x(p.x).toFixed(2)},${scale.z(p.z).toFixed(2)}`).join(' ');}
function line(points,stroke,width=2,dash,group=svg,name){
  if(!points.length)return;
  const p=element('path',{d:path(points),fill:'none',stroke,'stroke-width':width,
    'stroke-linejoin':'round','stroke-linecap':'round',...(dash?{'stroke-dasharray':dash}:{})},undefined,group);
  if(name)p.dataset.label=name;
  return p;
}
function step(range){const rough=range/7,power=10**Math.floor(Math.log10(rough)),r=rough/power;
  return (r<=1?1:r<=2?2:r<=5?5:10)*power;}
function draw(){
  if(!model||!view)return;
  const W=Math.max(300,svg.clientWidth),H=Math.max(120,svg.clientHeight);
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  const m={l:64,r:20,t:24,b:46},pw=W-m.l-m.r,ph=H-m.t-m.b;
  // Equal X/Z units avoid visually changing the slope angles when resized.
  const units=Math.max((view.xmax-view.xmin)/pw,(view.zmax-view.zmin)/ph);
  const cx=(view.xmin+view.xmax)/2,cz=(view.zmin+view.zmax)/2;
  const domain={xmin:cx-pw*units/2,xmax:cx+pw*units/2,zmin:cz-ph*units/2,zmax:cz+ph*units/2};
  scale={x:x=>m.l+(x-domain.xmin)/units,z:z=>m.t+(domain.zmax-z)/units,
    invX:x=>domain.xmin+(x-m.l)*units,invZ:y=>domain.zmax-(y-m.t)*units,units,W,H};
  svg.replaceChildren();
  const defs=element('defs');
  const clip=element('clipPath',{id:'plot-area'},undefined,defs);
  element('rect',{x:m.l,y:m.t,width:pw,height:ph},undefined,clip);
  element('rect',{x:m.l,y:m.t,width:pw,height:ph,fill:'#fff',stroke:'#c7d2da'});
  const grid=element('g',{'clip-path':'url(#plot-area)','pointer-events':'none'});
  for(const axis of ['x','z']){
    const min=domain[`${axis}min`],max=domain[`${axis}max`],s=step(max-min);
    for(let v=Math.ceil(min/s)*s;v<=max;v+=s){
      const pos=scale[axis](v);
      element('line',axis==='x'?{x1:pos,x2:pos,y1:m.t,y2:m.t+ph,stroke:'#e6ebef'}:
        {x1:m.l,x2:m.l+pw,y1:pos,y2:pos,stroke:'#e6ebef'},undefined,grid);
      element('text',axis==='x'?{x:pos,y:H-27,'text-anchor':'middle',fill:'#617180','font-size':11}:
        {x:m.l-9,y:pos+4,'text-anchor':'end',fill:'#617180','font-size':11},format(v,0));
    }
  }
  const geometry=element('g',{'clip-path':'url(#plot-area)'});
  if(state.layers){
    const layers=new Map();
    model.regions.forEach(r=>{
      if(!layers.has(r.layerId))layers.set(r.layerId,[]);
      layers.get(r.layerId).push(r);
    });
    [...layers.values()].forEach((regions,i)=>{
      // Compound paths retain exported holes instead of filling them as rock.
      element('path',{d:regions.map(r=>path(r.points)+' Z').join(' '),fill:palette[i%palette.length],
        stroke:'#53606a','stroke-width':1.2,'fill-rule':'evenodd','data-label':regions[0].name},undefined,geometry);
    });
    line(model.topo,'#665146',2,undefined,geometry,'Input topography');
  }
  if(state.bounds){
    if(model.upper.length&&model.lower.length)element('path',{
      d:path([...model.upper,...model.lower.slice().reverse()])+' Z',fill:'#f16b211b'},undefined,geometry);
    for(const [name,points,c] of [['Upper bound',model.upper,'#27a44b'],['Lower bound',model.lower,'#3478ec']]){
      for(const p of points){const x=scale.x(p.x),z=scale.z(p.z);
        element('path',{d:`M${x-3},${z}h6 M${x},${z-3}v6`,stroke:c,'stroke-width':1.6,'data-label':name},undefined,geometry);
      }
    }
  }
  if(state.faults)model.faults.forEach(f=>line(f.points,colour.faults,2.3,undefined,geometry,f.name));
  if(state.water&&model.water.length){
    line(model.water,colour.water,2.5,undefined,geometry,'Piezometric line');
    model.water.forEach(p=>{
      const x=scale.x(p.x),z=scale.z(p.z);
      element('path',{d:`M${x},${z-4}l-4,7h8Z`,fill:colour.water,'data-label':'Piezometric line'},undefined,geometry);
    });
  }
  if(state.failure){
    line(model.failure,colour.failure,2,'6 5',geometry,'Failure mechanism');
    model.radii.forEach(r=>line(r,colour.failure,1.5,'6 5',geometry,'Failure mechanism radius'));
    model.cir.forEach(p=>element('circle',{cx:scale.x(p.x),cy:scale.z(p.z),r:4.5,
      fill:colour.failure,stroke:'#fff','stroke-width':1.2,'data-label':'CIR'},undefined,geometry));
  }
  if(state.optimal)line(model.opt,colour.optimal,4,'1 6',geometry,'Optimal profile for mine planning');
  if(state.bench)line(model.bench,colour.bench,2,undefined,geometry,'Optimal profile with benches');
  const anchor=model.anchor;
  element('circle',{cx:scale.x(anchor.x),cy:scale.z(anchor.z),r:4.5,fill:colour.anchor,stroke:'#fff',
    'stroke-width':1.5,'data-label':anchor.name},undefined,geometry);
  // Each exported OFA corresponds to a segment of X_opt/Z_opt, not to the
  // individual riser/berm edges of the benched polyline. Coalesce near-equal
  // consecutive values so the overview is readable; tooltip retains all values.
  if(state.angles){
    const runs=[];
    for(let i=0;i<Math.min(model.angles.length,model.opt.length-1);i++){
      const a=model.opt[i],b=model.opt[i+1],angle=model.angles[i];
      const previous=runs.at(-1);
      if(previous&&Math.abs(previous.angle-angle)<.15){previous.b=b;}
      else runs.push({a,b,angle});
    }
    const labels=runs.filter(r=>Math.hypot(scale.x(r.b.x)-scale.x(r.a.x),scale.z(r.b.z)-scale.z(r.a.z))>24)
      .sort((a,b)=>Math.hypot(b.b.x-b.a.x,b.b.z-b.a.z)-Math.hypot(a.b.x-a.a.x,a.b.z-a.a.z)).slice(0,5);
    labels.forEach(r=>{
      const x=scale.x((r.a.x+r.b.x)/2)+12,z=scale.z((r.a.z+r.b.z)/2);
      const group=element('g',{'data-label':`Optimal face angle: ${format(r.angle)}°`},undefined,geometry);
      element('rect',{x:x-3,y:z-12,width:77,height:18,rx:3,fill:'#ffffffdd'},undefined,group);
      element('text',{x,y:z+1,fill:'#38843c','font-size':11,'font-weight':650},`OFA ${format(r.angle)}°`,group);
    });
  }
  const badge=element('g',{'pointer-events':'none'});
  element('rect',{x:W-m.r-117,y:m.t+8,width:108,height:27,rx:4,fill:'#064b68'},undefined,badge);
  element('text',{x:W-m.r-63,y:m.t+27,'text-anchor':'middle',fill:'#fff','font-size':15,'font-weight':750},`FoS = ${model.fos.toFixed(3)}`,badge);
  element('text',{x:m.l+pw/2,y:H-7,'text-anchor':'middle',fill:'#15364a','font-size':12,'font-weight':700},'X_section [m]');
  element('text',{transform:`translate(15 ${m.t+ph/2}) rotate(-90)`,'text-anchor':'middle',fill:'#15364a','font-size':12,'font-weight':700},'Z_section [m]');
  svg.dataset.domain=JSON.stringify(view);
}

function renderLegend(){
  legend.replaceChildren();
  const entries=[['Optimal profile with benches',colour.bench,'','bench'],
    ['Optimal profile for mine planning',colour.optimal,'dotted','optimal'],
    ['Failure mechanism / CIR',colour.failure,'dashed','failure'],
    [model.anchor.name,colour.anchor,''],['Piezometric line',colour.water,'','water'],
    ['Faults',colour.faults,'','faults'],['Upper / lower bounds',colour.bounds,'','bounds']];
  for(const [label,c,style,key] of entries){
    if(key&&!state[key] || key==='water'&&!model.water.length || key==='faults'&&!model.faults.length)continue;
    const item=document.createElement('span');item.className='legend-item';
    const swatch=document.createElement('i');swatch.className=`swatch ${style}`;
    swatch.style.background=c;swatch.style.setProperty('--color',c);
    item.append(swatch,document.createTextNode(label));legend.append(item);
  }
  if(state.layers){
    const seen=new Set();let index=0;
    for(const r of model.regions){
      if(seen.has(r.layerId))continue;seen.add(r.layerId);
      const item=document.createElement('span');item.className='legend-item';
      const swatch=document.createElement('i');swatch.className='swatch region';swatch.style.background=palette[index++%palette.length];
      item.append(swatch,document.createTextNode(r.name));legend.append(item);
    }
  }
}
function coordinates(ev){
  const rect=svg.getBoundingClientRect();
  return {x:(ev.clientX-rect.left)*scale.W/rect.width,z:(ev.clientY-rect.top)*scale.H/rect.height};
}
controls.addEventListener('click',ev=>{
  const btn=ev.target.closest('button');if(!btn||!model)return;
  interacted();
  if(btn.dataset.layer){const key=btn.dataset.layer;state[key]=!state[key];btn.setAttribute('aria-pressed',String(state[key]));renderLegend();schedule();}
  if(btn.dataset.action==='reset')reset();
  if(btn.dataset.action==='in')zoom(.78);
  if(btn.dataset.action==='out')zoom(1/.78);
});
svg.addEventListener('wheel',ev=>{
  // Keep Ctrl+wheel available for browser/page zoom.
  if(ev.ctrlKey||!model||!scale)return;
  ev.preventDefault();interacted();tooltip.hidden=true;
  const p=coordinates(ev);zoom(ev.deltaY<0?.85:1/.85,{x:scale.invX(p.x),z:scale.invZ(p.z)});
},{passive:false});
svg.addEventListener('pointerdown',ev=>{
  if(ev.button!==0||!model||!scale)return;
  interacted();svg.focus();svg.setPointerCapture(ev.pointerId);svg.classList.add('dragging');
  drag=coordinates(ev);tooltip.hidden=true;
});
svg.addEventListener('pointermove',ev=>{
  if(!model||!scale)return;
  const p=coordinates(ev);
  if(drag){
    const dx=(p.x-drag.x)*scale.units,dz=(p.z-drag.z)*scale.units;
    view={xmin:view.xmin-dx,xmax:view.xmax-dx,zmin:view.zmin+dz,zmax:view.zmax+dz};drag=p;schedule();return;
  }
  const name=ev.target.closest('[data-label]')?.dataset.label;
  tooltip.hidden=!name;
  if(name){
    const x=scale.invX(p.x),z=scale.invZ(p.z);
    let text=`${name}\nX: ${format(x,2)} m · Z: ${format(z,2)} m`;
    if(name==='Optimal profile for mine planning'){
      const nearest=model.opt.slice(0,-1).reduce((best,a,i)=>{
        const b=model.opt[i+1],mx=(a.x+b.x)/2,mz=(a.z+b.z)/2,d=(x-mx)**2+(z-mz)**2;
        return d<best.d?{d,i}:best;
      },{d:Infinity,i:0});
      if(Number.isFinite(model.angles[nearest.i]))text+=`\nOFA: ${format(model.angles[nearest.i])}°`;
    }
    tooltip.textContent=text;
    const rect=svg.getBoundingClientRect();
    tooltip.style.left=`${Math.max(4,Math.min(rect.width-230,ev.clientX-rect.left+12))}px`;
    tooltip.style.top=`${Math.max(4,Math.min(rect.height-65,ev.clientY-rect.top+12))}px`;
  }
});
function endDrag(){drag=null;svg.classList.remove('dragging');}
svg.addEventListener('pointerup',endDrag);svg.addEventListener('pointercancel',endDrag);
svg.addEventListener('lostpointercapture',endDrag);svg.addEventListener('pointerleave',()=>tooltip.hidden=true);
svg.addEventListener('keydown',ev=>{
  if(!model||ev.ctrlKey||ev.metaKey||ev.altKey)return;
  if(!['+','=','-','Home','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(ev.key))return;
  ev.preventDefault();interacted();
  if(ev.key==='+'||ev.key==='=')zoom(.78);
  else if(ev.key==='-')zoom(1/.78);
  else if(ev.key==='Home')reset();
  else{
    const dx=(view.xmax-view.xmin)*.1*(ev.key==='ArrowLeft'?-1:ev.key==='ArrowRight'?1:0);
    const dz=(view.zmax-view.zmin)*.1*(ev.key==='ArrowDown'?-1:ev.key==='ArrowUp'?1:0);
    view={xmin:view.xmin+dx,xmax:view.xmax+dx,zmin:view.zmin+dz,zmax:view.zmax+dz};schedule();
  }
});
window.addEventListener('message',ev=>{
  if(ev.source!==parent||ev.origin!==location.origin||ev.data?.type!=='tutorial-plot-view'||ev.data.case!==id)return;
  if(ev.data.action==='reset')reset();else if(ev.data.action==='focus')focusProfile();
});
new ResizeObserver(schedule).observe(svg);

try{
  if(!caseIds.includes(id))throw new Error('Choose a valid tutorial case');
  const response=await fetch(new URL(`./data/${id}.json`,import.meta.url));
  if(!response.ok)throw new Error('Result file is unavailable');
  model=preparePlot(await response.json(),id);
  full=padExtent(extent(model.allPoints));view={...full};
  for(const [key,available] of [['water',!!model.water.length],['faults',!!model.faults.length]]){
    const btn=controls.querySelector(`[data-layer="${key}"]`);btn.hidden=!available;
    if(!available)state[key]=false;
  }
  status.textContent=`Case ${id.replace('case','')} · Saved result · FoS ${model.fos.toFixed(3)} · OSA ${format(model.osa)}° · ${model.anchor.name} · Section coordinates [m]`;
  svg.setAttribute('aria-label',`Case ${id.replace('case','')} interactive result plot. ${model.anchor.name}. FoS ${model.fos.toFixed(3)}.`);
  renderLegend();draw();document.body.dataset.plotReady=id;
  post('tutorial-plot-ready',{fos:model.fos});
}catch(error){
  status.classList.add('error');status.textContent=`Could not load this tutorial result: ${error.message}. Reload to try again.`;
  controls.querySelectorAll('button').forEach(btn=>btn.disabled=true);
  document.body.dataset.plotError='true';
}
