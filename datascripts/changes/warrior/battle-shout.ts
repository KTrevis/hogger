import { std } from "wow/wotlk";
import { Spell } from "wow/wotlk/std/Spell/Spell";

const BATTLE_SHOUT_IDS = [
  6673, 5242, 6192, 11549, 11550, 11551, 25289, 2048, 47436,
];

const RAGE_GIVEN = 20;

namespace Translation {
  export function english(spell: Spell) {
    const tooltip = `${spell.Description.enGB.get()} Also grants ${RAGE_GIVEN} rage.`;
    spell.Description.enGB.set(tooltip);
  }
}

function modBattleShout(spell: Spell) {
  spell.Cooldown.Time.set(60 * 1000)
    .Power.CostBase.set(0)
    .Effects.addGet()
    .Type.ENERGIZE.set()
    .PowerType.RAGE.set()
    .PowerBase.set(RAGE_GIVEN * 10)
    .ImplicitTargetA.UNIT_CASTER.set();

  Translation.english(spell);
}

for (const id of BATTLE_SHOUT_IDS) {
  modBattleShout(std.Spells.load(id));
}
