// Tutorial settings from the manual, with results from the supplied FinalPlot
// exports. Interactive plots display saved outputs, not live calculations.
export const scenes = [
  {
    "id": "case2",
    "chapter": "Layered geology",
    "duration": 28000,
    "type": "case",
    "number": "2",
    "kicker": "LAYERED GEOLOGY",
    "title": "Different Materials.<br>One Optimised Profile.",
    "subtitle": "Assign strength and bench properties to each geological unit.",
    "image": "../../assets/tutorials/workshop/images/case2-result.png",
    "width": 1093,
    "height": 719,
    "crop": "20 62 1050 615",
    "alt": "Case 2 saved result showing four geological units, variable optimal face angles and achieved FoS of 1.319.",
    "fos": "1.319",
    "heightValue": "330 m",
    "heightLabel": "Bench-compatible height",
    "detailLabel": "Ground model",
    "detail": "Four geological units",
    "context": "The optimised face angle varies along the slope profile. The target height is 340 m; full benches give 330 m.",
    "beats": [
      "Represent each geological unit with its own material properties.",
      "Optimise the slope within the specified geometry and stability constraints.",
      "Review how the optimal face angle varies along the benched profile."
    ]
  },
  {
    "id": "case3a",
    "chapter": "Groundwater",
    "duration": 28000,
    "type": "case",
    "number": "3a",
    "kicker": "GROUNDWATER · PRESCRIBED CREST",
    "title": "Include Groundwater<br>in the Design",
    "subtitle": "Define a piezometric line and keep the crest fixed.",
    "image": "../../assets/tutorials/workshop/images/case3a-result.png",
    "width": 919,
    "height": 489,
    "alt": "Case 3a saved result showing geological units, the blue piezometric line, a prescribed crest and achieved FoS of 1.323.",
    "fos": "1.323",
    "heightValue": "330 m",
    "heightLabel": "Bench-compatible height",
    "detailLabel": "Slope anchor",
    "detail": "Prescribed crest",
    "context": "The blue piezometric line represents the groundwater input used in this optimisation.",
    "beats": [
      "Use a piezometric line to define groundwater conditions.",
      "Prescribe the crest position; optimise the slope below this fixed endpoint.",
      "Review the resulting profile and failure mechanism with groundwater included."
    ]
  },
  {
    "id": "case3b",
    "chapter": "Groundwater",
    "duration": 28000,
    "type": "case",
    "number": "3b",
    "kicker": "GROUNDWATER · PRESCRIBED TOE",
    "title": "Fix the Toe",
    "subtitle": "Keep the toe fixed while optimising the slope above it.",
    "image": "../../assets/tutorials/workshop/images/case3b-result.png",
    "width": 1230,
    "height": 732,
    "alt": "Case 3b saved result showing the toe-anchored groundwater example and achieved FoS of 1.345.",
    "fos": "1.345",
    "heightValue": "X 859 m · Z 547 m",
    "heightLabel": "Prescribed toe coordinates",
    "detailLabel": "Slope anchor",
    "detail": "Prescribed toe",
    "context": "Retain the Case 3a material and groundwater inputs. The fixed endpoint is now the toe, not the crest.",
    "beats": [
      "Start from the groundwater example and retain its material properties.",
      "Prescribe the toe’s horizontal position and elevation.",
      "Optimise from the fixed toe and review the resulting upper slope profile."
    ]
  },
  {
    "id": "case4",
    "chapter": "Faults",
    "duration": 28000,
    "type": "case",
    "number": "4",
    "kicker": "GROUNDWATER AND FAULTS",
    "title": "Optimise Slopes<br>with Faults",
    "subtitle": "Include fault geometry and fault shear strength.",
    "image": "../../assets/tutorials/workshop/images/case4-result.png",
    "width": 919,
    "height": 489,
    "alt": "Case 4 saved result showing two faults crossing the geological units, a piezometric line, the optimal profile and achieved FoS of 1.319.",
    "fos": "1.319",
    "heightValue": "330 m",
    "heightLabel": "Bench-compatible height",
    "detailLabel": "Faults",
    "detail": "Separate strength properties",
    "context": "Faults are defined separately from the rock units and assigned their own shear strength properties.",
    "beats": [
      "Define the fault geometry separately from the geological units.",
      "Assign fault shear strength and retain the groundwater input.",
      "Review the optimised profile and failure mechanism for the complete model."
    ]
  }
];
