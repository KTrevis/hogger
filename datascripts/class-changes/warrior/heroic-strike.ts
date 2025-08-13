import { std } from "wow/wotlk";

const HEROIC_STRIKE_IDS = [
  78, 284, 285, 1608, 11564, 11565, 11566, 11567, 25286, 29707, 30324, 47449,
  47450,
] as const;

function modHeroicStrike(id: number) {
  // heroic strike n'augmente plus les degats de la prochaine auto attack
  // mais inflige directement des degats, et coute desormais 30 rage
  const HEROIC_STRIKE = std.Spells.load(id);
  HEROIC_STRIKE.Attributes.NEXT_SWING.set(false).Power.CostBase.set(300);
}

for (const id of HEROIC_STRIKE_IDS) {
  modHeroicStrike(id);
}
