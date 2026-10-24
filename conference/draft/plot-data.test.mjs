import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {caseIds,preparePlot,extent,padExtent} from './plot-data.mjs';
import {caseStudies,timeline,loopDuration,locateTime} from './timeline.mjs';

const expectedFos=[1.337,1.362,1.319,1.323,1.345,1.319];
test('conference features only the four selected cases, with a complete loop',()=>{
  assert.deepEqual(caseStudies.map(c=>c.id),['case2','case3a','case3b','case4']);
  assert.equal(caseStudies.find(c=>c.id==='case3b').title,'Fix the Toe');
  assert.equal(loopDuration,228000);
  assert.equal(timeline.length,14);
  let time=0;
  timeline.forEach((scene,index)=>{
    assert.deepEqual(locateTime(time),{index,elapsed:0});
    time+=scene.duration;
  });
  assert.deepEqual(locateTime(time),{index:0,elapsed:0});
});
for(const [i,id] of caseIds.entries())test(`${id}: saved geometry, result and coordinate frame`,async()=>{
  const raw=JSON.parse(await readFile(new URL(`./data/${id}.json`,import.meta.url),'utf8'));
  const model=preparePlot(raw,id);
  assert.equal(model.fos.toFixed(3),expectedFos[i].toFixed(3));
  assert.equal(model.osa,raw.osaDegrees);
  assert.equal(model.regions.length,[1,1,4,5,5,5][i]);
  assert.equal(model.water.length,[0,0,0,16,16,16][i]);
  assert.equal(model.angles.length,model.opt.length-1);
  assert.deepEqual([model.anchor.x,model.anchor.z],raw.translationOrigin);
  assert.equal(model.anchor.name,id==='case3b'?'Prescribed toe':'Prescribed crest');
  const bounds=padExtent(extent(model.allPoints));
  for(const p of model.allPoints){
    assert.ok(Number.isFinite(p.x)&&Number.isFinite(p.z));
    assert.ok(p.x>bounds.xmin&&p.x<bounds.xmax&&p.z>bounds.zmin&&p.z<bounds.zmax);
  }
  if(id==='case3b'){
    assert.deepEqual(model.opt[0],{x:859,z:547});
    assert.ok(Math.abs(Math.max(...model.opt.map(p=>p.z))-877.0225333552656)<1e-9);
  }
  if(id==='case4'){
    assert.equal(new Set(model.faults.map(f=>f.faultId)).size,2);
    assert.equal(model.faults.length,124); // segments, not 124 separate faults
    assert.ok(model.faults.every(f=>f.points.length>=2));
  }
});
test('unknown or malformed cases fail explicitly',async()=>{
  const raw=JSON.parse(await readFile(new URL('./data/case1a.json',import.meta.url),'utf8'));
  assert.throws(()=>preparePlot(raw,'not-a-case'));
  assert.throws(()=>preparePlot({...raw,translationOrigin:null},'case1a'));
  assert.throws(()=>preparePlot({...raw,regions:[]},'case1a'));
  const invalid=structuredClone(raw);invalid.plotData.find(s=>s.name==='bench_X_export').values.pop();
  assert.throws(()=>preparePlot(invalid,'case1a'));
});
