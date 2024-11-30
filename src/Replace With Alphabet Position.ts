export function alphabetPosition(text: string): string {
  return text
    .toLowerCase()
    .split('').filter((item) => item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)
    .map((item) => item.charCodeAt(0)-96)
    .join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition('Azzzzz'));
