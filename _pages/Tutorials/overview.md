---
title: Tutorials
author: Dainius Jenkus
date: 2026-10-09
last_updated: 9 October 2026
category: Tutorials
layout: post
permalink: /pages/tutorials/
nav_order: 35
nav_sections:
  - title: Before You Begin
    anchor: before-you-begin
  - title: Download Tutorial Files
    anchor: download-tutorial-files
  - title: Choose a Case
    anchor: choose-a-case
  - title: Review and Reuse Results
    anchor: review-and-reuse-results
---

{% include tutorial-styles.html %}

<div class="os-tutorials-page" markdown="1">

<section class="os-tutorials-hero" markdown="0">
<div class="kicker">Practical exercises</div>
<div class="os-tutorials-hero-title">Slope Optimisation Case Studies</div>
<p>Practise the Slope Optimiser workflow with six worked cases. Begin with a homogeneous slope, then explore layered materials, groundwater, crest and toe anchors, and geological faults.</p>
</section>

[Start Case 1a]({{ '/pages/tutorials/case-1a/' | relative_url }}) to follow your first exercise online, or choose a case below. Each case includes its input values, illustrated steps, and example results.

<section class="os-tutorials-section" markdown="1">
<div class="os-tutorials-section-head" markdown="0">
<h2 id="before-you-begin">Before you begin</h2>
<p>Set up the software and your account before starting the exercises.</p>
</div>
<div class="os-tutorials-section-body" markdown="1">

1. Install Slope Optimiser from the [OptimalSlope website](https://optimalslope.com/).
2. Have a valid software licence and the account credentials provided to you.
3. Open **Tools > Settings > Account**, enter your **Username**, **Access Key ID**, and **Secret Access Key**, then click **Configure**.
4. Click **Check profile** and confirm that the account is configured correctly.
5. Download the tutorial models below and extract the ZIP into a working folder before opening or importing files. The workbook PDF is optional for printing or offline use.

Each exercise follows the same sequence: create or open a project, import a section, define properties, set the slope geometry, run a simulation, review the results, and export the output. For the supplied DXF sections, select **Meters** when importing.

<div class="os-callout os-callout--tip" markdown="1">
New to the interface? Read [Quick Start]({{ '/pages/quick-start/' | relative_url }}) first. Keep [Simulation Workflow]({{ '/pages/Tutorials/Workflow/' | relative_url }}) open for detailed explanations of individual tools and simulation checks.
</div>

</div>
</section>

<section class="os-tutorials-section" markdown="1">
<div class="os-tutorials-section-head" markdown="0">
<h2 id="download-tutorial-files">Download tutorial files</h2>
<p>Follow the exercises online and download the models to practise in the software.</p>
</div>
<div class="os-tutorials-section-body" markdown="1">

<div class="os-tutorials-grid" markdown="0">
<div class="os-tutorials-card">
<h3>Tutorial models</h3>
<p>DXF sections, starter and final CBF projects, and example exported profiles, organised in the same case folders as the workbook.</p>
<a class="os-tutorials-download" href="{{ '/assets/tutorials/workshop/tutorial-models.zip' | relative_url }}" download>Download tutorial models ZIP</a>
</div>
<div class="os-tutorials-card">
<h3>Optional Workbook PDF</h3>
<p>All six exercises for printing or offline use, with numbered steps, material inputs, screenshots, and example results. PDF, approximately 28 MB.</p>
<a class="os-tutorials-download" href="{{ '/assets/tutorials/workshop/Workshop_Instructions_EN.pdf' | relative_url }}" download>Download workbook PDF</a>
</div>
</div>

Use the **starter** project when you want to begin with an existing project file, or import the DXF to follow an exercise from the beginning. The **final** project provides a reference for checking the completed setup. Each online case includes the workbook's example result plot.

The workbook was prepared for the IOC 2026 OPTIMALMINE School on 7 October 2026. Its exercises can also be followed independently.

</div>
</section>

<section class="os-tutorials-section" markdown="1">
<div class="os-tutorials-section-head" markdown="0">
<h2 id="choose-a-case">Choose a case</h2>
<p>Start with Case 1a and follow the sequence below to introduce one feature at a time.</p>
</div>
<div class="os-tutorials-section-body" markdown="1">

<div class="os-tutorials-grid" markdown="0">
<article class="os-tutorials-card">
<div class="os-tutorials-case-label">Case 1a</div>
<h3>Homogeneous Slope with Mohr-Coulomb</h3>
<p>Create your first model, assign bench and rock properties, define a crest anchor, and review the optimised slope and Factor of Safety.</p>
<p><strong>Workbook:</strong> pages 5-11.</p>
<a class="os-tutorials-case-link" href="{{ '/pages/tutorials/case-1a/' | relative_url }}">Open Case 1a</a>
</article>
<article class="os-tutorials-card">
<div class="os-tutorials-case-label">Case 1b</div>
<h3>Homogeneous Slope with Hoek-Brown</h3>
<p>Use the Generalised Hoek-Brown strength model and practise entering its rock-mass parameters.</p>
<p><strong>Workbook:</strong> pages 12-16.</p>
<a class="os-tutorials-case-link" href="{{ '/pages/tutorials/case-1b/' | relative_url }}">Open Case 1b</a>
</article>
<article class="os-tutorials-card">
<div class="os-tutorials-case-label">Case 2</div>
<h3>Layered Slope</h3>
<p>Assign separate material properties to multiple geological layers and optimise the resulting slope.</p>
<p><strong>Workbook:</strong> pages 17-21.</p>
<a class="os-tutorials-case-link" href="{{ '/pages/tutorials/case-2/' | relative_url }}">Open Case 2</a>
</article>
<article class="os-tutorials-card">
<div class="os-tutorials-case-label">Case 3a</div>
<h3>Groundwater with a Crest Anchor</h3>
<p>Assign an imported open polyline as the piezometric line and run a layered slope with a prescribed crest.</p>
<p><strong>Workbook:</strong> pages 22-27.</p>
<a class="os-tutorials-case-link" href="{{ '/pages/tutorials/case-3a/' | relative_url }}">Open Case 3a</a>
</article>
<article class="os-tutorials-card">
<div class="os-tutorials-case-label">Case 3b</div>
<h3>Groundwater with a Toe Anchor</h3>
<p>Reuse the Case 3a setup, prescribe the toe position and elevation, and compare the two anchor choices.</p>
<p><strong>Workbook:</strong> pages 28-30.</p>
<a class="os-tutorials-case-link" href="{{ '/pages/tutorials/case-3b/' | relative_url }}">Open Case 3b</a>
</article>
<article class="os-tutorials-card">
<div class="os-tutorials-case-label">Case 4</div>
<h3>Groundwater and Faults</h3>
<p>Classify faults separately from rock layers, assign fault strength properties, and analyse the slope with groundwater and faults.</p>
<p><strong>Workbook:</strong> pages 31-36.</p>
<a class="os-tutorials-case-link" href="{{ '/pages/tutorials/case-4/' | relative_url }}">Open Case 4</a>
</article>
</div>

<div class="os-callout os-callout--important" markdown="1">
**Case 3b builds on Case 3a.** Open `Case3A_final.cbf` from `Case_3A_water_crest`, then save the toe-anchor variant separately in `Case_3B_water_toe` so that both setups remain available for comparison.
</div>

Open a case above for the full online instructions. Use [Properties]({{ '/pages/properties/6-properties/' | relative_url }}) when you need an explanation of a material, geometry, or optional input.

</div>
</section>

<section class="os-tutorials-section" markdown="1">
<div class="os-tutorials-section-head" markdown="0">
<h2 id="review-and-reuse-results">Review and reuse results</h2>
<p>Check the completed model before exporting or comparing scenarios.</p>
</div>
<div class="os-tutorials-section-body" markdown="1">

Save each exercise as a separate `.cbf` project before running it. With **Automatic** results storage selected, the software creates a section simulation folder beside the saved project. Review any **Simulation Check** items before submission and use **Fetch results** to retrieve the output.

Compare the achieved Factor of Safety, slope height, bench geometry, and prescribed crest or toe with your inputs and the workbook's example. Cases 1a and 1b use different material and bench inputs as well as different strength models; their results should be read in the context of each case's settings.

Each online case ends with instructions for exporting a DXF and creating a project section from the output. Choose **Rocscience** when exporting for a Rocscience workflow; this option automatically generates the closed external boundary. The same shared instructions are on workbook pages 37-38.

- [Export the output profile to DXF]({{ '/pages/Tutorials/Workflow/#exporting-output-profile-to-dxf' | relative_url }}).
- [Import the output into Rocscience RS2]({{ '/pages/Tutorials/Workflow/#importing-output-into-rockscience-rs2' | relative_url }}).
- [Help and Solutions]({{ '/pages/troubleshooting/' | relative_url }}) for geometry warnings, simulation checks, or export issues.
- [Glossary]({{ '/pages/glossary/' | relative_url }}) for definitions of the terms used in the exercises.

</div>
</section>

</div>
