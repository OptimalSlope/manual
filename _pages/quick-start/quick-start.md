---
title: Quick Start
author: Dainius Jenkus
date: 2010-06-30
category: Tutorials
layout: post
permalink: /pages/quick-start/
nav_order: 10
---


<style>
.os-guide-page {
  --blue: #0a4e76;
  --blue2: #0f6e9f;
  --orange: #f16b21;
  --ink: #14202b;
  --muted: #617180;
  --line: rgba(20, 35, 50, 0.12);
  --shadow: 0 14px 34px rgba(20, 35, 50, 0.10);
  --shadow2: 0 22px 58px rgba(10, 78, 118, 0.18);
}

.os-guide-page * {
  box-sizing: border-box;
}

.os-guide-hero {
  position: relative;
  overflow: hidden;
  margin: 0 0 26px;
  padding: 38px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 88% 10%, rgba(241, 107, 33, 0.34), transparent 30%),
    linear-gradient(135deg, #062f50, var(--blue), var(--blue2));
  color: white;
  box-shadow: var(--shadow2);
}

.os-guide-hero::after {
  content: "OptimalSlope";
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%) rotate(-6deg);
  font-size: clamp(70px, 11vw, 150px);
  font-weight: 1000;
  letter-spacing: -0.06em;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
}

.os-guide-hero .kicker,
.os-guide-hero h1,
.os-guide-hero p {
  position: relative;
  z-index: 1;
}

.os-guide-hero .kicker {
  color: #ffd9c4;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.os-guide-hero h1 {
  margin: 10px 0 12px;
  color: white;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.os-guide-hero p {
  max-width: 860px;
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 18px;
  line-height: 1.5;
}

.os-guide-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
  margin: 0 0 30px;
}

.os-guide-nav a {
  display: block;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background:
    radial-gradient(circle at 100% 0%, rgba(241, 107, 33, 0.09), transparent 35%),
    linear-gradient(180deg, #ffffff, #f7fafc);
  color: var(--ink);
  text-decoration: none;
  box-shadow: var(--shadow);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.os-guide-nav a:hover {
  transform: translateY(-3px);
  border-color: rgba(241, 107, 33, 0.36);
  box-shadow: 0 18px 42px rgba(20, 35, 50, 0.14);
  text-decoration: none;
}

.os-guide-nav .icon {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-bottom: 10px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--blue), var(--blue2));
  color: white;
  font-weight: 1000;
}

.os-guide-nav strong {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 17px;
}

.os-guide-nav span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.os-guide-section {
  margin: 30px 0;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: white;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.os-guide-section-head {
  padding: 22px 26px 16px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.08);
  background:
    radial-gradient(circle at 96% 0%, rgba(241, 107, 33, 0.12), transparent 28%),
    radial-gradient(circle at 0% 0%, rgba(10, 78, 118, 0.11), transparent 34%),
    linear-gradient(180deg, #ffffff, #f6fafc);
}

.os-guide-section-head .label {
  color: var(--orange);
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.os-guide-section-head h2 {
  margin: 8px 0 8px;
  color: var(--ink);
  font-size: clamp(25px, 3vw, 38px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.os-guide-section-head p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.os-guide-section-body {
  padding: 22px 26px 28px;
}

.os-guide-page h3,
.os-guide-page h4 {
  color: var(--blue);
}

.os-guide-page ul,
.os-guide-page ol {
  line-height: 1.55;
}

.os-note,
.os-warning,
.os-tip {
  margin: 18px 0;
  padding: 16px 18px;
  border-radius: 16px;
  line-height: 1.5;
}

.os-note {
  border: 1px solid rgba(10, 78, 118, 0.18);
  background: #eef6fb;
}

.os-warning {
  border: 1px solid rgba(197, 73, 50, 0.28);
  background: #fff3f0;
}

.os-tip {
  border: 1px solid rgba(241, 107, 33, 0.28);
  background: #fff7f1;
}

.os-note strong,
.os-warning strong,
.os-tip strong {
  color: var(--blue);
}

.os-link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 12px;
  margin: 18px 0;
}

.os-link-card {
  display: block;
  padding: 15px 16px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fbfd);
  color: var(--ink);
  text-decoration: none;
}

.os-link-card:hover {
  text-decoration: none;
  border-color: rgba(241, 107, 33, 0.36);
  transform: translateY(-2px);
}

.os-link-card strong {
  display: block;
  color: var(--blue);
  margin-bottom: 4px;
}

.os-link-card span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.os-glossary-term {
  margin: 18px 0;
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fbfd);
}

.os-glossary-term h3 {
  margin-top: 0;
}

@media (max-width: 650px) {
  .os-guide-hero {
    padding: 28px;
  }

  .os-guide-section-body {
    padding: 20px;
  }
}
</style>


<div class="os-guide-page" markdown="1">

<section class="os-guide-hero" markdown="0">
<div class="kicker">Quick Start</div>
<h1>Run your first simulation</h1>
<p>A short route through Slope Optimiser for new users: prepare data, import or create a section, define properties, run the simulation, review results, and export outputs.</p>
</section>

<div class="os-guide-nav" markdown="0">
<a href="#prepare-data"><span class="icon">1</span><strong>Prepare data</strong><span>Check geometry quality before importing or slicing sections.</span></a>
<a href="#create-section"><span class="icon">2</span><strong>Create section</strong><span>Import a DXF section or slice one from 3D stratigraphy.</span></a>
<a href="#define-properties"><span class="icon">3</span><strong>Define properties</strong><span>Set bench, rock, general, and optional inputs.</span></a>
<a href="#run-simulation"><span class="icon">4</span><strong>Run simulation</strong><span>Configure the account and folder, then submit the cloud job.</span></a>
<a href="#review-export"><span class="icon">5</span><strong>Review and export</strong><span>Fetch results and export profiles or block models.</span></a>
</div>

<section class="os-guide-section" id="prepare-data" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Step 1</div>
<h2 id="prepare-data">Prepare input data</h2>
<p>Clean input geometry improves slicing, material assignment, and simulation reliability.</p>
</div>
<div class="os-guide-section-body" markdown="1">

Before creating a simulation, check that the imported DXF sections or 3D stratigraphy data are suitable for modelling.

Focus on:

- clean and continuous section boundaries;
- correct layer organisation;
- minimal gaps or overlaps;
- realistic geometry around the expected slope area;
- consistent units and coordinates.

<div class="os-tip" markdown="1">
<strong>Recommended starting point:</strong> Review the Data Preparation page before working with new project data.
</div>

<a class="os-link-card" href="{{ '/pages/Data%20Suitability/7-data/' | relative_url }}">
<strong>Open Data Preparation</strong>
<span>Review geometry quality, DXF preparation, layer organisation, gaps, overlaps, and input suitability.</span>
</a>

</div>
</section>

<section class="os-guide-section" id="create-section" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Step 2</div>
<h2 id="create-section">Import or create a section</h2>
<p>Start from an existing DXF section or generate a section from 3D stratigraphy.</p>
</div>
<div class="os-guide-section-body" markdown="1">

You can create the analysis section in two main ways:

1. **Directly import a DXF section** using `File -> Import Section -> DXF`.
2. **Import 3D stratigraphy** using `File -> Import Stratigraphy -> DXF`, then create a section using the slicing tool.

Use direct DXF import when your section is already prepared. Use slicing when the section must be generated from 3D geological solids or wireframes.

For slicing, open the tool, click **Select visible models**, choose the plane direction, and position the live clipping plane. Drag the arrow handle to move the plane. For a vertical plane, drag the circular rotation handle to rotate the plane and change its azimuth. Review the live preview before clicking **Slice**.

<div class="os-link-grid" markdown="0">
<a class="os-link-card" href="{{ '/pages/Tutorials/Workflow/#importing-sections' | relative_url }}"><strong>Workflow: Importing Sections</strong><span>Follow the workflow step for importing or generating sections.</span></a>
<a class="os-link-card" href="{{ '/pages/project/3-project-management/#creating-sections' | relative_url }}"><strong>Slicing</strong><span>Create sections from imported 3D stratigraphy.</span></a>
</div>

</div>
</section>

<section class="os-guide-section" id="define-properties" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Step 3</div>
<h2 id="define-properties">Define properties</h2>
<p>Set the inputs required for the selected section before running the simulation.</p>
</div>
<div class="os-guide-section-body" markdown="1">

At minimum, check and define:

- **Bench properties** such as bench height, bench face angle, berm width, and number of benches.
- **Rock properties** using the appropriate strength model.
- **Slope anchor**: use a crest with a target slope height, or define the toe position and elevation and let the software calculate slope height.
- **General section properties** such as failure direction and target Factor of Safety.
- Optional inputs, such as a water table and pressure method, line or distributed loads, roads, tension cracks, and faults.

<div class="os-warning" markdown="1">
<strong>Check the active slope anchor:</strong> A crest too close to the boundary can move the OSA search region outside the ground surface. A toe must have valid X and Z coordinates and remain inside the section, at or below the topography, and above the section floor.
</div>

<a class="os-link-card" href="{{ '/pages/properties/6-properties/' | relative_url }}">
<strong>Open Properties</strong>
<span>Review slope anchors, bench and rock inputs, loads, roads, groundwater, and fault settings.</span>
</a>

</div>
</section>

<section class="os-guide-section" id="run-simulation" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Step 4</div>
<h2 id="run-simulation">Run the simulation</h2>
<p>Submit the simulation after account, folder, and input checks are complete.</p>
</div>
<div class="os-guide-section-body" markdown="1">

Before starting:

1. Select the section of interest.
2. Choose **Automatic** or **Custom** under **Simulation results location**. Automatic mode requires a saved project; Custom mode requires an existing selected folder.
3. Configure the user profile under `Tools -> Settings -> Account` if this is the first cloud run.
4. Click **Start** and resolve every item in **Simulation Check**. Use **Fix** to open and highlight the affected input, then select **Check Again**.
5. When the check passes, click **Start** again and review any later geometry or groundwater warnings.
6. Monitor the **Node status** summary while the simulation runs. Open the panel and select a node to inspect its output; use **Show main output** to return to the main log.
7. Fetch results when they are available.

<div class="os-link-grid" markdown="0">
<a class="os-link-card" href="{{ '/pages/Tutorials/Workflow/#running-simulations' | relative_url }}"><strong>Workflow: Running Simulations</strong><span>See the detailed simulation workflow.</span></a>
<a class="os-link-card" href="{{ '/pages/troubleshooting/' | relative_url }}"><strong>Help and Solutions</strong><span>Check common issues before and after running simulations.</span></a>
</div>

</div>
</section>

<section class="os-guide-section" id="review-export" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Step 5</div>
<h2 id="review-export">Review and export results</h2>
<p>Fetch simulation outputs, review the result plot and logs, then export downstream files.</p>
</div>
<div class="os-guide-section-body" markdown="1">

After the simulation is complete:

- review the interactive result plot and logs;
- use the first plot-toolbar button to fit the plot, then control the legend and visible items, change the theme, copy the plot, or save it as PNG/SVG;
- detach plots and keep multiple cross-section results open for comparison;
- export the optimised slope profile to DXF if it is needed for external workflows;
- create a new project cross-section from the optimised output when required;
- export a section block model when the section is associated with 3D stratigraphy;
- use downstream import steps for RS2 or Datamine where relevant.

<div class="os-link-grid" markdown="0">
<a class="os-link-card" href="{{ '/pages/Tutorials/Workflow/#exporting-output-profile-to-dxf' | relative_url }}"><strong>Export DXF</strong><span>Export the optimised slope profile for external analysis.</span></a>
<a class="os-link-card" href="{{ '/pages/Tutorials/Workflow/#exporting-the-section-block-model' | relative_url }}"><strong>Export Block Model</strong><span>Create a block model using optimised slope-angle results.</span></a>
<a class="os-link-card" href="{{ '/pages/Tutorials/Workflow/#import-block-model-into-datamine' | relative_url }}"><strong>Import into Datamine</strong><span>Import and combine exported block model data in Datamine.</span></a>
</div>

</div>
</section>

</div>
