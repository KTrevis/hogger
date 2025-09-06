import { std } from "wow/wotlk";
import { INFINITE_DURATION, MODULE_NAME } from "../../utils/constants";
import { HEALING_20_PCT } from "../../utils/auras/healing-20-percent";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { translate } from "../../utils/translation";

const VICTORY_RUSH_SPELL = std.Spells.load(34428);

export const VICTORY_RUSH_HEALING = std.Spells.create(
  MODULE_NAME,
  "victory-rush-healing"
);

VICTORY_RUSH_HEALING.Proc.mod((x) =>
  x.SpellFamily.set(VICTORY_RUSH_SPELL.Family.get())
    .ClassMask.B.set(VICTORY_RUSH_SPELL.ClassMask.B.get())
    .PhaseMask.HIT.set(true)
    .TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(true)
)
  .Family.set(VICTORY_RUSH_SPELL.Family.get())
  .ClassMask.set(0, 0, 0)
  .Duration.set(INFINITE_DURATION)
  .Effects.addMod((x) =>
    x.Type.APPLY_AURA.set()
      .Aura.PROC_TRIGGER_SPELL.set()
      .TriggeredSpell.set(HEALING_20_PCT.ID)
      .ImplicitTargetA.UNIT_CASTER.set()
  );

namespace Translation {
  export function english() {
    VICTORY_RUSH_HEALING.Name.enGB
      .set("Victory Rush Healing")
      .Description.enGB.set(
        "Using Victory Rush heals you for 20% of your max health."
      );
  }
}

translate({
  enGB: Translation.english,
});
