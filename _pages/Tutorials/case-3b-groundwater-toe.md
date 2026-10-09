---
title: "Case 3b: Groundwater with a Toe Anchor"
author: Dainius Jenkus
date: 2026-10-09
last_updated: 9 October 2026
layout: post
category: Tutorials
permalink: /pages/tutorials/case-3b/
nav_parent: Tutorials
nav_order: 35.5
toc_h_min: 2
toc_h_max: 2
exercise_folder: Case_3B_water_toe
workbook_pages: 28-30
section_name: Case3_GroundModel1
project_file: Case3B_final.cbf
previous_case_url: /pages/tutorials/case-3a/
previous_case_title: "Case 3a: Groundwater with a Crest Anchor"
next_case_url: /pages/tutorials/case-4/
next_case_title: "Case 4: Groundwater and Faults"
---

{% include tutorial-styles.html %}

<div class="os-tutorials-page os-tutorial-case" markdown="1">

<section class="os-tutorials-hero" markdown="0">
<div class="kicker">Case 3b</div>
<div class="os-tutorials-hero-title">Fix the Toe and Compare the Slope</div>
<p>Reuse the groundwater model from Case 3a, prescribe the lower endpoint, and compare the result with the crest-anchored slope.</p>
</section>

<div class="os-tutorials-case-body" markdown="1">

{% include tutorial-case-start.html %}

## Open the Case 3a Model

1. Choose **File > Open** and open `Case3A_final.cbf` from `Files for users/Case_3A_water_crest` in the tutorial models download.
2. Choose **File > Save As** and save a working copy as `Case3B_final.cbf` in `Case_3B_water_toe` before changing its inputs. Keep the supplied reference files in a separate folder if you want to compare them later.
3. In **Navigation**, select **Case3_GroundModel1**.

<div class="os-callout os-callout--important" markdown="1">
This exercise starts from **Case 3a**, not from a new empty project. You can use your own completed model, but its inputs should match [Case 3a]({{ '/pages/tutorials/case-3a/' | relative_url }}) before comparing results.
</div>

## Keep the Material and Groundwater Inputs

Retain the five Mohr-Coulomb rock materials and their parameters:

| Material | Cohesion (kPa) | Friction Angle (°) | Unit Weight (kN/m³) |
| --- | --- | --- | --- |
| Granite_1 | 1430 | 27.62 | 25.1 |
| Granite_2 | 732 | 16.68 | 24.5 |
| Porfirite_1 | 971 | 20.01 | 26.3 |
| Porfirite_2 | 727 | 16.61 | 23.6 |
| Vulcanite | 700 | 33.6 | 26.4 |

Keep these shared settings:

| Input | Value |
| --- | --- |
| Bench definition | Bench height |
| Bench height for all rock layers | 15 m |
| Bench face angle for all rock layers | 90° |
| Minimum berm width for all rock layers | 7.5 m |
| Target FoS | 1.3 |
| Failure Direction | Right to left |
| Groundwater | The same piezometric line as Case 3a |

## Prescribe the Toe

With **Case3_GroundModel1** selected, open **Slope Anchor** and set:

| Anchor Input | Value |
| --- | --- |
| Prescribed point | Toe |
| Horizontal Toe Position | 859 m |
| Vertical Toe Position (Z) | 547 m |

{% include tutorial-image.html file="case3b-anchor.png" title="Prescribing the Toe Coordinates" alt="Toe selected with horizontal position 859 metres and vertical position Z of 547 metres" %}

{% include tutorial-image.html file="case3b-preview.png" title="Toe-Anchor Geometry Preview" alt="Visualiser preview showing the fixed toe at the lower endpoint of the slope and the green OSA search region" %}

These coordinates are taken from the previous optimised slope in the workbook. In toe-anchor mode, the software calculates the slope height and bench-compatible height from the toe and section geometry. The workbook uses **330 m** as its height reference; check the resolved values rather than entering a new crest-mode target height.

The toe must remain inside the section, at or below the topography, and above the section floor. Confirm that the green OSA search region is within the ground area.

### Check Groundwater After Changing the Anchor

Confirm that the same piezometric line is still present after selecting **Toe** and entering its coordinates. If the application removes the water table, restore the imported water entity or redraw the line using the [Water Table instructions]({{ '/pages/properties/6-properties/#water-table' | relative_url }}). Keep the groundwater geometry consistent with Case 3a before comparing the two results.

{% include tutorial-case-run.html %}

## Review and Compare the Results

The workbook gives the following examples:

| Result | Case 3a: Crest | Case 3b: Toe |
| --- | --- | --- |
| Target FoS | 1.3 | 1.3 |
| Achieved FoS | 1.323 | 1.336 |
| Workbook height reference | 330 m | 330 m |
| Bench-compatible slope height | 330 m | 330 m |
| Fixed endpoint | Crest at 1150 m | Toe at X = 859 m, Z = 547 m |

{% include tutorial-image.html file="case3b-result.png" title="Case 3b Example Result" alt="Toe-anchored optimised slope with groundwater and an achieved Factor of Safety of 1.336" %}

Check that the toe remains at **X = 859 m, Z = 547 m**, then review the resolved height, bench geometry, and achieved FoS. Compare the optimised profile and failure mechanism with [the Case 3a example]({{ '/pages/tutorials/case-3a/#review-the-results' | relative_url }}).

The supplied `Case3B_final.cbf` provides the reference setup. Keep the two projects separate so that each run has its own saved model and results folder.

{% include tutorial-case-export.html %}

</div>

{% include tutorial-case-navigation.html %}

</div>
