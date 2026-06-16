---
title: Running Simulations
author: Dainius Jenkus
date: 2010-06-30
category: Tutorials
layout: post
parent: Simulation Workflow
nav_order: 3
---

## Running Simulations

After the input data is defined, simulations can be started from the simulation window.

{% include tutorial-video.html src="/assets/videos/tutorials/workflow/3-running-simulations.mp4" %}

Before starting a simulation, complete the following steps.

### 1. Select a Section of Interest

Select any section with prescribed properties.

### 2. Set a Simulation Folder

Set a simulation folder to define where simulation results and logs will be written.

### 3. Configure the User Profile

When running a simulation for the first time, go to:

`Tools -> Settings -> Account`

Enter the provided credential information and click `Configure`. This ensures that your simulation can run on the cloud.

<p align="center">
  <img src="{{ site.baseurl }}/assets/tutorial/profile_setup.png" alt="Profile setup"/>
</p>

### Example Input and Output Slope Profile

{% include input_output.drawio.html %}

### Example 2D Output Slope Profile

{% include output_2d.drawio.html %}

**Note:** Results in the 2D plot are always shown with the slope on the right side. If the original slope is on the left side, it is mirrored in the 2D plot. When exporting the output profile to DXF or visualising it in 3D, the produced slope profile is shown in the original position.

---

Previous: [Define Section Properties]({{ site.baseurl }}/pages/Tutorials/Workflow/2-define-section-properties/)  
Next: [Exporting Output Profile to DXF]({{ site.baseurl }}/pages/Tutorials/Workflow/4-exporting-output-profile-to-dxf/)  
Back to: [Simulation Workflow]({{ site.baseurl }}/pages/Tutorials/Workflow/)
