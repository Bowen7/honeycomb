const sqrt3 = Math.sqrt(3)
const calcPoints = (row: number, col: number, radius: number) => {
  const offset = row % 2 === 1 ? 0.5 * sqrt3 * radius : 0
  const point1 = [
    (sqrt3 / 4) * radius + col * sqrt3 * radius + offset,
    radius / 2 + 1.5 * radius * row,
  ]
  const point2 = [
    (sqrt3 / 4) * 3 * radius + col * sqrt3 * radius + offset,
    1.5 * radius * row,
  ]
  const point3 = [
    (sqrt3 / 4) * 5 * radius + col * sqrt3 * radius + offset,
    radius / 2 + 1.5 * radius * row,
  ]
  const point4 = [
    (sqrt3 / 4) * 5 * radius + col * sqrt3 * radius + offset,
    1.5 * radius + 1.5 * radius * row,
  ]
  const point5 = [
    (sqrt3 / 4) * 3 * radius + col * sqrt3 * radius + offset,
    2 * radius + 1.5 * radius * row,
  ]
  const point6 = [
    (sqrt3 / 4) * radius + col * sqrt3 * radius + offset,
    1.5 * radius + 1.5 * radius * row,
  ]
  return [point1, point2, point3, point4, point5, point6]
}
export { calcPoints }
