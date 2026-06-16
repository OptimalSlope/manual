---
title: Simulation Workflow - 1. Importing or Generating Sections
author: Dainius Jenkus
date: 2010-06-30
category: Tutorials
layout: post
nav_order: 1
---

## Importing or Generating Sections

It is recommended to directly import sections if you already have them defined in DXF files. This method is straightforward and speeds up the process without the need to import often large 3D model files to make sections.

{% include tutorial-video.html src="/assets/videos/tutorials/workflow/1-importing-or-generating-sections.mp4" %}

In OptimalSlope, there are two methods available for defining cross-sections.

### Importing 3D Solid/Wireframe and Making Sections

You can import a 3D solid or wireframe using:

`File -> Import Stratigraphy -> DXF`

Then use the slicing tool to create a section.

For more information on slicing, refer to the [Slicing]({{ site.baseurl }}/pages/slicing/2-slicing/) tutorial.

### Directly Importing DXF Section File

Alternatively, you can directly import a DXF section file using:

`File -> Import Section -> DXF`

This is the recommended approach when section geometry has already been prepared.

### Use Quality Input Data

Ensure your DXF model data meets general quality standards to achieve reliable simulation results.

For guidelines on data preparation and ensuring quality, refer to [Data Preparation]({{ site.baseurl }}/pages/Data%20Suitability/7-data/).

---

Next: [Define Section Properties]({{ site.baseurl }}/pages/Tutorials/Workflow/2-define-section-properties/)  
Back to: [Simulation Workflow]({{ site.baseurl }}/pages/Tutorials/Workflow/)
