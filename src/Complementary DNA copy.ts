enum DNA {
  A = 'T',
  T = 'A',
  C = 'G',
  G = 'C',
}

export class Kata {
  static dnaStrand(dna: string) {
    let result: string[] = [];

    dna.split('').forEach((item) => {
      result.push(DNA[item as keyof typeof DNA]);
    });
    return result.join('');
  }
}
