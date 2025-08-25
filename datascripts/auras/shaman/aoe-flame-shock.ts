import { std } from "wow/wotlk";
import { INFINITE_DURATION, MODULE_NAME } from "../../utils/constants";
import { translate } from "../../utils/translation";
import { Spell } from "wow/wotlk/std/Spell/Spell";

const FLAME_SHOCK = std.Spells.load(8050);
const AOE_FLAME_SHOCK = std.Spells.create(MODULE_NAME, "aoe-flame-shock");

AOE_FLAME_SHOCK.Duration.set(INFINITE_DURATION)
  .Name.enGB.set("AOE Flame Shock")
  .Effects.addMod((eff) =>
    eff.Type.APPLY_AURA.set().Aura.DUMMY.set().ImplicitTargetA.UNIT_CASTER.set()
  )
  .Proc.mod((proc) =>
    proc.TriggerMask.DONE_PERIODIC.set(true)
      .SpellFamily.set(FLAME_SHOCK.Family.get())
      .ClassMask.A.set(FLAME_SHOCK.ClassMask.A.get())
      .PhaseMask.HIT.set(true)
  )
  .InlineScripts.OnProc((_, proc) => {
    const spellID = proc.GetSpell().GetEntry();
    const player = ToPlayer(proc.GetActor());
    const target = proc.GetActionTarget();
    if (!target || !player) {
      return;
    }
    const units = target.GetUnitsInRange(10, 0, 0);
    for (const unit of units) {
      if (unit == player || player.IsFriendlyTo(unit)) {
        continue;
      }
      player.AddAura(spellID, unit);
    }
  });

namespace Translation {
  export function english(spell: Spell) {
    spell.Name.enGB
      .set("AOE Flame Shock")
      .Description.enGB.set(
        "Your Flame Shock is spread to all enemies in a 10 yard radius."
      );
  }
}

translate(AOE_FLAME_SHOCK, {
  enGB: Translation.english,
});
