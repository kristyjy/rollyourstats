export function rollStats() {
  let stats = [];
  for (let i = 0; i < 6; i++) {
    stats.push(rollStat());
  }
  return stats;
}

function rollStat() {
  // Roll 4d6
  let a = rollD(6);
  let b = rollD(6);
  let c = rollD(6);
  let d = rollD(6);

  // Add up totals
  let total = a + b + c + d;

  // Return total of 3 highest values
  return total - Math.min(a, b, c, d);
}

export function rollD(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

export function getRandomArrayItem(array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
}

export function getRandomBackground(backgrounds) {
  let background = getRandomArrayItem(backgrounds);
  return {
    name: background.name,
    feature: background.feature,
    trait: getRandomArrayItem(background.traits),
    ideal: getRandomArrayItem(background.ideals),
    bond: getRandomArrayItem(background.bonds),
    flaw: getRandomArrayItem(background.flaws)
  }
}