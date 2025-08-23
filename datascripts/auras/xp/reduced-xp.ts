import { std } from "wow/wotlk";
import { CreatorHelper } from "../../utils/creator-helper";
import { INFINITE_DURATION, MODULE_NAME } from "../../utils/constants";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { translate } from "../../utils/translation";

const XP_BUFF = std.Spells.create(MODULE_NAME, "50-percent-reduced-xp-buff");

XP_BUFF.Tags.addUnique(MODULE_NAME, "xp-debuff")
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
  export function english(spell: Spell) {
    const TOOLTIP = "Reduces XP gained by 50%.";
    spell.Description.enGB
      .set(TOOLTIP)
      .Name.enGB.set("Slow and Steady...")
      .AuraDescription.enGB.set(TOOLTIP);
  }
}

translate(XP_BUFF, {
  enGB: Translation.english,
});

const XP_RING = CreatorHelper.createItem("xp-ring");

XP_RING.InventoryType.FINGER.set()
  .Quality.ORANGE.set()
  .DisplayInfo.setSimpleIcon(MODULE_NAME, "xp-ring-icon", "inv_jewelry_ring_32")
  .Spells.addGet()
  .Spell.set(XP_BUFF.ID)
  .Trigger.ON_EQUIP.set();
