---
title: Data Preparation
author: Dainius Jenkus
date: 2010-06-30
category: Data
layout: post
---
### Preparing Model Files
---

The quality of simuation results are highly correlated to the provided 3D stratigraphy or section data. Ensuring that used models are both topologically and geometrically consistant and correct allows to make more accurate estimations during the simulation.


### Stratighraphy Preparation
---
The following describes tips and examples which can be followed to prepare e.g., high-quality 3D DXF models for cross-section generation without gaps or overlaps, follow these general guidelines.

**Model Integrity and Clean Geometry**


* **Gaps in 3D models**: Models should form solid bodies. A solid body with shared layer boundaries that are not closely aligned and form gaps can present significant challenges in analysis during the optimisation. When boundaries meant to connect are not properly closed, they create voids that can compromise the structural integrity and visual coherence of the model. To mitigate these problems, it is crucial to ensure that adjacent layers are well-aligned and that shared boundaries are seamlessly joined without any gaps. Proper modeling practices, including thorough verification and the use of quality control tools, can help maintain the integrity of shared boundaries and create robust, gap-free solid bodies.
* **Closed Solids**: Each 3D object should be a closed solid (manifold), meaning every edge must be shared by exactly two adjacent faces. Non-manifold edges or vertices can lead to inaccuracies while producing sections.
* **3D Solids over Meshes**: Where possible, export as 3D solids rather than meshes (polylines) in DXF, as slicing tools generally can more robustly handle solids when generating cross-sections.

**Precision and Tolerance Settings**
* High Tolerance: Set a reasonable tolerance typically around 0.001-0.01 mm to avoid tiny gaps that can lead to misalignments.
* **Precision in Export Options**: During the DXF export, set high precision for curves and surfaces to retain detail and accuracy, reducing approximation errors that could lead to overlaps or gaps. This should be applied according to the existing complexity and the size of the models. Models with high complexity should be either simplified (e.g., reduced mesh) or sections could be directly imported to the projects (as described in the next paragraph).

**Simplified Geometry for Complex Models**
* **Avoid Excessive Complexity**: Highly detailed or excessively complex models can be problematic, particularly in cross-sectional generation using our slicing tool. Use simplifications where possible, without compromising the required details.
* **Limit Model Size**: Reducing mesh size is essential when dealing with very large 3D model files that exceed 1 GB in size, as overly large files can lead to performance issues, longer processing times, and difficulties in sharing or using the model efficiently.

### Section Preparation
---

Good quality section wires are essential as key inputs for simulations, ensuring that the data fed into the process is accurate and reliable. These section wires can either be imported directly from external software or generated using our an in-house slicing tool. To maintain high standards, performing a thorough visual inspection of selected section wires or surfaces is crucial. This step allows for an initial assessment of their integrity and suitability, helping to identify potential issues like gaps, overlaps, or misalignments before proceeding with more complex and time-intensive simulations. Such proactive checks contribute to a smoother simulation workflow and more reliable results.

* **Wire Continuity**: Ensure that all edges are connected to avoid gaps within wires.
* **Voids or Missing Layers**: Ensure that adjacent layers are well-aligned and that shared boundaries are joined without creating undesirable voids between layers. Small voids are acceptible, but having large voids creates undefined space between layers. Therefore, such voids cannot be assigned to a specific material during the simulation and can have an effect on the final result. Make sure all layers are present.

{% include voids.drawio.html %}

* **Remove Duplicate Vertices or Edges**: Duplicate vertices or edges can cause self-intersecting surfaces or wires, so ensure that vertices are unique and shared only when appropriate. Shared vertices connecting neighbouring egdges are acceptable, but duplicate edges should be removed within a wire. 
* **Ensure Sequential Edge Ordering**: Importedd shapes are visualised in 3D and this may not be visible when displayed. However, out-of-order edges or vertex points can lead to inaccurate shape representations when working in a local coordinate system in the 2D.

**Advice on Sections Imported from 3rd-party Software**

* When generating cross-sections using tools like Leapfrog, AutoCAD, Rhino, or other reputable CAD software, the likelihood of encountering poor-quality sections significantly diminishes if tDhe 3D model adheres to high-quality standards. These advanced tools are designed with robust algorithms that handle precise data extraction, ensuring that sections reflect the integrity of the source model. 
* However, the reliability of these sections largely depends on the initial 3D model's quality. A well-constructed model featuring properly aligned vertices, closed and manifold surfaces, and consistent geometry helps avoid common issues such as gaps, overlaps, or distorted profiles in the generated sections. By maintaining stringent quality control over the 3D model, users can maximize the effectiveness of these software tools, resulting in cleaner, more accurate cross-sections that are suitable for analysis, visualization, and further design work.

 
### Model Organisation
---
* Use layers and set their names when generating DXF files to separate different model components or regions. This makes it easier to control visibility and extract sections accurately.
* Name layers descriptively to aid in managing model elements during cross-section extraction.




---

 
