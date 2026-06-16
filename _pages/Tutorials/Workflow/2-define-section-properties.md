---
title: Define Section Properties
author: Dainius Jenkus
date: 2010-06-30
category: Tutorials
layout: post
---

## Define Section Properties

Before running a simulation, define the required bench, rock, and general properties for the selected section.

{% include tutorial-video.html src="/assets/videos/tutorials/workflow/2-define-section-properties.mp4" %}

### Define Bench Properties

Specify properties for benches if your cross-section includes them:

- **Unit Weight**: Weight of material per cubic meter.
- **Bench Face Angle**: Inclination angle of bench faces.
- **Min Berm Width**: Minimum width of berms between benches.
- **Number of Benches**: Total benches count.
- **Bench Height**: Height of each bench.

### Set Rock Properties

Choose between Hoek-Brown and Mohr-Coulomb models and set properties such as:

- **Strength characteristics**.
- **Friction parameters**.

<p align="center">
  <img src="{{ site.baseurl }}/assets/tutorial/layer_properties.png" alt="Layer properties"/>
</p>

Section rock properties are set for each section layer separately. Alternatively, if 3D models are used to generate sections, properties can be provided at the 3D level initially. When making a section using the slicing tool, they are automatically inherited from parent 3D models.

### General Section Properties

Set general properties for the section:

- **Horizontal Crest Position**: Position of the crest relative to the section origin.
- **Slope Height**: Total height of the slope.
- **Target FoS (Factor of Safety)**.

<p align="center">
  <img src="{{ site.baseurl }}/assets/tutorial/general_properties.png" alt="General properties"/>
</p>

The bench, rock, and general properties must be provided to run simulations. Optional properties can be added if needed.

### Optional Properties

- **Water Table**: Location and properties of the water table, if applicable.
- **Surcharge**: Additional loads such as magnitude and inclination, if applicable.
- **Roads**: Presence and properties of roads on or near the slope.
- **Tension Crack Properties**: Characteristics of any tension cracks.

Ensure all values are accurate and reflect the physical and mechanical characteristics of your material and cross-section specifics.

For detailed guidance, refer to the [OptimalSlope Manual on Bench Properties]({{ site.baseurl }}/pages/properties/6-properties/#bench-properties).

---

Previous: [Importing or Generating Sections]({{ site.baseurl }}/pages/Tutorials/Workflow/1-importing-or-generating-sections/)  
Next: [Running Simulations]({{ site.baseurl }}/pages/Tutorials/Workflow/3-running-simulations/)  
Back to: [Simulation Workflow]({{ site.baseurl }}/pages/Tutorials/Workflow/)
