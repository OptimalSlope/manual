---
title: Project management 
author: Dainius Jenkus
date: 2010-06-30
category: Project-management
layout: post
---


### Creating a project
---
An empty project is created using the following methods:
1. Using keyboard combination: ***Ctrl + N***.
2. From the file menu, by clicking ***New***.
3. By clicking the symbol in the table below.

|Symbol|Action|
|:-:|:-:|
![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/create-project.png)| Creates an empty project.|

### Saving/loading projects
---
**Saving options**
1. Saving using a specified file name is done through the file menu, select - ***Save as***.
2. Saving updates of a current working project, select - ***Save***.

**Loading an existing project**
* An existing project in .cbf format is imported by clicking ***Open Project*** in the file menu.
* In progress importing operation is indicated by the loading symbol in the satus bar.
* Loading larger files can take longer time (> minute) depending on the machine.

**File format**

OptimalSlope project data is stored in a binary format (***.cbf**).


### Importing Stratighraphy
---

Importing 3D stratigraphies to the project:

* In the file menu, select ***Import Stratigraphy > required file format***.

### Importing Section
---
 
Sections generated using a 3rd party can be directly imported without requiring to generate then through our sclicing tool.

* In the file menu, select ***Import Section > required file format***.
 
### Importing Water Surface
---

Water surface can be imported and used to generate a water table boundary when making a section. It can be used as a reference boundary in order to draw the water table.

* In the file menu,  ***Import Surface > Phreatic > required file format***.

### Importing Boundary Surface
---

A pit boundary surface can be imported and used to generate a trimmed version of section in order to reflect an existing pushback of an open pit mine.

* In the file menu,  ***Import Surface > Boundary > required file format***.

 
> ##### TIP
>
> * It is advised to define names and colors of layers while generating model files. Otherwise, naming and coloring of model layers can be manually set in the OptimalSlope GUI. 
>
{: .block-tip }


### Creating Sections

The **Slicing** tool is used to create cross-sections from selected 3D shapes or stratigraphy models. It creates sections by cutting the selected geometry with a defined cutting plane.

Cross-sections can be created using one of the following cutting planes:

- **XY**
- **XZ**
- **YZ**

The section location is controlled by the global plane position coordinate, in metres.

For vertical cutting planes, such as **XZ** and **YZ**, the slicing tool also supports defining an **azimuth angle**. This allows vertical cross-sections to be created at different orientations.

| Symbol | Action |
|:-:|:-|
| ![Slicing tool](https://OptimalSlope.github.io/manual/assets/control-icons/content-cut-custom.png) | Opens the slicing tool for creating cross-sections. |

> ##### TIP
>
> - Cross-sections automatically inherit properties from their 3D parent stratigraphy.
> - If properties are not defined before slicing, they can be added later at either the 3D model level or the individual section level.
> - It is recommended to define bench properties and the strength model before creating cross-sections.
>
{: .block-tip }

#### Usage

To create a section:

1. Select one or more shapes in the project.
2. Click the **Slicing** button on the toolbar, or right-click the selected shape and choose the cross-section option.
3. Select the cutting plane: **XY**, **XZ**, or **YZ**.
4. Specify the position of the cutting plane.
5. If using a vertical plane, specify the azimuth angle if required.
6. Click **Slice**.


{% include slicing.html %}

<p>&nbsp;</p>

#### Cross-Section Example

{% include slice.html %}

---

### Trim Section to Boundary Surface

#### Boundary Surface

A **boundary surface** is a closed and continuous surface used to constrain or trim a section. In geological and mining workflows, a boundary surface may represent features such as:

- the edge of an open pit,
- a pushback surface,
- excavation limits,
- fault surfaces,
- model extents.

Boundary surfaces can be imported into the project and used to create a trimmed version of an existing section. This is useful when the original 3D stratigraphy model is available, but the section needs to reflect the current or planned excavation limits.

Trimming at the section level is often faster and simpler than modifying the entire 3D model. It allows the cross-section to better represent real-world mining conditions while keeping the workflow efficient.

#### Example

{% include boundary_surface.drawio.html %}

#### Usage

To trim a section using a boundary surface:

1. Select the required cross-section in the left project panel.
2. Make sure the boundary surface has already been imported into the project.
3. In the right properties panel, click **Trim Slice**.
4. Review the updated section geometry after trimming.

#### Before Trimming

{% include before_trimming.drawio.html %}

This example shows a section created from the original stratigraphy model.

#### After Trimming

{% include after_trimming.drawio.html %}

The resulting section is updated using the boundary surface, so the section better reflects the excavation or pushback limits.

---
 


*Supported file formats:*

| Format | Description | File extension |
|:-:|:-:|:-:|
|DXF| Autodesk drawing exchange format |.dxf|
|BREP|	OpenCasCade native format |.brep |
|IGES| Older solid-based format |iges |
|STEP| Exchange format for engineering models |.step|

**Exporting 2D/3D shapes**

 Selected shapes on the visualiser can be exported by clicking ***Export*** in the file menu.

 *Supported file formats:*

| Format | Description | File extension |
|:-:|:-:|:-:|
|DXF|Autodesk drawing exchange format |.dxf|
|BREP|	OpenCasCade native format |.brep|
|IGES| Older solid-based format |iges|
|STEP| Exchange format for engineering models |.step|
|STL| Stereolithography mesh |.stl|
|VRML| VRML Web 3D format|.vrml |
|IMAGE| Image format |.bmp|
 
### Exporting cross-section data
---
  
Project can contain multiple cross-sections. Each cross-section can be considered as an individual simulation project, which contains required properties for the simulation.

Properties describing invidual slice and its layers can be exported as ***JSON*** format:
1. Select a cross-section.
2. Within a ***Property View*** panel, select ***Export*** option under tools section.
 
 
--- 



 

 


