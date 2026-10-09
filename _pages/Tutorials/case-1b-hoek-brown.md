---
title: "Case 1b: Homogeneous Slope with Hoek-Brown"
author: Dainius Jenkus
date: 2026-10-09
last_updated: 9 October 2026
layout: post
category: Tutorials
permalink: /pages/tutorials/case-1b/
nav_parent: Tutorials
nav_order: 35.2
toc_h_min: 2
toc_h_max: 2
exercise_folder: Case_1B_homogeneous_HB
workbook_pages: 12-16
section_name: case1B-GroundModel1
project_file: Case1B_final.cbf
previous_case_url: /pages/tutorials/case-1a/
previous_case_title: "Case 1a: Homogeneous Slope with Mohr-Coulomb"
next_case_url: /pages/tutorials/case-2/
next_case_title: "Case 2: Layered Slope"
---

{% include tutorial-styles.html %}

<div class="os-tutorials-page os-tutorial-case" markdown="1">

<section class="os-tutorials-hero" markdown="0">
<div class="kicker">Case 1b</div>
<div class="os-tutorials-hero-title">Use the Hoek-Brown Strength Model</div>
<p>Optimise a homogeneous rock mass using Generalised Hoek-Brown parameters and a crest anchor.</p>
</section>

<div class="os-tutorials-case-body" markdown="1">

{% include tutorial-case-start.html %}

## Create and Import the Section

1. Choose **File > New**.
2. Choose **File > Import Section > DXF** and open `case1-GroundModel.dxf` from `Case_1B_homogeneous_HB`.
3. Select **Meters** under **Import as**, then click **OK**.
4. Click the **South** face of the view cube to align the section view. Expand the section in **Navigation** and select **Ophiolite**.

{% include tutorial-image.html file="section-navigation.png" title="Finding the Rock Layer" alt="Navigation tree expanded to the Ophiolite layer of the homogeneous ground model" caption="The homogeneous geometry is shared with Case 1a. Select Ophiolite to enter the Hoek-Brown properties." %}

The workbook names this case's section `case1B-GroundModel1`. If a fresh DXF import uses a different name, rename the section to match before running it. Alternatively, open `Case1B_starter.cbf` from the exercise folder and check all inputs below.

## Define Bench and Material Properties

Select **Ophiolite**, then enter:

| Property | Value |
| --- | --- |
| Bench height | 10 m |
| Bench face angle | 90° |
| Minimum berm width | 6.5 m |
| Unit weight | 25.9 kN/m³ |
| Strength model | Generalised Hoek-Brown |
| UCS / intact compressive strength | 50 MPa |
| Geological Strength Index (GSI) | 45 |
| Intact rock constant (mi) | 12 |
| Maximum minor principal stress (σ3,max) | -1 MPa |
| Disturbance factor (D) | 1 |

Use **-1 MPa** for σ3,max in this exercise, as specified in the workbook. For field definitions, see [Rock Properties]({{ '/pages/properties/6-properties/#rock-properties' | relative_url }}).

{% include tutorial-image.html file="hoek-brown-properties.png" title="Hoek-Brown Input Fields" alt="Properties panel with Generalised Hoek-Brown selected and the UCS, GSI, mi, sigma3 max and disturbance fields visible" caption="The panel shows the fields before values are entered. Apply the values in the table above." %}

<div class="os-callout os-callout--tip" markdown="1">
The automatic berm-width rule is **4.5 m + 0.2 × bench height**. A 10 m bench gives the 6.5 m width used here.
</div>

## Set the Slope Geometry

Select **case1B-GroundModel1** in **Navigation** and enter:

| Section Input | Value |
| --- | --- |
| Bench definition | Bench height |
| Target FoS | 1.3 |
| Slope Anchor > Prescribed point | Crest |
| Horizontal Crest Position | 700 m |
| Failure Direction | Right to left |
| Target slope height | 230 m |

{% include tutorial-image.html file="case1b-preview.png" title="Case 1b Crest Anchor" alt="Crest selected with the horizontal position set to 700 metres" %}

{% include tutorial-image.html file="case1b-anchor.png" title="Case 1b Slope Height" alt="Target and bench-compatible heights both equal to 230 metres" %}

The height fits **23 full benches × 10 m = 230 m**, so the target and bench-compatible heights match. Check the green OSA search region before starting the simulation.

{% include tutorial-case-run.html %}

## Review the Results

The workbook's example reports:

| Result | Example Value |
| --- | --- |
| Target FoS | 1.3 |
| Achieved FoS | 1.362 |
| Target slope height | 230 m |
| Bench-compatible slope height | 230 m |

{% include tutorial-image.html file="case1b-result.png" title="Case 1b Example Result" alt="Optimised homogeneous slope and failure mechanism with an achieved Factor of Safety of 1.362" %}

Confirm that the crest remains at **700 m**, the slope height is **230 m**, and the achieved FoS meets the specified target. The supplied `Case1B_final.cbf` provides the reference model setup.

<div class="os-callout os-callout--important" markdown="1">
Cases 1a and 1b change the strength model **and** other inputs, including bench height, unit weight, and crest position. Their results illustrate two setups; the difference cannot be attributed to the strength model alone.
</div>

{% include tutorial-case-export.html %}

</div>

{% include tutorial-case-navigation.html %}

</div>
