import { std } from "wow/wotlk";
import { INFINITE_DURATION, MODULE_NAME } from "../../utils/constants";
import { INSTANT_LAVABURST } from "./instant-lavaburst";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { translate } from "../../utils/translation";

const CHANCE_TO_PROC = 20;

const FLAME_SHOCK = std.Spells.load(8050);

const FLAME_SHOCK_INSTANT_LAVABURST_PROC = std.Spells.create(
  MODULE_NAME,
  "flame-shock-instant-lavaburst-proc"
);

FLAME_SHOCK_INSTANT_LAVABURST_PROC.Family.set(FLAME_SHOCK.Family.get())
  .Proc.mod((proc) =>
    proc.ClassMask.A.set(FLAME_SHOCK.ClassMask.A.get())
      .SpellFamily.set(FLAME_SHOCK.Family.get())
      .TriggerMask.TAKEN_DAMAGE.set(true)
      .TriggerMask.DONE_PERIODIC.set(true)
      .PhaseMask.HIT.set(true)
      .Chance.set(CHANCE_TO_PROC)
  )
  .Duration.set(INFINITE_DURATION)
  .Effects.addMod((eff) =>
    eff.Type.APPLY_AURA.set()
      .ImplicitTargetA.UNIT_CASTER.set()
      .Aura.PROC_TRIGGER_SPELL.set()
      .TriggeredSpell.set(INSTANT_LAVABURST.ID)
  )
  .Attributes.HIDE_FROM_AURA_BAR.set(true);

namespace Translation {
  export function english() {
    FLAME_SHOCK_INSTANT_LAVABURST_PROC.Description.enGB
      .set(
        `Your Flame Shock has a ${CHANCE_TO_PROC}% chance to make your Lava Burst instant.`
      )
      .Name.enGB.set("Flame Shock Instant Lava Burst Proc");
  }
}

translate({
  enGB: Translation.english,
});
