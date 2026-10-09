---
title: "Case 3a: Groundwater with a Crest Anchor"
author: Dainius Jenkus
date: 2026-10-09
last_updated: 9 October 2026
layout: post
category: Tutorials
permalink: /pages/tutorials/case-3a/
nav_parent: Tutorials
nav_order: 35.4
toc_h_min: 2
toc_h_max: 2
exercise_folder: Case_3A_water_crest
workbook_pages: 22-27
section_name: Case3_GroundModel1
project_file: Case3A_final.cbf
previous_case_url: /pages/tutorials/case-2/
previous_case_title: "Case 2: Layered Slope"
next_case_url: /pages/tutorials/case-3b/
next_case_title: "Case 3b: Groundwater with a Toe Anchor"
---

{% include tutorial-styles.html %}

<div class="os-tutorials-page os-tutorial-case" markdown="1">

<section class="os-tutorials-hero" markdown="0">
<div class="kicker">Case 3a</div>
<div class="os-tutorials-hero-title">Add Groundwater to a Layered Slope</div>
<p>Assign an imported piezometric line, define the rock layers, and optimise the slope with a fixed crest.</p>
</section>

<div class="os-tutorials-case-body" markdown="1">

{% include tutorial-case-start.html %}

## Create and Import the Section

1. Choose **File > New**.
2. Choose **File > Import Section > DXF** and open `Case3_GroundModel.dxf` from `Case_3A_water_crest`.
3. Select **Meters** under **Import as**, then click **OK**.
4. Click the **South** face of the view cube and expand **Cross-Sections > Case3_GroundModel1** in **Navigation**.

{% include tutorial-image.html file="case3a-import.jpg" title="Groundwater Exercise Section" alt="Layered ground model used for Case 3a in the Visualiser" caption="Reference view of the section; the workbook screenshot also shows later geometry setup." %}

Alternatively, open `Case3A_starter.cbf`. Check the materials, groundwater assignment, and slope inputs below before running the analysis.

## Define Bench and Material Properties

Select each rock-material layer in **Navigation**. Use the following bench values for **all five rock layers**:

| Bench Input | Value |
| --- | --- |
| Bench height | 15 m |
| Bench face angle | 90° |
| Minimum berm width | 7.5 m |

Set the strength model to **Mohr-Coulomb** and enter:

| Material | Cohesion (kPa) | Friction Angle (°) | Unit Weight (kN/m³) |
| --- | --- | --- | --- |
| Granite_1 | 1430 | 27.62 | 25.1 |
| Granite_2 | 732 | 16.68 | 24.5 |
| Porfirite_1 | 971 | 20.01 | 26.3 |
| Porfirite_2 | 727 | 16.61 | 23.6 |
| Vulcanite | 700 | 33.6 | 26.4 |

{% include tutorial-image.html file="mohr-coulomb-properties.png" title="Rock-Layer Input Fields" alt="Bench and Mohr-Coulomb properties available for a selected rock layer" caption="Enter each layer's material values separately. The bench settings are common to all rock layers." %}

If minimum berm width is left blank, **4.5 m + 0.2 × 15 m** gives the required **7.5 m**.

## Assign the Piezometric Line

The DXF includes an open polyline named **water**. Classify it as groundwater rather than a rock-material layer:

1. Select **water** in the imported layer list in **Navigation**.
2. Under **Entity Type** in **Properties**, enable **Piezometric line (open polyline)**.
3. Confirm that the water entity is classified correctly before continuing to the cross-section geometry.

{% include tutorial-image.html file="water-entity.png" title="Assigning the Water Entity" alt="Water entity selected with the Piezometric line open polyline checkbox visible" caption="The reference image shows the checkbox before selection. Enable Piezometric line for the water entity." %}

See [Water Table]({{ '/pages/properties/6-properties/#water-table' | relative_url }}) for details about imported and manually drawn groundwater lines.

## Set the Slope Geometry

Select **Case3_GroundModel1** and enter:

| Section Input | Value |
| --- | --- |
| Bench definition | Bench height |
| Target FoS | 1.3 |
| Slope Anchor > Prescribed point | Crest |
| Horizontal Crest Position | 1150 m |
| Failure Direction | Right to left |
| Target slope height | 330 m |

{% include tutorial-image.html file="case3a-preview.png" title="Case 3a Crest Anchor" alt="Crest selected with the horizontal position set to 1150 metres" %}

{% include tutorial-image.html file="case3a-anchor.png" title="Case 3a Slope Height" alt="Right to left slope with target and bench-compatible heights of 330 metres" %}

The specified height fits **22 full benches × 15 m = 330 m**. Check the green OSA search region and the water line together after setting the geometry.

<div class="os-callout os-callout--warning" markdown="1">
Changing the slope anchor or geometry can invalidate an existing water table. If the application removes it, restore the imported piezometric line or redraw the water table after the geometry is finalised. Confirm that groundwater is present before running the wet case.
</div>

{% include tutorial-case-run.html %}

## Review the Results

The workbook's example reports:

| Result | Example Value |
| --- | --- |
| Target FoS | 1.3 |
| Achieved FoS | 1.323 |
| Target slope height | 330 m |
| Bench-compatible slope height | 330 m |

{% include tutorial-image.html file="case3a-result.png" title="Case 3a Example Result" alt="Optimised layered slope with groundwater and an achieved Factor of Safety of 1.323" %}

Check the prescribed crest at **1150 m**, the **330 m** height, the water line, and each rock layer's properties. Review the failure mechanism and achieved FoS in the output plot and logs.

Keep the completed Case 3a project for the next exercise. The supplied `Case3A_final.cbf` can also be used as the starting point for Case 3b, which changes the fixed endpoint to the toe.

{% include tutorial-case-export.html %}

</div>

{% include tutorial-case-navigation.html %}

</div>
