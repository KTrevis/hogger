import { Languages, Language } from "wow/data/dbc/Localization";
import { std } from "wow/wotlk";
import { Spell } from "wow/wotlk/std/Spell/Spell";

const CHARGE_IDS = [100, 6178, 11578];

namespace Translation {
  export function english(spell: Spell) {
    const tooltip = spell.Description.enGB
      .get()
      .replace("Cannot be used in combat.", "");
    spell.Description.enGB.set(tooltip);
  }
}

function modCharge(spell: Spell) {
  spell.Attributes.CANNOT_USE_IN_COMBAT.set(false)
    .ShapeshiftMask.Exclude.set(BigInt(0))
    .ShapeshiftMask.Include.set(BigInt(0));

    Translation.english(spell);
}

for (const id of CHARGE_IDS) {
  modCharge(std.Spells.load(id));
}
