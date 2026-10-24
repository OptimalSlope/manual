// Plot-only adapter for the six supplied FinalPlot exports. No optimisation is
// performed here. All geometry shares the export's translated coordinate frame.
export const caseIds = ['case1a','case1b','case2','case3a','case3b','case4'];

export function preparePlot(raw, id) {
  if (!caseIds.includes(id)) throw new Error('Unknown tutorial case');
  if (raw.coordinateSystem !== 'translated' || !Array.isArray(raw.translationOrigin) ||
      raw.translationOrigin.length !== 2 || !raw.translationOrigin.every(Number.isFinite)) {
    throw new Error('Unsupported result coordinate system');
  }
  if (!Array.isArray(raw.plotData) || !Array.isArray(raw.regions) || !Array.isArray(raw.faults)) {
    throw new Error('Incomplete result geometry');
  }
  const map = Object.fromEntries(raw.plotData.map(series => [series.name, series.values]));
  const valid = value => typeof value === 'number' && Number.isFinite(value);
  const origin = raw.translationOrigin;
  function points(xName, zName) {
    const xs = map[xName] || [], zs = map[zName] || [];
    if (!Array.isArray(xs) || !Array.isArray(zs) || xs.length !== zs.length) throw new Error('Mismatched coordinates');
    // An absent water table is represented by the literal string "null".
    if (xs.every(x => x === null || x === 'null') && zs.every(z => z === null || z === 'null')) return [];
    if (!xs.every(valid) || !zs.every(valid)) throw new Error('Invalid geometry coordinates');
    return xs.map((x,i) => ({x:x+origin[0], z:zs[i]+origin[1]}));
  }
  const read = prefix => points(`X_${prefix}_export`,`Z_${prefix}_export`);
  const regions = raw.regions.filter(r => r.plotted !== false).map(r => ({
    ...r, points:read(r.plotSeries), name:String(r.layerName || 'Geological unit'),
  }));
  const faults = raw.faults.filter(f => f.plotted !== false).map(f => ({
    ...f, points:read(f.plotSeries), name:String(f.faultName || 'Fault'),
  }));
  const model = {
    id, regions, faults, topo:read('topo'), bench:points('bench_X_export','bench_Z_export'),
    opt:read('opt'), upper:read('UB'), lower:read('LB'), failure:read('fail'),
    radii:[read('fail_seg1'),read('fail_seg2')], cir:read('cir'), water:read('water'),
    angles:map.optimal_face_angles_export || [], fos:map.Fos_export?.[0], osa:raw.osaDegrees,
    anchor:{x:origin[0],z:origin[1],name:id === 'case3b' ? 'Prescribed toe' : 'Prescribed crest'},
  };
  if (!valid(model.fos) || !valid(model.osa) || !model.bench.length || !model.opt.length ||
      !regions.length || regions.some(r => r.points.length < 3) || !model.angles.every(valid)) {
    throw new Error('Missing profile or result metadata');
  }
  model.allPoints = [...regions.flatMap(r=>r.points),...faults.flatMap(f=>f.points),...model.topo,
    ...model.bench,...model.opt,...model.upper,...model.lower,...model.failure,
    ...model.radii.flat(),...model.cir,...model.water];
  return model;
}

export function extent(points) {
  if (!points.length) throw new Error('Empty plot extent');
  return points.reduce((b,p)=>({xmin:Math.min(b.xmin,p.x),xmax:Math.max(b.xmax,p.x),
    zmin:Math.min(b.zmin,p.z),zmax:Math.max(b.zmax,p.z)}),
  {xmin:Infinity,xmax:-Infinity,zmin:Infinity,zmax:-Infinity});
}

export function padExtent(bounds, fraction=.07) {
  const dx=(bounds.xmax-bounds.xmin)*fraction || 10;
  const dz=(bounds.zmax-bounds.zmin)*fraction || 10;
  return {xmin:bounds.xmin-dx,xmax:bounds.xmax+dx,zmin:bounds.zmin-dz,zmax:bounds.zmax+dz};
}
