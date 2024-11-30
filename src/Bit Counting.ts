export function countBits(n: number): number {
  return n
    .toString(2)
    .split('')
    .filter((item) => item === '1').length;
}
