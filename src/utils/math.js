export function getAbilityMod(score) {
  return Math.floor((score - 10) / 2);
}