import { std } from "wow/wotlk";
import { Spell } from "wow/wotlk/std/Spell/Spell";

const CHARGE_IDS = [100, 6178, 11578];

function modCharge(spell: Spell) {
  spell.Attributes.CANNOT_USE_IN_COMBAT.set(false)
    .ShapeshiftMask.Exclude(0)
    .ShapeshiftMask.Include(0);
}

for (const id of CHARGE_IDS) {
  modCharge(std.Spells.load(id));
}
