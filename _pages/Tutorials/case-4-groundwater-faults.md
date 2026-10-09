---
title: "Case 4: Groundwater and Faults"
author: Dainius Jenkus
date: 2026-10-09
last_updated: 9 October 2026
layout: post
category: Tutorials
permalink: /pages/tutorials/case-4/
nav_parent: Tutorials
nav_order: 35.6
toc_h_min: 2
toc_h_max: 2
exercise_folder: Case_4_faults
workbook_pages: 31-36
section_name: Case4_GroundModel1
project_file: Case4_final.cbf
previous_case_url: /pages/tutorials/case-3b/
previous_case_title: "Case 3b: Groundwater with a Toe Anchor"
---

{% include tutorial-styles.html %}

<div class="os-tutorials-page os-tutorial-case" markdown="1">

<section class="os-tutorials-hero" markdown="0">
<div class="kicker">Case 4</div>
<div class="os-tutorials-hero-title">Add Faults to the Groundwater Model</div>
<p>Classify groundwater and faults separately from rock layers, assign fault strength properties, and optimise the resulting slope.</p>
</section>

<div class="os-tutorials-case-body" markdown="1">

{% include tutorial-case-start.html %}

## Create and Import the Section

1. Choose **File > New**.
2. Choose **File > Import Section > DXF** and open `Case4_GroundModel.dxf` from `Case_4_faults`.
3. Select **Meters** under **Import as**, then click **OK**.
4. Click the **South** face of the view cube and expand **Cross-Sections > Case4_GroundModel1** in **Navigation**.

{% include tutorial-image.html file="case4-import.jpg" title="Groundwater and Faults Exercise Section" alt="Case 4 geological section in the Visualiser with its rock boundaries and faults" caption="Reference view from the workbook; later slope geometry setup is also visible." %}

You can also open `Case4_starter.cbf`. Verify the rock materials, water entity, and both faults before running it.

## Define Bench and Material Properties

Use these bench settings for **all five rock-material layers**:

| Bench Input | Value |
| --- | --- |
| Bench height | 15 m |
| Bench face angle | 90° |
| Minimum berm width | 7.5 m |

Select each rock layer, set **Mohr-Coulomb**, and enter:

| Material | Cohesion (kPa) | Friction Angle (°) | Unit Weight (kN/m³) |
| --- | --- | --- | --- |
| Granite_1 | 1430 | 27.62 | 25.1 |
| Granite_2 | 732 | 16.68 | 24.5 |
| Porfirite_1 | 971 | 20.01 | 26.3 |
| Porfirite_2 | 727 | 16.61 | 23.6 |
| Vulcanite | 700 | 33.6 | 26.4 |

{% include tutorial-image.html file="mohr-coulomb-properties.png" title="Rock-Layer Properties" alt="Bench, material and Mohr-Coulomb strength fields for a selected rock layer" caption="These values apply to rock layers. Assign the water line and faults separately in the next step." %}

The automatic berm-width rule gives **7.5 m** for a 15 m bench if no width is entered.

## Assign Groundwater and Faults

### Groundwater

1. Select **water** in **Navigation**.
2. In **Properties > Entity Type**, enable **Piezometric line (open polyline)**.

{% include tutorial-image.html file="water-entity.png" title="Classifying Groundwater" alt="Water entity with the Piezometric line checkbox available" caption="Enable the Piezometric line checkbox; the reference screenshot shows its initial unselected state." %}

### Fault Planes

1. Select **F32** and enable **Fault / joint (open polyline)** under **Entity Type**.
2. Set the fault strength model to **Mohr-Coulomb** and enter the values below.
3. Repeat the assignment and strength values for **F42**. The screenshot labels include spaces: **F 32** and **F 42**.

| Fault | Strength Model | Cohesion (kPa) | Friction Angle (°) |
| --- | --- | --- | --- |
| F32 | Mohr-Coulomb | 40 | 23 |
| F42 | Mohr-Coulomb | 40 | 23 |

{% include tutorial-image.html file="fault-entity.png" title="Assigning a Fault and Its Strength" alt="F 32 classified as a Fault joint open polyline with Mohr-Coulomb friction angle 23 degrees and cohesion 40 kilopascals" caption="Apply the same strength model and values to both fault planes." %}

<div class="os-callout os-callout--important" markdown="1">
The water and fault polylines are auxiliary entities. Do not leave them classified as rock layers. Check **both** fault planes and the water line before selecting the cross-section.
</div>

For background, see [Faults]({{ '/pages/properties/6-properties/#faults' | relative_url }}) and [Water Table]({{ '/pages/properties/6-properties/#water-table' | relative_url }}).

## Set the Slope Geometry

Select **Case4_GroundModel1** and enter:

| Section Input | Value |
| --- | --- |
| Bench definition | Bench height |
| Target FoS | 1.3 |
| Slope Anchor > Prescribed point | Crest |
| Horizontal Crest Position | 1150 m |
| Failure Direction | Right to left |
| Target slope height | 330 m |

{% include tutorial-image.html file="slope-settings.png" title="Section Properties" alt="Section Properties with Bench height as the definition and FoS set to 1.3" %}

{% include tutorial-image.html file="case3a-preview.png" title="Case 4 Crest Settings" alt="Crest anchor with a horizontal position of 1150 metres" caption="Case 4 uses the same crest and slope-height settings as Case 3a." %}

The full-bench arrangement is **22 × 15 m = 330 m**. Check the green OSA search region, the water line, and the fault assignments after setting the geometry. If a geometry change removes the water table, restore it before starting the simulation.

{% include tutorial-case-run.html %}

## Review the Results

The workbook's example reports:

| Result | Example Value |
| --- | --- |
| Target FoS | 1.3 |
| Achieved FoS | 1.319 |
| Target slope height | 330 m |
| Bench-compatible slope height | 330 m |

{% include tutorial-image.html file="case4-result.png" title="Case 4 Example Result" alt="Optimised layered slope with groundwater, fault geometry and an achieved Factor of Safety of 1.319" %}

Confirm that **F32** and **F42** have the intended strength values, the piezometric line is present, and the crest remains at **1150 m**. Review the achieved FoS, bench geometry, and failure mechanism against your inputs. Use `Case4_final.cbf` to compare the reference setup.

{% include tutorial-case-export.html %}

## Continue with Your Own Scenarios

You have now worked through homogeneous materials, layered geology, groundwater, crest and toe anchors, and faults. Keep separate projects or duplicated sections when changing a scenario, and check all affected inputs before running it. See [Creating Different Scenarios]({{ '/pages/Tutorials/Workflow/#creating-different-scenarios' | relative_url }}) for the workflow.

</div>

{% include tutorial-case-navigation.html %}

</div>
