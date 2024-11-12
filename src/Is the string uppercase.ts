export function isUpperCase(str: string) {
  return /^[A-Z]+$/.test(str.split(' ').join(''));
}
