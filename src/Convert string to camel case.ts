export function toCamelCase(str: string): string {
  let res = str.replaceAll('-', ' ').replaceAll('_', ' ').split(' ');

  for (let i = 1; i < res.length; i++) {
    res[i] = res[i][0].toUpperCase() + res[i].slice(1);
  }
  return res.join('');
}
