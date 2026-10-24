import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {buildSearchModel,searchFrame,searchSettings,searchDuration} from './search-model.mjs';
const raw=JSON.parse(await readFile(new URL('./data/case3a.json',import.meta.url),'utf8'));
const model=buildSearchModel(raw);
function groundAt(x){
  const topo=model.topo.slice().sort((a,b)=>a.x-b.x);
  for(let i=0;i<topo.length-1;i++){
    const a=topo[i],b=topo[i+1];
    if(x>=a.x&&x<=b.x)return a.z+(b.z-a.z)*(x-a.x)/(b.x-a.x);
  }
  throw new Error('Profile outside topography');
}
function verify(points){
  assert.deepEqual(points[0],{x:model.crest.x,z:model.crest.z});
  points.forEach((p,i)=>{
    const t=(model.crest.z-p.z)/searchSettings.height;
    const left=model.crest.x+(model.minEnd.x-model.crest.x)*t;
    const right=model.crest.x+(model.maxEnd.x-model.crest.x)*t;
    // End berms/corners in the real saved result extend slightly beyond the
    // overall-profile guide rays. Candidates must stay within that same allowance.
    const allowance=model.finalProfile[0].x-model.finalProfile[1].x;
    assert.ok(p.x>=left-allowance-1e-8&&p.x<=right+allowance+1e-8,`Outside benched envelope: ${JSON.stringify(p)}`);
    assert.ok(p.z<=groundAt(p.x)+1e-8,`Above topography: ${JSON.stringify(p)}`);
    if(i){
      const dx=points[i-1].x-p.x,dz=points[i-1].z-p.z;
      assert.ok(dx>=-1e-8&&dz>=-1e-8&&(dx>1e-8||dz>1e-8),'Non-monotone profile');
      assert.ok(Math.abs(dx)<1e-8||Math.abs(dz)<1e-8,'A step became a diagonal line');
      if(dz>1e-8)assert.ok(Math.abs(dz-searchSettings.benchHeight)<1e-8,'Bench height changed');
      else if(i!==1&&i!==points.length-1)assert.ok(dx>=searchSettings.minimumBermWidth-1e-8,'Berm below minimum width');
    }
  });
}
test('all candidate frames remain benched, within the benched envelope and below ground',()=>{
  model.candidates.forEach(verify);
  for(let t=2000;t<=searchDuration;t+=37)verify(searchFrame(model,t).profile);
});
test('the final animation preserves the saved optimal geometry and FoS',()=>{
  const final=searchFrame(model,searchDuration);
  assert.equal(final.phase,'final');assert.deepEqual(final.profile,model.finalProfile);
  assert.equal(model.fos.toFixed(3),'1.323');
  assert.deepEqual(final.profile,model.bench.slice().reverse());
  assert.deepEqual(searchFrame(model,18000),searchFrame(model,24000));
});

test('later candidates have more independent bench-to-bench variation',()=>{
  function widthChanges(points){
    const widths=[];
    for(let i=3;i<points.length-1;i+=2)widths.push(points[i-1].x-points[i].x);
    return widths.slice(1).reduce((sum,width,i)=>sum+Math.abs(width-widths[i]),0)/(widths.length-1);
  }
  const variation=model.candidates.map(widthChanges);
  const early=(variation[0]+variation[1])/2;
  assert.ok(variation.slice(2).every(value=>value>early*1.5),JSON.stringify(variation));
  assert.deepEqual(buildSearchModel(raw).candidates,model.candidates,'Animation must replay without random jitter');
});
test('search stages have deterministic transitions',()=>{
  assert.equal(searchFrame(model,0).phase,'region');
  assert.equal(searchFrame(model,2000).phase,'explore');
  assert.equal(searchFrame(model,14000).phase,'settle');
  assert.equal(searchFrame(model,18000).phase,'final');
});
