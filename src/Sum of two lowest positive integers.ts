export function sumTwoSmallestNumbers(numbers: Array<number>): number {
  const sm1: number = Math.min(...numbers);
  const sm2: number = Math.min(...numbers.filter((item) => item !== sm1));
  return sm1 + sm2;
}
