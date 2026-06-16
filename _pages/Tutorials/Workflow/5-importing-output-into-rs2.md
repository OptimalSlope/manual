---
title: Importing Output into Rockscience RS2
author: Dainius Jenkus
date: 2010-06-30
category: Tutorials
layout: post
parent: Simulation Workflow
nav_order: 5
---

## Importing Output into Rockscience RS2

Results from OptimalSlope may be used in RS2 for stability analysis. This tutorial explains how to prepare and import an output profile DXF file into RS2.

{% include tutorial-video.html src="/assets/videos/tutorials/workflow/5-importing-output-into-rs2.mp4" %}

There are several steps required to import an output profile DXF file into RS2.

### Step 1: Export Output Profile to DXF from OptimalSlope

Export the output profile as DXF using the `Local XY` export method.

This is required because RS2 expects a 2D section. The `Local XY` method flattens the coordinates so that the section is horizontal on the XY plane.

### Step 2: Modify the DXF File in AutoCAD

Open the DXF file in AutoCAD.

Use the `EXPLODE` command to convert all block references into simpler entities. This is important because RS2 cannot handle block references in the DXF file.

After exploding the blocks, save the file again as:

`ASCII DXF 2000`

Other software, such as Rhino, can also be used for this operation.

### Step 3: Import into RS2

Open RS2 and import the modified DXF file.

RS2 assigns boundary types based on layer names. Ensure your layer names match the expected boundary types in RS2. If a layer name does not match, it will be set to `Not Assigned`.

For a slope model, set the boundary type as `Material`.

The `External` role should not be used for the top and bottom portions of the slope when they are defined by two different polylines.

By following these steps, you can successfully prepare and import a DXF file into RS2, ensuring that all elements are correctly interpreted by the software.

---

Previous: [Exporting Output Profile to DXF]({{ site.baseurl }}/pages/Tutorials/Workflow/4-exporting-output-profile-to-dxf/)  
Back to: [Simulation Workflow]({{ site.baseurl }}/pages/Tutorials/Workflow/)
