import { scenes } from './scenes.mjs';
export const caseStudies = scenes.filter(scene => scene.type === 'case');
export const timeline = [
  { id:'opening', label:'Introduction', target:'.hero', duration:10000, caption:'OptimalSlope · Slope Stability 2026 · From geology to optimised pitwall profile' },
  { id:'workflow-1', label:'Workflow · Ground model', target:'#workflow', duration:6000, stage:0, caption:'Define the geological model, rock mass properties and groundwater inputs.' },
  { id:'workflow-2', label:'Workflow · Design constraints', target:'#workflow', duration:6000, stage:1, caption:'Set cross-section geometry, bench properties, faults and design constraints.' },
  { id:'workflow-3', label:'Workflow · Optimisation', target:'#workflow', duration:6000, stage:2, caption:'Run the cloud optimiser and review the optimised pitwall profile.' },
  { id:'profile-search', label:'Animated profile search', target:'#profile-search', duration:24000, caption:'Illustrative candidate profiles vary inside the OSA search region, then settle onto the found optimal profile.' },
  { id:'comparison', label:'Pitwall comparison', target:'#comparison', duration:12000, caption:'Compare the existing pitwall section with the optimised profile.' },
  { id:'result-plot', label:'Interactive result plot', target:'#result-plot', duration:12000, caption:'Review bench geometry, optimal face angles and the failure mechanism.' },
  { id:'osa-plot', label:'OSA search region', target:'#osa-plot', duration:12000, caption:'Explore the OSA search region between the minimum and maximum Overall Slope Angle.' },
  ...caseStudies.map(scene => ({ id:scene.id, label:`Case ${scene.number} · ${scene.chapter}`, target:`#tutorial-${scene.id}`, duration:scene.duration, case:scene, caption:scene.beats[0] })),
  { id:'block-model', label:'3D block model', target:'#block-model', duration:16000, caption:'Inspect a separate 3D block model example, then explore the tutorial cases with our team.' },
  { id:'closing', label:'Explore further', target:'#booth-closing', duration:12000, caption:'Ask the OptimalSlope team to explore the software and case studies with you.' },
];
export const loopDuration = timeline.reduce((sum,scene) => sum + scene.duration,0);
export function locateTime(time) {
  let elapsed = ((time % loopDuration) + loopDuration) % loopDuration;
  for(let index=0;index<timeline.length;index++) {
    if(elapsed<timeline[index].duration) return {index,elapsed};
    elapsed-=timeline[index].duration;
  }
  return {index:0,elapsed:0};
}
