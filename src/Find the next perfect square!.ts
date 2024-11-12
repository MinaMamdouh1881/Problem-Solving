export function findNextSquare(sq: number): number {
  return Math.sqrt(sq) === Math.floor(Math.sqrt(sq))
    ? Math.pow(Math.sqrt(sq) + 1, 2)
    : -1;
}
