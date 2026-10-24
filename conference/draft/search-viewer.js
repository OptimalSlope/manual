import {buildSearchModel,searchFrame,searchSettings,searchDuration} from './search-model.mjs';
import {extent,padExtent} from './plot-data.mjs';

const managed=new URLSearchParams(location.search).get('managed')==='1'&&parent!==window;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const svg=document.getElementById('searchPlot'),phase=document.getElementById('phase');
const play=document.getElementById('play'),replay=document.getElementById('replay');
const finalResult=document.getElementById('finalResult');
const ns='http://www.w3.org/2000/svg';
const palette=['#f4c542','#ff9865','#b18af0','#51d2b4','#e77fc5'];
let model,elapsed=0,paused=reduced,last=performance.now(),x,z,moving,trails,finalMark,queued=false;
let managedState=null;
const labels={region:'OSA Limits and Fixed Crest',explore:'Exploring Candidate Profiles',
  settle:'Settle onto the Found Optimal Profile',final:'Found Optimal Profile'};
function add(tag,attrs={},text,parentNode=svg){
  const node=document.createElementNS(ns,tag);
  for(const [key,value] of Object.entries(attrs))node.setAttribute(key,String(value));
  if(text!==undefined)node.textContent=text;
  parentNode.append(node);return node;
}
function path(points){return points.map((p,i)=>`${i?'L':'M'}${x(p.x).toFixed(3)},${z(p.z).toFixed(3)}`).join(' ');}
function niceStep(range){const rough=range/7,power=10**Math.floor(Math.log10(rough));return (rough/power<=2?2:rough/power<=5?5:10)*power;}
function renderStatic(){
  if(!model)return;
  const W=Math.max(340,svg.clientWidth),H=Math.max(180,svg.clientHeight);
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);svg.replaceChildren();
  const m={l:65,r:28,t:32,b:48},pw=W-m.l-m.r,ph=H-m.t-m.b;
  const bounds=padExtent(extent(model.triangle),.17);
  const unit=Math.max((bounds.xmax-bounds.xmin)/pw,(bounds.zmax-bounds.zmin)/ph);
  const cx=(bounds.xmin+bounds.xmax)/2,cz=(bounds.zmin+bounds.zmax)/2;
  const domain={xmin:cx-pw*unit/2,xmax:cx+pw*unit/2,zmin:cz-ph*unit/2,zmax:cz+ph*unit/2};
  x=v=>m.l+(v-domain.xmin)/unit;z=v=>m.t+(domain.zmax-v)/unit;
  const defs=add('defs');
  const area=add('clipPath',{id:'chart-clip'},undefined,defs);add('rect',{x:m.l,y:m.t,width:pw,height:ph},undefined,area);
  add('rect',{x:m.l,y:m.t,width:pw,height:ph,fill:'#fff',stroke:'#d8e1e8'});
  const scene=add('g',{'clip-path':'url(#chart-clip)'});
  const layers=new Map();
  model.regions.forEach(r=>{if(!layers.has(r.layerId))layers.set(r.layerId,[]);layers.get(r.layerId).push(r);});
  [...layers.values()].forEach((regions,i)=>add('path',{
    d:regions.map(r=>path(r.points)+' Z').join(' '),fill:palette[i%palette.length],
    opacity:.48,stroke:'#798184','stroke-width':1,'fill-rule':'evenodd'},undefined,scene));
  add('path',{d:path(model.topo),fill:'none',stroke:'#665146','stroke-width':2},undefined,scene);
  for(const axis of ['x','z']){
    const min=domain[`${axis}min`],max=domain[`${axis}max`],step=niceStep(max-min);
    for(let v=Math.ceil(min/step)*step;v<=max;v+=step){
      const position=axis==='x'?x(v):z(v);
      add('line',axis==='x'?{x1:position,x2:position,y1:m.t,y2:m.t+ph,stroke:'#c7d0d53f'}:
        {x1:m.l,x2:m.l+pw,y1:position,y2:position,stroke:'#c7d0d53f'},undefined,scene);
      add('text',axis==='x'?{x:position,y:H-28,'text-anchor':'middle',fill:'#617180','font-size':12}:
        {x:m.l-9,y:position+4,'text-anchor':'end',fill:'#617180','font-size':12},Math.round(v).toLocaleString('en-GB'));
    }
  }
  add('path',{d:path(model.triangle)+' Z',fill:'#20bc6960',stroke:'#148747','stroke-width':2.5},undefined,scene);
  // OSA rays constrain the overall profile, not every bench corner. The saved
  // benched result itself crosses the guide rays slightly. Show complete steps
  // rather than clipping them into misleading partial/smooth profiles.
  const motion=add('g',{},undefined,scene);
  trails=add('g',{},undefined,motion);
  // A white halo keeps the active line readable over coloured geology.
  moving=add('g',{},undefined,motion);
  add('path',{fill:'none',stroke:'#fff','stroke-width':7,'stroke-linejoin':'round'},undefined,moving);
  add('path',{fill:'none',stroke:'#f16b21','stroke-width':3.7,'stroke-linejoin':'miter'},undefined,moving);
  const label=(text,px,py,anchor='middle')=>{
    const group=add('g');
    const node=add('text',{x:px,y:py,'text-anchor':anchor,fill:'#064761','font-size':14,'font-weight':750},text,group);
    const b=node.getBBox();const bg=add('rect',{x:b.x-7,y:b.y-5,width:b.width+14,height:b.height+10,rx:5,fill:'#fffffff0'},undefined,group);
    group.insertBefore(bg,node);
  };
  const mid=(p,q,t)=>({x:p.x+(q.x-p.x)*t,z:p.z+(q.z-p.z)*t});
  const lo=mid(model.crest,model.minEnd,.56),hi=mid(model.crest,model.maxEnd,.56);
  label(`Min OSA ${searchSettings.minimumOSA.toFixed(1)}°`,x(lo.x)-25,z(lo.z)-20);
  label(`Max OSA ${searchSettings.maximumOSA.toFixed(1)}°`,x(hi.x)+75,z(hi.z)+18);
  const ax=x(model.crest.x),az=z(model.crest.z);
  add('path',{d:`M${ax-7},${az}h14 M${ax},${az-7}v14`,stroke:'#f16b21','stroke-width':3});
  label('Fixed Crest',ax,az-20);
  finalMark=add('g',{'pointer-events':'none'});
  const bx=m.l+pw-210,by=m.t+12;
  add('rect',{x:bx,y:by,width:190,height:48,rx:9,fill:'#075539'},undefined,finalMark);
  add('text',{x:bx+95,y:by+20,'text-anchor':'middle',fill:'#fff','font-size':13,'font-weight':700},'Saved Case 3a Result',finalMark);
  add('text',{x:bx+95,y:by+39,'text-anchor':'middle',fill:'#fff','font-size':16,'font-weight':750},`FoS = ${model.fos.toFixed(3)}`,finalMark);
  add('text',{x:m.l+pw/2,y:H-7,'text-anchor':'middle',fill:'#15364a','font-size':13,'font-weight':700},'X_section [m]');
  add('text',{transform:`translate(17 ${m.t+ph/2}) rotate(-90)`,'text-anchor':'middle',fill:'#15364a','font-size':13,'font-weight':700},'Z_section [m]');
  renderMotion();
}
function renderMotion(){
  if(!model||!moving)return;
  const frame=searchFrame(model,reduced?searchDuration:elapsed);
  phase.textContent=labels[frame.phase];svg.dataset.phase=frame.phase;
  svg.dataset.elapsed=String(Math.round(elapsed));
  moving.querySelectorAll('path').forEach(p=>p.setAttribute('d',frame.profile?path(frame.profile):''));
  trails.replaceChildren();
  frame.trails.forEach((points,i)=>add('path',{d:path(points),fill:'none',stroke:'#2777b6',
    opacity:.16+i*.11,'stroke-width':1.8},undefined,trails));
  finalMark.style.display=frame.phase==='final'?'':'none';
  finalResult.textContent=frame.phase==='final'?`Final benched profile · FoS ${model.fos.toFixed(3)}`:'';
  play.textContent=paused?'Play':'Pause';play.setAttribute('aria-label',paused?'Play search animation':'Pause search animation');
}
function requestRender(){if(!queued){queued=true;requestAnimationFrame(()=>{queued=false;renderStatic();});}}
function notify(action){parent.postMessage({type:'profile-search-control',action},location.origin);}
play.addEventListener('click',()=>{
  if(managed)notify(paused?'play':'pause');
  else {paused=!paused;if(!paused&&elapsed>=searchDuration)elapsed=0;last=performance.now();renderMotion();}
});
replay.addEventListener('click',()=>{
  if(managed)notify('replay');
  else {elapsed=0;paused=false;last=performance.now();renderMotion();}
});
addEventListener('message',event=>{
  if(!managed||event.source!==parent||event.origin!==location.origin||event.data?.type!=='profile-search-state')return;
  if(!Number.isFinite(event.data.elapsed)||typeof event.data.paused!=='boolean')return;
  managedState=event.data;elapsed=managedState.elapsed;paused=managedState.paused;renderMotion();
});
document.addEventListener('visibilitychange',()=>{last=performance.now();});
new ResizeObserver(requestRender).observe(svg);
try{
  const response=await fetch(new URL('./data/case3a.json',import.meta.url));
  if(!response.ok)throw new Error('The Case 3a result could not be loaded');
  model=buildSearchModel(await response.json());renderStatic();
  document.body.dataset.searchReady='true';
  if(managed)notify('ready');
  else requestAnimationFrame(function tick(now){
    if(!document.hidden&&!paused){elapsed=Math.min(searchDuration,elapsed+Math.max(0,now-last));
      if(elapsed>=searchDuration)paused=true;renderMotion();}
    last=now;requestAnimationFrame(tick);
  });
}catch(error){phase.textContent=error.message;play.disabled=true;replay.disabled=true;document.body.dataset.searchError='true';}
