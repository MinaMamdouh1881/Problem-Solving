export function getSum(a: number, b: number): number {
  const [min, max] = [Math.min(a, b), Math.max(a, b)];
  let result = 0;
  for (let i = min; i <= max; i++) result += i;
  return result;
}
