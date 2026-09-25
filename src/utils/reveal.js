export function staggerDelay(i, step = 0.1, cycle = 3) {
  return (i % cycle) * step
}

export function sideFor(i) {
  return i % 2 === 0 ? 'left' : 'right'
}
