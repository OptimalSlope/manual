---
title: File management 
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


### Importing/exporting models 
---
This section describes importing and exporting options of 2D/3D shapes.

**Importing 2D/3D models to a project**
* Select ***Import > required file format*** in the file menu.

**Importing water surface to a project**
* Select ***Import Phreatic Surface> required file format*** in the file menu.

*Supported file formats:*

| Format | Description | File extension |
|:-:|:-:|:-:|
|DXF| Autodesk drawing exchange format |.dxf|
|BREP|	OpenCasCade native format |.brep |
|IGES| Older solid-based format |iges |
|STEP| Exchange format for engineering models |.step|

**Exporting 2D/3D models**

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
  
Project can contain multiple cross-sections. Each cross-section can be considered as an individual simulation project, which contains required properties for simulation.

Properties describing invidual slice and its layers can be exported as ***JSON*** format:
1. Select a cross-section.
2. Within a ***Property View*** panel, select ***Export*** option under tools section.
 
 
--- 



 

 


