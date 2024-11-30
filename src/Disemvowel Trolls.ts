export class Kata {
  static disemvowel(str: string): string {
   const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter((item) => !vowels.includes(item.toLowerCase())).join('');
  }
}
