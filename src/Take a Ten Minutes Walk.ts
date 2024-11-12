export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;

  const numOfNS =
    walk.filter((item) => item === 'n').length ===
    walk.filter((item) => item === 's').length;
  const numOfEW =
    walk.filter((item) => item === 'e').length ===
    walk.filter((item) => item === 'w').length;

  return numOfNS && numOfEW;
}