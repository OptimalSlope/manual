---
title: "Case 1a: Homogeneous Slope with Mohr-Coulomb"
author: Dainius Jenkus
date: 2026-10-09
last_updated: 9 October 2026
layout: post
category: Tutorials
permalink: /pages/tutorials/case-1a/
nav_parent: Tutorials
nav_order: 35.1
toc_h_min: 2
toc_h_max: 2
exercise_folder: Case_1A_homogeneous_MC
workbook_pages: 5-11
section_name: case1-GroundModel1
project_file: Case1A-final.cbf
next_case_url: /pages/tutorials/case-1b/
next_case_title: "Case 1b: Homogeneous Slope with Hoek-Brown"
---

{% include tutorial-styles.html %}

<div class="os-tutorials-page os-tutorial-case" markdown="1">

<section class="os-tutorials-hero" markdown="0">
<div class="kicker">Case 1a</div>
<div class="os-tutorials-hero-title">Create and Optimise Your First Slope</div>
<p>Create a homogeneous rock-mass section, assign Mohr-Coulomb properties, prescribe the crest, and optimise the slope to a target Factor of Safety.</p>
</section>

<div class="os-tutorials-case-body" markdown="1">

{% include tutorial-case-start.html %}

## Create and Import the Section

1. Choose **File > New** to create a project.
2. Choose **File > Import Section > DXF** and open `case1-GroundModel.dxf` from `Case_1A_homogeneous_MC`.
3. Set **Import as** to **Meters** and click **OK**.
4. In **Navigation**, expand **Project > Cross-Sections > case1-GroundModel1** to reveal the **Ophiolite** layer.

{% include tutorial-image.html file="import-units.png" title="Selecting Import Units" alt="DXF import dialog with Meters selected under Import as" caption="The supplied tutorial sections use metres. Confirm the units before completing the import." %}

{% include tutorial-image.html file="case1a-import.jpg" title="Imported Homogeneous Section" alt="The homogeneous rectangular section in the Visualiser and its Navigation tree" %}

You can also open `Case1A-starter.cbf` to begin from the supplied starter project. Check the properties against the tables below before running it.

## View and Navigate the Section

1. Click the **South** face of the view cube in the top-right corner of the **Visualiser** to align the view with the section.
2. Expand the small arrows in **Navigation** until the section and its layers are visible.
3. Select **Ophiolite**. Its material and bench settings appear in the right-hand **Properties** panel.

{% include tutorial-image.html file="section-navigation.png" title="Selecting the Ophiolite Layer" alt="Expanded Navigation tree with the homogeneous section and Ophiolite layer visible" caption="Select a layer to edit material properties; select the cross-section itself to edit the slope geometry." %}

## Define Bench and Material Properties

With **Ophiolite** selected, enter:

| Property | Value |
| --- | --- |
| Bench height | 12.19 m |
| Bench face angle | 90° |
| Minimum berm width | 6.938 m |
| Unit weight | 29 kN/m³ |
| Strength model | Mohr-Coulomb |
| Friction angle | 31° |
| Cohesion | 469 kPa |

{% include tutorial-image.html file="mohr-coulomb-properties.png" title="Bench and Mohr-Coulomb Properties" alt="Properties panel containing bench height, face angle, berm width, unit weight, friction angle and cohesion fields" caption="The reference panel shows the fields before values are entered. Use the values in the table above." %}

<div class="os-callout os-callout--tip" markdown="1">
If the minimum berm width is left blank, the software uses **4.5 m + 0.2 × bench height**. For a 12.19 m bench, this gives 6.938 m.
</div>

## Set the Slope Geometry

Select **case1-GroundModel1** in **Navigation**, then enter:

| Section Input | Value |
| --- | --- |
| Bench definition | Bench height |
| Target FoS | 1.3 |
| Slope Anchor > Prescribed point | Crest |
| Horizontal Crest Position | 750 m |
| Failure Direction | Right to left |
| Target slope height | 230 m |

{% include tutorial-image.html file="case1a-preview.png" title="Prescribing the Crest" alt="Crest anchor selected with Horizontal Crest Position set to 750 metres" %}

{% include tutorial-image.html file="case1a-anchor.png" title="Slope Direction and Height" alt="Right to left failure direction, target height of 230 metres and bench-compatible height of 219.419 metres" %}

The crest is the fixed upper endpoint. **Failure Direction** is a separate setting that controls the slope orientation. Review the estimated minimum and maximum Overall Slope Angle (OSA) and confirm that the green search region stays inside the available ground.

### Understand the Two Slope Heights

**Target slope height** is the requested overall height. **Bench-compatible slope height** uses a whole number of full-height benches without exceeding that target. For this case, retain the full-height bench arrangement shown in the reference result.

The following examples illustrate the difference; they do **not** replace the Case 1a inputs:

| Illustrative Target Height | Bench Height | Arrangement | Resulting Height |
| --- | --- | --- | --- |
| 330 m | 15 m | 22 full benches | 330 m |
| 330 m | 20 m | 16 full benches | 320 m |
| 330 m | 20 m | Use target slope height: 16 full benches and a 10 m crest bench | 330 m |

Selecting **Use target slope height** allows a shorter crest bench to reach the target; the other benches keep their specified height. In the second example, another full 20 m bench would give 340 m and exceed the target.

{% include tutorial-case-run.html %}

{% include tutorial-image.html file="case1a-simulation.png" title="Selecting the Section and Results Location" alt="Simulation panel with case1-GroundModel1 selected and Automatic results storage enabled" %}

## Review the Results

The workbook's example reports:

| Result | Example Value |
| --- | --- |
| Target FoS | 1.3 |
| Achieved FoS | 1.337 |
| Target slope height | 230 m |
| Bench-compatible slope height | 219.419 m |

{% include tutorial-image.html file="case1a-result.png" title="Case 1a Example Result" alt="Simulation output with the optimised homogeneous slope, failure mechanism and Factor of Safety" caption="Workbook example: achieved FoS 1.337. Use the plot and logs to review your own run." %}

Check the achieved FoS against the target, the prescribed crest at **750 m**, and the bench height and berm width against your inputs. The bench-compatible height is lower than the target because only full-height benches are used in this example.

The supplied `Case1A-final.cbf` is a reference for the completed model setup. Compare your inputs with it if your result differs, and check [Help and Solutions]({{ '/pages/troubleshooting/' | relative_url }}) for simulation or geometry issues.

{% include tutorial-case-export.html %}

{% include tutorial-image.html file="output-section.jpg" title="Viewing the Output Section" alt="The newly created stepped output section in the Visualiser" caption="Case 1a example after creating a project section from the optimised output." %}

</div>

{% include tutorial-case-navigation.html %}

</div>
