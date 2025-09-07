import { std } from "wow/wotlk";
import { INFINITE_DURATION, MODULE_NAME } from "../../utils/constants";

const XP_DEBUFF = std.Spells.create(MODULE_NAME, "50-percent-reduced-xp-buff");

XP_DEBUFF.Tags.addUnique(MODULE_NAME, "xp-debuff")
  .Effects.addMod((eff) =>
    eff.Type.APPLY_AURA.set()
      .Aura.MOD_XP_PCT.set()
      .PercentBase.set(-51)
      .ImplicitTargetA.UNIT_CASTER.set()
  )
  .Effects.addMod((eff) =>
    eff.Type.APPLY_AURA.set()
      .Aura.MOD_XP_QUEST_PCT.set()
      .PercentBase.set(-51)
      .ImplicitTargetA.UNIT_CASTER.set()
  )
  .Duration.set(INFINITE_DURATION)
  .Icon.setPath("spell_holy_borrowedtime")
  .Attributes.IS_NEGATIVE.set(true);

namespace Translation {
  export function english() {
    const TOOLTIP = "Reduces XP gained by 50%.";
    XP_DEBUFF.Description.enGB
      .set(TOOLTIP)
      .Name.enGB.set("Slow and Steady...")
      .AuraDescription.enGB.set(TOOLTIP);
  }
}

Translation.english();
