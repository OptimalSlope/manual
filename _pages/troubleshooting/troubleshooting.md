---
title: Troubleshooting
author: Dainius Jenkus
date: 2010-06-30
category: Troubleshooting
layout: post
permalink: /pages/troubleshooting/
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
<div class="kicker">Troubleshooting</div>
<h1>Common issues and checks</h1>
<p>Use this page when a simulation warning appears, results are not available, or exported data does not behave as expected in downstream software.</p>
</section>

<div class="os-guide-nav" markdown="0">
<a href="#gaps-overlaps"><span class="icon">1</span><strong>Gaps and overlaps</strong><span>Understand geometry warnings and when to repair input data.</span></a>
<a href="#osa-search-region"><span class="icon">2</span><strong>OSA search region</strong><span>Check crest point, Min/Max OSA, and search-region limits.</span></a>
<a href="#simulation-start"><span class="icon">3</span><strong>Simulation setup</strong><span>Check profile, selected section, and simulation folder.</span></a>
<a href="#results-fetch"><span class="icon">4</span><strong>Results and export</strong><span>Review missing results, DXF export, and block model output.</span></a>
</div>

<section class="os-guide-section" id="gaps-overlaps" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Geometry warning</div>
<h2 id="gaps-overlaps">Gaps and overlaps warning</h2>
<p>Gaps and overlaps indicate that the section geometry may not assign material regions clearly.</p>
</div>
<div class="os-guide-section-body" markdown="1">

#### What it means

- **Gaps** are undefined regions between section boundaries or layer wires.
- **Overlaps** are conflicting regions where two or more material areas occupy the same space.

#### Common causes

- DXF section boundaries are not closed or continuous.
- Layer wires intersect or cross incorrectly.
- Duplicate or very small sliver lines are present.
- Imported 3D data contains inconsistent surfaces or solids.

#### How to check

Open the Visualiser and inspect detected markers:

- red markers indicate gap points;
- blue markers indicate overlap points.

#### How to fix

- Repair large or repeated gaps before running the simulation.
- Correct visible overlaps where material boundaries cross.
- Remove duplicate or unnecessary geometry.
- Pay particular attention to issues near the slope face, toe, crest, or expected failure region.

<div class="os-note" markdown="1">
<strong>When it may be acceptable:</strong> A few small isolated markers away from the critical slope region may not significantly affect the result, but the geometry should still be reviewed carefully.
</div>

<a class="os-link-card" href="{ '/pages/Tutorials/Workflow/#section-geometry-checks-gaps-and-overlaps' | relative_url }">
<strong>Related workflow section</strong>
<span>Read the detailed gaps and overlaps checklist.</span>
</a>

</div>
</section>

<section class="os-guide-section" id="osa-search-region" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Search region warning</div>
<h2 id="osa-search-region">OSA search region issues</h2>
<p>The OSA search region controls where the optimiser searches for the optimal slope profile.</p>
</div>
<div class="os-guide-section-body" markdown="1">

#### Problem: OSA triangle extends outside the model

This can happen when the crest point is too close to the outer edge of the section or terrain. The calculated slope profile may project outside the available ground surface.

#### How to fix

- Move the crest point further inside the section.
- Check slope height and OSA limits.
- Confirm that the green triangular search region remains within the available ground or material area.

#### Problem: OSA range is too narrow

If the minimum and maximum OSA values create only a very small search range, the optimiser has limited flexibility and may not explore enough possible profiles.

#### How to fix

- Review Min/Max OSA values.
- Adjust crest position if necessary.
- Check that the search range is realistic for the section geometry.

<div class="os-tip" markdown="1">
<strong>Practical tip:</strong> Position the crest slightly further inside the section boundary than you think is necessary, then confirm that the OSA search region remains inside valid material.
</div>

<a class="os-link-card" href="{ '/pages/Tutorials/Workflow/#crest-point-and-osa-search-region-checks' | relative_url }">
<strong>Related workflow section</strong>
<span>Read the crest point and OSA search region guidance.</span>
</a>

</div>
</section>

<section class="os-guide-section" id="simulation-start" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Simulation setup</div>
<h2 id="simulation-start">Simulation does not start</h2>
<p>Most start-up issues are caused by missing setup, missing section data, or unresolved input warnings.</p>
</div>
<div class="os-guide-section-body" markdown="1">

Check the following:

- A valid section is selected.
- Required bench, rock, and general section properties are defined.
- A simulation folder has been selected.
- The user profile is configured under `Tools -> Settings -> Account`.
- The selected section has valid geometry and required inputs.
- Any warnings have been reviewed before continuing.

<div class="os-note" markdown="1">
<strong>Cloud simulation note:</strong> Slope Optimiser runs simulations on the cloud, so the user account/profile must be configured before cloud runs can be submitted.
</div>

<a class="os-link-card" href="{ '/pages/Tutorials/Workflow/#running-simulations' | relative_url }">
<strong>Related workflow section</strong>
<span>Review the full simulation setup workflow.</span>
</a>

</div>
</section>

<section class="os-guide-section" id="results-fetch" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Results and exports</div>
<h2 id="results-fetch">Results or exports do not look correct</h2>
<p>Review result folders, export options, and downstream import requirements.</p>
</div>
<div class="os-guide-section-body" markdown="1">

#### Results are not available

Check that:

- the simulation was submitted successfully;
- the correct simulation folder is selected;
- **Fetch results** has been used to update the local results;
- the results folder contains logs and output files.

#### Exported DXF does not import as expected

For RS2 workflows, use the `Local XY` export method when a 2D section is required. Some external applications may still require manual cleanup or additional boundary definition after import.

#### Block model output does not look correct

Check that:

- the section is associated with 3D stratigraphy;
- block dimensions are appropriate for the model scale;
- exported fields are mapped correctly in downstream software;
- slope-angle fields are imported as numeric attributes where required.

<div class="os-link-grid" markdown="0">
<a class="os-link-card" href="{ '/pages/Tutorials/Workflow/#exporting-output-profile-to-dxf' | relative_url }"><strong>Export DXF</strong><span>Review export options and coordinate systems.</span></a>
<a class="os-link-card" href="{ '/pages/Tutorials/Workflow/#importing-output-into-rockscience-rs2' | relative_url }"><strong>Import into RS2</strong><span>Prepare exported profiles for RS2.</span></a>
<a class="os-link-card" href="{ '/pages/Tutorials/Workflow/#import-block-model-into-datamine' | relative_url }"><strong>Import into Datamine</strong><span>Map block model fields and combine slope-angle data.</span></a>
</div>

</div>
</section>

</div>
