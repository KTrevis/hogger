import { std } from "wow/wotlk";
import { Spell } from "wow/wotlk/std/Spell/Spell";

const HEROIC_STRIKE_IDS = [
  78, 284, 285, 1608, 11564, 11565, 11566, 11567, 25286, 29707, 30324, 47449,
  47450,
] as const;

function modHeroicStrike(spell: Spell) {
  spell.Attributes.NEXT_SWING.set(false)
    .Power.CostBase.set(30 * 10)
    .Cooldown.Time.set(1000);
}

for (const id of HEROIC_STRIKE_IDS) {
  modHeroicStrike(std.Spells.load(id));
}
