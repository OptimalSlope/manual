---
title: "Case 2: Layered Slope"
author: Dainius Jenkus
date: 2026-10-09
last_updated: 9 October 2026
layout: post
category: Tutorials
permalink: /pages/tutorials/case-2/
nav_parent: Tutorials
nav_order: 35.3
toc_h_min: 2
toc_h_max: 2
exercise_folder: Case_2_layered
workbook_pages: 17-21
section_name: Case2_Layered_GroundModel1
project_file: Case2_layered_final.cbf
previous_case_url: /pages/tutorials/case-1b/
previous_case_title: "Case 1b: Homogeneous Slope with Hoek-Brown"
next_case_url: /pages/tutorials/case-3a/
next_case_title: "Case 3a: Groundwater with a Crest Anchor"
---

{% include tutorial-styles.html %}

<div class="os-tutorials-page os-tutorial-case" markdown="1">

<section class="os-tutorials-hero" markdown="0">
<div class="kicker">Case 2</div>
<div class="os-tutorials-hero-title">Assign Properties Across Geological Layers</div>
<p>Define different material properties for four rock layers, apply common bench settings, and optimise a layered open-pit slope.</p>
</section>

<div class="os-tutorials-case-body" markdown="1">

{% include tutorial-case-start.html %}

## Create and Import the Section

1. Choose **File > New**.
2. Choose **File > Import Section > DXF** and open `Case2_Layered_GroundModel.dxf` from `Case_2_layered`.
3. Select **Meters** under **Import as**, then click **OK**.
4. Click the **South** face of the view cube. In **Navigation**, expand **Cross-Sections > Case2_Layered_GroundModel1** to see its layers.

{% include tutorial-image.html file="case2-import.jpg" title="Imported Layered Section" alt="Visualiser showing the imported Case 2 ground model and its geological boundaries" %}

You can also open `Case2_layered_starter.cbf` to begin with the supplied project. Check each layer's properties rather than assuming that every field is complete.

## Define Bench and Material Properties

Select each rock layer in **Navigation**. Use the following bench values for **all four layers**:

| Bench Input | Value |
| --- | --- |
| Bench height | 15 m |
| Bench face angle | 80° |
| Minimum berm width | 7.5 m |

Use **Mohr-Coulomb** for each layer and enter its material values:

| Material | Cohesion (kPa) | Friction Angle (°) | Unit Weight (kN/m³) |
| --- | --- | --- | --- |
| Granite | 400 | 38 | 26.5 |
| Limestone | 400 | 28 | 24 |
| Paragneiss | 250 | 30 | 25.5 |
| Quartz porphyries | 280 | 33 | 27 |

{% include tutorial-image.html file="mohr-coulomb-properties.png" title="Entering Layer Properties" alt="Bench and Mohr-Coulomb input fields in the Properties panel" caption="Use the common bench values for every rock layer, then enter the material-specific values from the table." %}

The automatic berm-width rule gives **4.5 m + 0.2 × 15 m = 7.5 m** if that field is left blank. Check every layer before selecting the cross-section.

## Set the Slope Geometry

Select **Case2_Layered_GroundModel1** and enter:

| Section Input | Value |
| --- | --- |
| Bench definition | Bench height |
| Target FoS | 1.3 |
| Slope Anchor > Prescribed point | Crest |
| Horizontal Crest Position | 1300 m |
| Failure Direction | Right to left |
| Target slope height | 340 m |

{% include tutorial-image.html file="case2-preview.png" title="Case 2 Crest Anchor" alt="Crest selected with a horizontal position of 1300 metres" %}

{% include tutorial-image.html file="case2-anchor.png" title="Case 2 Slope Geometry" alt="Target slope height of 340 metres, bench-compatible height of 330 metres and Use target height button" %}

The full-bench arrangement gives **22 benches × 15 m = 330 m**. For the workbook's example, keep this bench-compatible height rather than selecting **Use target height** to add a shorter crest bench. The target input remains **340 m**.

Review the estimated OSA range and ensure the green search region remains within the section's ground area.

{% include tutorial-case-run.html %}

## Review the Results

The workbook's example reports:

| Result | Example Value |
| --- | --- |
| Target FoS | 1.3 |
| Achieved FoS | 1.319 |
| Target slope height | 340 m |
| Bench-compatible slope height | 330 m |

{% include tutorial-image.html file="case2-result.png" title="Case 2 Example Result" alt="Optimised slope through the four geological layers with an achieved Factor of Safety of 1.319" %}

Check that the crest is prescribed at **1300 m**, the bench-compatible height is **330 m**, and all four layers have the intended material and bench properties. Review the plotted layer boundaries and failure mechanism as well as the FoS. Use `Case2_layered_final.cbf` to compare the completed setup.

{% include tutorial-case-export.html %}

</div>

{% include tutorial-case-navigation.html %}

</div>
