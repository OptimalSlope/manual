import {preparePlot} from './plot-data.mjs';

// Bounds from Case_3A_water_crest/Case3_GroundModel1/input.json in the
// supplied cases.zip. Only the final geometry/FoS is a calculated result.
export const searchSettings={minimumOSA:21.199,maximumOSA:63.399,height:330,benchHeight:15,minimumBermWidth:7.5};
export const searchDuration=24000;
const mix=(a,b,t)=>a+(b-a)*t;
const smooth=t=>t*t*(3-2*t);

export function buildSearchModel(raw){
  const result=preparePlot(raw,'case3a');
  const crest=result.anchor;
  const bottom=crest.z-searchSettings.height;
  const run=angle=>searchSettings.height/Math.tan(angle*Math.PI/180);
  const minEnd={x:crest.x-run(searchSettings.minimumOSA),z:bottom};
  const maxEnd={x:crest.x-run(searchSettings.maximumOSA),z:bottom};
  // Preserve the actual benched polyline, including its top/bottom end berms.
  // Reversing (not sorting) retains the ordering of equal-elevation vertices.
  const finalProfile=result.bench.slice().reverse().map(p=>({...p}));
  const topBerm=finalProfile[0].x-finalProfile[1].x;
  const bottomBerm=finalProfile.at(-2).x-finalProfile.at(-1).x;
  // Illustrative shapes vary berm widths, not bench elevations or topology.
  // Convex interpolation of corresponding vertices keeps every riser vertical
  // and every berm horizontal throughout the animation (this case has 90° faces).
  const candidates=Array.from({length:10},(_,k)=>{
    const bases=[26,9,21,12,28,16,24,10,19,14];
    const amplitudes=[2,1,3,2,0,4,1,1,3,3];
    let position=crest.x;
    const prototype=finalProfile.map((p,i)=>{
      if(i===1)position-=topBerm;
      else if(i===finalProfile.length-1)position-=bottomBerm;
      else if(i>1&&Math.abs(p.z-finalProfile[i-1].z)<1e-8) {
        // Begin with two regular profiles, then let individual benches explore
        // different widths. Fixed, mixed frequencies avoid both a uniform wave
        // along the slope and per-frame random jitter during interpolation.
        const benchIndex=(i-3)/2;
        const strength=k<2?0:8+Math.min(k-2,4);
        const variation=strength*(
          .55*Math.sin((benchIndex+1)*2.35+k*1.71)+
          .30*Math.sin((benchIndex+1)*4.91+k*.87)+
          .15*Math.cos((benchIndex+1)*.91+k*2.13));
        const width=Math.max(searchSettings.minimumBermWidth,
          bases[k]+amplitudes[k]*Math.sin(i*.24+k*.9)+variation);
        position-=width;
      }
      return {x:position,z:p.z};
    });
    return prototype.map((p,i)=>({x:mix(p.x,finalProfile[i].x,k<6?.18:.35),z:p.z}));
  });
  return {...result,crest,minEnd,maxEnd,triangle:[crest,minEnd,maxEnd],candidates,finalProfile};
}

export function searchFrame(model,elapsed){
  const t=Math.max(0,Math.min(searchDuration,elapsed));
  const interpolate=(a,b,u)=>a.map((p,i)=>({x:mix(p.x,b[i].x,u),z:p.z}));
  if(t<2000)return {phase:'region',profile:null,trails:[],progress:0};
  if(t<14000){
    const position=(t-2000)/1200,index=Math.min(9,Math.floor(position));
    const previous=model.candidates[Math.max(0,index-1)];
    return {phase:'explore',profile:interpolate(previous,model.candidates[index],smooth(position-index)),
      trails:model.candidates.slice(Math.max(0,index-3),index),progress:(t-2000)/16000};
  }
  if(t<18000)return {phase:'settle',profile:interpolate(model.candidates[9],model.finalProfile,smooth((t-14000)/4000)),
    trails:model.candidates.slice(6,9),progress:(t-2000)/16000};
  return {phase:'final',profile:model.finalProfile,trails:[],progress:1};
}
