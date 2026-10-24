import { caseStudies, timeline, locateTime } from './timeline.mjs';

// Opt-in extension: reuse the original document, styles and animated viewers.
export async function extendConferenceDemo(api) {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = new URL('./showcase.css', import.meta.url).href;
  await new Promise(resolve => {
    stylesheet.onload = resolve;
    stylesheet.onerror = resolve;
    document.head.append(stylesheet);
  });
  api.stopOriginalDemo();
  api.stopWorkflow();
  document.body.classList.add('booth-extended', 'demo-mode-active');
  document.title = 'OptimalSlope · Slope Stability 2026 · Workflow and tutorial cases';
  // Main presentation headings use Title Case; explanatory copy stays in
  // sentence case. Keep this opt-in so the original demo is unchanged.
  for(const [selector,title] of [
    ['#workflow h2','OptimalSlope Workflow'],
    ['#comparison h2','Pitwall Section Comparison'],
    ['#result-plot h2','Optimised Profile Plot'],
    ['#osa-plot h2','OSA Search Region'],
  ]) document.querySelector(selector).textContent = title;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shell = document.querySelector('.shell');
  const nav = document.querySelector('.nav-inner');
  const toast = document.getElementById('demoToast');
  const originalDemoButton = document.getElementById('conferenceDemo');
  const event = node('span','booth-event','Slope Stability 2026 · Lima');
  document.querySelector('.hero .eyebrow').after(event);
  const caseLink = node('a','','Tutorial cases');
  caseLink.href = `#tutorial-${caseStudies[0].id}`;
  nav.insertBefore(caseLink, originalDemoButton);
  const searchLink=node('a','','Profile search');
  searchLink.href='#profile-search';
  nav.insertBefore(searchLink,nav.querySelector('a[href="#comparison"]'));
  const searchSection=node('section','section booth-search');
  searchSection.id='profile-search';
  const searchHead=node('div','section-head');
  const searchHeading=node('div');
  searchHeading.append(node('div','section-kicker','OPTIMISATION PRINCIPLE'),
    node('h2','','Explore Different Slope Profiles'),
    node('p','','Candidate shapes vary within the OSA limits, then settle onto the found optimal profile.'));
  searchHead.append(searchHeading,node('span','badge','Illustrative search'));
  const searchViewer=node('iframe','booth-search-viewer');
  searchViewer.src=new URL('./search-viewer.html?managed=1',import.meta.url).href;
  searchViewer.title='Animated slope-profile search within the OSA region';
  searchSection.append(searchHead,searchViewer);
  shell.insertBefore(searchSection,document.getElementById('comparison'));
  const caseFrames = new Map();

  for(const scene of caseStudies) {
    const section = node('section','section booth-case');
    section.id = `tutorial-${scene.id}`;
    section.setAttribute('aria-labelledby',`${section.id}-title`);
    const head = node('div','section-head');
    const heading = node('div');
    const title = node('h2','',scene.title.replaceAll('<br>',' '));
    title.id = `${section.id}-title`;
    heading.append(node('div','section-kicker',scene.kicker),title,node('p','',scene.subtitle));
    head.append(heading,node('span','badge',`Case ${scene.number}`));
    const body = node('div','booth-case-body');
    const plot = node('div','booth-case-plot');
    plot.append(node('div','booth-plot-label','Interactive tutorial result · Saved optimisation output'));
    const viewer = node('iframe','booth-case-viewer');
    viewer.src = new URL(`./plot-viewer.html?case=${scene.id}`,import.meta.url).href;
    viewer.title = `Case ${scene.number} · ${title.textContent} · Interactive result plot`;
    viewer.loading = 'eager';
    plot.append(viewer);
    caseFrames.set(scene.id,viewer);
    const info = node('aside','booth-case-info');
    const metric = node('div','booth-fos');
    metric.append(node('span','','Achieved Factor of Safety'),node('strong','',scene.fos),node('small','','Target Factor of Safety: 1.3'));
    info.append(metric,detail(scene.detailLabel,scene.detail),detail(scene.heightLabel,scene.heightValue),node('p','booth-context',scene.context));
    body.append(plot,info);
    const caption = node('div','booth-case-caption');
    caption.append(node('strong','booth-beat-label','DESIGN INPUTS'),node('p','booth-beat-text',scene.beats[0]));
    section.append(head,body,caption,node('div','booth-case-source',`Tutorial Case ${scene.number} · Supplied FinalPlot result · No live optimisation`));
    shell.insertBefore(section,document.getElementById('block-model'));
  }

  const closing = node('section','section');
  closing.id = 'booth-closing';
  const closingHead = node('div','section-head');
  const closingTitle = node('div');
  closingTitle.append(node('div','section-kicker','MEET THE OPTIMALSLOPE TEAM'),node('h2','','Let’s Discuss Your Slope Design.'),node('p','','Explore the software and worked case studies with us.'));
  closingHead.append(closingTitle);
  const closingBody = node('div','booth-end-body');
  const invitation = node('div');
  invitation.append(node('h3','','Continue with the Tutorials'),node('p','','Four featured examples cover layered geology, groundwater, prescribed crest and toe positions, and faults.'));
  const address = node('div','booth-end-url');
  address.append(node('small','','ONLINE MANUAL'),document.createTextNode('optimalslope.github.io/manual/pages/tutorials/'));
  closingBody.append(invitation,address);
  closing.append(closingHead,closingBody);
  shell.append(closing);

  // The existing 3D viewer uses illustrative elevation bands, not tutorial angles.
  const blockSection = document.getElementById('block-model');
  blockSection.querySelector('h2').textContent = '3D Block Model Viewer';
  blockSection.querySelector('.section-head p').textContent = 'Explore a separate block model illustration. Colours identify elevation bands—not tutorial result angles.';
  const blockFrame = blockSection.querySelector('iframe');
  const blockUrl = new URL('../../interactive/block-model-viewer/',import.meta.url).href;
  blockFrame.src = blockUrl;
  for(const link of blockSection.querySelectorAll('a')) link.href = blockUrl;
  const blockFallback=node('div','booth-block-fallback');
  blockFallback.hidden=true;
  blockFallback.append(plotSvg({id:'export-preview',image:'../../assets/docs_images/block_model_export.png',width:1698,height:1005,crop:'690 250 850 610',alt:'Saved application screenshot of a separate 3D block-model export preview.'}),node('p','','Saved block-model export preview · Interactive viewer is unavailable'));
  blockFrame.after(blockFallback);
  let blockPolls=0;
  function configureBlock() {
    blockPolls++;
    let ready=false;
    try {
      const doc = blockFrame.contentDocument;
      doc.querySelector('#toolbar strong').textContent = '3D block model illustration';
      doc.getElementById('legend').hidden = true;
      if(!doc.getElementById('booth-band-note')) {
        const note = doc.createElement('p');
        note.id='booth-band-note';
        note.textContent = 'Colours identify elevation bands for illustration, not calculated tutorial slope angles.';
        doc.getElementById('toolbar').append(note);
      }
      ready=doc.getElementById('status').textContent.startsWith('Showing ');
    } catch { /* The labelled outer section remains the fallback. */ }
    if(ready) {
      blockFallback.hidden=true;blockFrame.style.display='block';clearInterval(blockPolling);
      blockSection.querySelector('.section-head p').textContent='Explore a separate block model illustration. Colours identify elevation bands—not tutorial result angles.';
    } else if(blockPolls>=10) {
      blockFallback.hidden=false;blockFrame.style.display='none';
      blockSection.querySelector('.section-head p').textContent='Saved application preview of a separate 3D block model export. The tutorial result plots are 2D sections.';
    }
    if(blockPolls>=30)clearInterval(blockPolling);
  }
  const blockPolling=setInterval(configureBlock,1000);
  blockFrame.addEventListener('load',configureBlock);

  // Retain each original viewer's styling and controls, but fit its plot into
  // the TV's available height rather than cutting off a long nested document.
  const moduleLayouts=[
    ['#result-plot iframe', '.shell{width:100%;padding:0}.section{margin:0;border:0;border-radius:0;box-shadow:none}.section-head{display:none}.result-intro{padding:10px 20px;gap:12px}.stat{padding:10px 14px}.stat p{display:none}.plot-card{margin:8px 18px}.plot-toolbar{padding:10px 14px;min-height:50px}.plot-stage{height:calc(100vh - 220px);min-height:200px}#resultSvg{height:100%;width:100%}.legend-panel{padding:8px 12px;gap:8px 16px}.layer-legend-panel{display:none}'],
    ['#osa-plot iframe', '.shell{width:100%;padding:0}.viewer-card{border:0;border-radius:0;box-shadow:none}.toolbar{padding:10px 18px;min-height:60px}.toolbar-subtitle{display:none}.info-row{padding:10px 18px}.stage{padding:8px 18px}.plot-wrap{height:calc(100vh - 230px);min-height:200px}.legend{padding:8px 18px}'],
  ];
  for(const [selector,css] of moduleLayouts) {
    const frame=document.querySelector(selector);
    frame.loading='eager';
    const configure=()=>{
      try {
        const doc=frame.contentDocument;
        if(!doc?.head||doc.getElementById('booth-tv-fit'))return;
        const style=doc.createElement('style');style.id='booth-tv-fit';style.textContent=css;doc.head.append(style);
      } catch { /* Same-origin local viewers are expected. */ }
    };
    frame.addEventListener('load',()=>{
      configure();
      if(selector==='#osa-plot iframe'&&timeline[index].id==='osa-plot'&&!paused)api.startOsa();
    });
    configure();
  }

  const controller = node('nav','booth-controller');
  controller.setAttribute('aria-label','Presenter controls');
  const pause = button('Pause','Pause presentation');
  const previous = button('← Previous','Previous scene');
  const next = button('Next →','Next scene');
  const restart = button('Restart','Restart presentation');
  const fullscreen = button('Fullscreen','Toggle fullscreen');
  const selector = node('select');
  selector.setAttribute('aria-label','Jump to scene');
  timeline.forEach((scene,i)=>selector.append(new Option(scene.label,String(i))));
  const progress = node('span','booth-progress');
  controller.append(pause,previous,next,restart,fullscreen,selector,progress);
  if(window.parent !== window) {
    const smaller = button('−','Zoom presentation out');
    const scaleLabel = node('span','booth-progress','View 100%');
    scaleLabel.setAttribute('aria-live','polite');
    const larger = button('+','Zoom presentation in');
    const fitView = button('Fit to screen','Fit presentation to screen');
    const sendView = data => window.parent.postMessage(data,location.origin);
    smaller.addEventListener('click',()=>sendView({type:'booth-view-zoom',direction:-1}));
    larger.addEventListener('click',()=>sendView({type:'booth-view-zoom',direction:1}));
    fitView.addEventListener('click',()=>sendView({type:'booth-view-fit'}));
    window.addEventListener('message',event=>{
      if(event.source !== window.parent || event.origin !== location.origin || event.data?.type !== 'booth-view-scale') return;
      if(Number.isFinite(event.data.percent)) scaleLabel.textContent=`View ${event.data.percent}%`;
    });
    controller.append(smaller,scaleLabel,larger,fitView);
    sendView({type:'booth-view-ready'});
  }
  document.body.append(controller);

  const params = new URLSearchParams(location.search);
  let index = Math.max(0,timeline.findIndex(scene=>scene.id===params.get('scene')));
  let paused = params.get('paused')==='1';
  let elapsed = 0;
  let lastFrame = performance.now();
  let beat = -1;
  let hideTimer;
  let resumeAfterHidden = false;
  let zoomed = false;

  function node(tag,className,text) {
    const element = document.createElement(tag);
    if(className) element.className=className;
    if(text!==undefined) element.textContent=text;
    return element;
  }
  function button(text,label) {
    const element=node('button','',text);
    element.type='button';
    element.setAttribute('aria-label',label);
    return element;
  }
  function detail(label,value) {
    const element=node('div','booth-detail');
    element.append(node('span','',label),node('strong','',value));
    return element;
  }
  function plotSvg(scene) {
    const ns='http://www.w3.org/2000/svg';
    const svg=document.createElementNS(ns,'svg');
    svg.setAttribute('viewBox',scene.crop||`0 0 ${scene.width} ${scene.height}`);
    svg.setAttribute('role','img');
    svg.setAttribute('aria-label',scene.alt);
    const image=document.createElementNS(ns,'image');
    image.setAttribute('width',scene.width);
    image.setAttribute('height',scene.height);
    image.setAttribute('href',new URL(scene.image,import.meta.url).href);
    if(scene.crop) {
      const defs=document.createElementNS(ns,'defs');
      const clip=document.createElementNS(ns,'clipPath');
      clip.id=`booth-crop-${scene.id}`;
      const rect=document.createElementNS(ns,'rect');
      scene.crop.split(' ').forEach((value,i)=>rect.setAttribute(['x','y','width','height'][i],value));
      clip.append(rect);defs.append(clip);svg.append(defs);
      image.setAttribute('clip-path',`url(#${clip.id})`);
    }
    svg.append(image);
    return svg;
  }
  function stopMotion() {
    api.stopWorkflow();api.stopComparison();api.stopOsa();api.resetResult();
    sendSearchState(true);
  }
  function focusCurrent() {
    const scene=timeline[index];
    document.querySelectorAll('.booth-focus,.demo-focus').forEach(element=>element.classList.remove('booth-focus','demo-focus'));
    const target=document.querySelector(scene.target);
    target.classList.add('booth-focus','demo-focus');
    const offset=scene.target==='.hero'?22:Math.max(118,document.querySelector('.nav').getBoundingClientRect().height+38);
    scrollTo({top:Math.max(0,scrollY+target.getBoundingClientRect().top-offset),behavior:reducedMotion?'instant':'smooth'});
    toast.classList.add('show');
    toast.classList.toggle('booth-caption-inline',!!scene.case);
    toast.textContent=scene.caption;
  }
  function startMotion() {
    const scene=timeline[index];
    if(scene.stage!==undefined) api.setStage(scene.stage);
    if(!paused&&scene.id==='comparison') api.startComparison();
    if(!paused&&scene.id==='osa-plot') api.startOsa();
    if(scene.id==='profile-search')sendSearchState(paused);
  }
  function applyScene() {
    stopMotion();
    document.body.dataset.boothScene=timeline[index].id;
    selector.value=String(index);
    beat=-1;zoomed=false;
    if(timeline[index].case) sendPlotView(timeline[index].case.id,'reset');
    if(timeline[index].id==='comparison') api.setComparison(0);
    focusCurrent();startMotion();update();
  }
  function setPaused(value) {
    paused=value;
    document.body.dataset.boothPaused=String(paused);
    pause.textContent=paused?'Play':'Pause';
    pause.setAttribute('aria-label',paused?'Play presentation':'Pause presentation');
    originalDemoButton.textContent=paused?'Play demo':'Pause demo';
    lastFrame=performance.now();
    if(paused) {api.stopComparison();api.stopOsa();}
    else startMotion();
    if(timeline[index].id==='profile-search')sendSearchState(paused);
  }
  function goTo(value) {
    index=(value+timeline.length)%timeline.length;elapsed=0;lastFrame=performance.now();applyScene();
  }
  function revealControls() {
    document.body.classList.add('booth-controls-visible');clearTimeout(hideTimer);
    hideTimer=setTimeout(()=>{
      if(!controller.matches(':focus-within,:hover')) document.body.classList.remove('booth-controls-visible');
    },4000);
  }
  function update() {
    const scene=timeline[index];
    if(scene.id==='profile-search')sendSearchState(paused);
    const nextBeat=scene.case?Math.min(2,Math.floor(elapsed/scene.duration*3)):0;
    if(nextBeat!==beat&&scene.case) {
      beat=nextBeat;
      const section=document.querySelector(scene.target);
      section.querySelector('.booth-beat-label').textContent=['DESIGN INPUTS','OPTIMISATION','RESULT REVIEW'][beat];
      section.querySelector('.booth-beat-text').textContent=scene.case.beats[beat];
    }
    if(scene.id==='result-plot'&&elapsed>=4000&&!zoomed&&!paused) {api.zoomResult();zoomed=true;}
    if(scene.case&&elapsed>=scene.duration/3&&!zoomed&&!paused) {
      sendPlotView(scene.case.id,'focus');zoomed=true;
    }
    progress.textContent=`${index+1}/${timeline.length} · ${Math.ceil((scene.duration-elapsed)/1000)}s`;
  }
  function sendPlotView(caseId,action) {
    caseFrames.get(caseId)?.contentWindow?.postMessage({type:'tutorial-plot-view',case:caseId,action},location.origin);
  }
  function sendSearchState(isPaused) {
    searchViewer.contentWindow?.postMessage({type:'profile-search-state',elapsed,paused:isPaused},location.origin);
  }
  window.addEventListener('message',event=>{
    if(event.origin!==location.origin)return;
    if(event.source===searchViewer.contentWindow&&event.data?.type==='profile-search-control') {
      const action=event.data.action;
      if(action==='ready')sendSearchState(paused||timeline[index].id!=='profile-search');
      else if(['play','pause','replay'].includes(action)) {
        if(timeline[index].id!=='profile-search'||action==='replay')goTo(timeline.findIndex(s=>s.id==='profile-search'));
        setPaused(action==='pause');revealControls();
      }
      return;
    }
    const id=event.data?.case,frame=caseFrames.get(id);
    if(!frame||event.source!==frame.contentWindow)return;
    if(event.data.type==='tutorial-plot-interaction') {
      if(timeline[index].case?.id===id)setPaused(true);
      revealControls();
    } else if(event.data.type==='tutorial-plot-ready') {
      if(Number.isFinite(event.data.fos))document.querySelector(`#tutorial-${id} .booth-fos strong`).textContent=event.data.fos.toFixed(3);
      if(timeline[index].case?.id===id&&!paused&&elapsed>=timeline[index].duration/3)sendPlotView(id,'focus');
    }
  });
  pause.addEventListener('click',()=>setPaused(!paused));
  previous.addEventListener('click',()=>goTo(index-1));
  next.addEventListener('click',()=>goTo(index+1));
  restart.addEventListener('click',()=>{goTo(0);setPaused(false);});
  selector.addEventListener('change',()=>goTo(Number(selector.value)));
  fullscreen.addEventListener('click',async()=>{
    try {if(document.fullscreenElement) await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
    catch {toast.textContent='Use your browser’s fullscreen control. The presentation remains available.';toast.classList.remove('booth-caption-inline');}
  });
  document.addEventListener('pointermove',revealControls,{passive:true});
  document.addEventListener('pointerdown',revealControls,{passive:true});
  controller.addEventListener('focusout',revealControls);
  controller.addEventListener('pointerleave',revealControls);
  document.addEventListener('click',event=>{
    if(event.target.closest('#conferenceDemo')) {event.preventDefault();event.stopImmediatePropagation();setPaused(!paused);}
    else if(event.target.closest('.nav a')) setPaused(true);
  },true);
  document.addEventListener('keydown',event=>{
    revealControls();
    if(event.target.closest('select,input,textarea'))return;
    if(event.key===' '&&event.target.closest('button,a'))return;
    if([' ','ArrowLeft','ArrowRight','Home'].includes(event.key))event.preventDefault();
    if(event.key===' ')setPaused(!paused);
    else if(event.key==='ArrowLeft')goTo(index-1);
    else if(event.key==='ArrowRight')goTo(index+1);
    else if(event.key==='Home'){goTo(0);setPaused(false);}
  });
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){resumeAfterHidden=!paused;setPaused(true);}
    else if(resumeAfterHidden){resumeAfterHidden=false;setPaused(false);}
  });
  addEventListener('resize',focusCurrent);
  window.startOptimalSlopeDemo=()=>{goTo(0);setPaused(false);};
  window.stopOptimalSlopeDemo=()=>setPaused(true);
  applyScene();setPaused(paused);revealControls();
  document.body.dataset.boothReady='true';
  function tick(now) {
    const delta=Math.max(0,now-lastFrame);lastFrame=now;
    if(!paused) {
      elapsed+=delta;
      if(elapsed>=timeline[index].duration) {
        const offset=timeline.slice(0,index).reduce((sum,scene)=>sum+scene.duration,0);
        const located=locateTime(offset+elapsed);index=located.index;elapsed=located.elapsed;applyScene();
      } else update();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
