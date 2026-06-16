---
title: Exporting Output Profile to DXF
author: Dainius Jenkus
date: 2010-06-30
category: Tutorials
layout: post
parent: Simulation Workflow
nav_order: 4
---

## Exporting Output Profile to DXF

The obtained results of a simulation are shown in the 2D plot window and also displayed in the form of logs. The estimated shape of the slope profile can be exported to DXF and later imported into other software.

{% include tutorial-video.html src="/assets/videos/tutorials/workflow/4-exporting-output-profile-to-dxf.mp4" %}

<p align="center">
  <img src="{{ site.baseurl }}/assets/tutorial/export.png" alt="Export output"/>
</p>

### Export the Output Profile

Navigate to the tools section in the simulation window and select:

`Export output profile to DXF`

### Select an Export Configuration

Choose one of the export configurations:

- **Global**: Exported profile coordinates are in the original global coordinate system. This is useful when the result is visualized with respect to the original section or 3D models.
- **Local XZ**: Exported profile coordinates are aligned to the XZ plane. The Y coordinate is fixed.
- **Local XY**: Exported coordinates are flattened. The section is placed on the XY plane and is horizontal, with the Z coordinate fixed. This is useful when exporting to software such as Rockscience RS2.

---

Previous: [Running Simulations]({{ site.baseurl }}/pages/Tutorials/Workflow/3-running-simulations/)  
Next: [Importing Output into Rockscience RS2]({{ site.baseurl }}/pages/Tutorials/Workflow/5-importing-output-into-rs2/)  
Back to: [Simulation Workflow]({{ site.baseurl }}/pages/Tutorials/Workflow/)
