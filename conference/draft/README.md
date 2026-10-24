# Original conference demo extended with tutorial cases

Preview `/manual/conference/draft/` through the normal Jekyll server. The draft
embeds the actual `assets/preview_interactive.html` document, not a redesigned
copy. Its existing styles, navigation, animated workflow, pitwall comparison,
interactive result plot and OSA viewer remain in use.

The original document loads the extension only with `?conference=2026`.
Normal use without that parameter and the existing `/conference/` launcher
retain their original behaviour. The manual's Conference Demo buttons are not
changed while the extended version is being reviewed.

## Sequence

The silent 3-minute-48-second loop covers the original introduction, all three
workflow stages, an animated profile-search illustration, pitwall comparison,
interactive result plot and OSA region,
then four featured tutorial cases (2, 3a, 3b and 4), a separate 3D block model
illustration and closing. The simpler Case 1a/1b examples are omitted from the
conference presentation; their manual tutorials and saved result data remain.
Each tutorial uses the original rounded section/card styling and three short
captions describing inputs, optimisation and result review.

Move the mouse to show presenter controls. Space pauses/plays; Left/Right change
scene; Home restarts. Clicking the original navigation pauses playback for an
in-person explanation. An explicit pause survives scene changes and switching
tabs. Use `?scene=case4&paused=1` to review a particular case.

Presenter controls also include − / + to resize the complete presentation and
Fit to screen to restore the TV framing. Browser zoom remains effective after
the initial fit; it is not cancelled by resize handling. Zooming out reveals
more scrollable content inside the same window. The View percentage is relative
to the most recent explicit fit.

## Accuracy and remaining work

Tutorial plots are interactive SVGs generated from the supplied FinalPlot
exports, not screenshots. Plot-only JSON lives in `data/`; no account settings,
logs, job IDs or caches are included. Translation origins restore section
coordinates consistently for all geometry, including the toe-anchored case.
The saved Case 3b run has FoS 1.345 (the older manual screenshot shows 1.336).
No new optimisation is run. Geological units use vivid, non-grey colours with
matching legend swatches. The legacy original result viewer is unchanged.

Plot controls offer zoom, pan, fit, geometry/result toggles and point-coordinate
tooltips. X and Z use equal drawing scales. Exported polygons (including holes),
fault segments, water, profiles and failure geometry are used directly. OFA
labels use the exported optimal-profile segments, not individual bench edges.
Absent water/fault controls are hidden. Missing or invalid data produces an
explicit error instead of substituting another case.

Each case starts with the complete model, then focuses on the optimised profile
after its first caption. Interacting with the plot pauses presentation playback
so staff can explore it; Play resumes the loop. The original demo style and
non-conference viewers remain unchanged. Plot rendering has no remote libraries.

The 24-second profile-search scene uses Case 3a's prescribed crest, slope height
and supplied input OSA limits (21.199°–63.399°). Generated candidate shapes are
illustrative—not solver iterates, feasibility checks or intermediate FoS results.
Every candidate has 15 m vertical bench faces and horizontal berms at least
7.5 m wide (with the saved top/bottom end berms retained). Corresponding vertices
are interpolated, so steps remain steps during transitions. The first two
candidates are relatively regular; later candidates explore stronger,
deterministic bench-by-bench width changes without frame-to-frame random jitter.
Candidates stay
below topography and converge onto the exact saved Case 3a benched polyline
(FoS 1.323). The OSA triangle guides the overall profile: individual corners of
the saved benches extend slightly beyond its rays and are shown in full, not
clipped. Tests limit candidates to that same corner allowance. All final
vertices are retained. Pause and Replay use the main presentation clock; it
stops when paused/off-scene. Reduced-motion preferences show the final state.
No GIF or remote animation library is required.

The original 3D viewer uses illustrative elevation-band colours; it is labelled
as such, and its angle-band legend is hidden in this draft. It is not presented
as a calculated tutorial output. Its Three.js dependency still needs an internet
connection. A final offline bundle, verified 3D angle output and tutorial QR code
remain follow-up work. The four featured tutorial sections use only local assets.
