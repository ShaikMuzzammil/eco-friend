export function blendColors(startHex, endHex, t) {
  const h1 = parseInt(startHex.replace('#', ''), 16);
  const h2 = parseInt(endHex.replace('#', ''), 16);
  const r1 = (h1 >> 16) & 0xff;
  const g1 = (h1 >> 8) & 0xff;
  const b1 = h1 & 0xff;
  const r2 = (h2 >> 16) & 0xff;
  const g2 = (h2 >> 8) & 0xff;
  const b2 = h2 & 0xff;
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
