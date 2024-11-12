export class Kata {
  static dnaStrand(dna: string) {
    let result: string[] = [];

    dna.split('').forEach((item) => {
      if (item === 'A') {
        result.push('T');
      } else if (item === 'T') {
        result.push('A');
      } else if (item === 'C') {
        result.push('G');
      } else if (item === 'G') {
        result.push('C');
      }
    });
    return result.join('');
  }
}
