import { std } from "wow/wotlk";
import { CreatorHelper } from "../../utils/creator-helper";
import { MODULE_NAME } from "../../utils/constants";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { translate } from "../../utils/translation";

namespace Translation {
  export function english(spell: Spell) {
    spell.Description.enGB
      .set("Reduces XP gained by 50%.")
      .Name.enGB.set("Experience Debuff 50%");
  }
}

const XP_BUFF = CreatorHelper.createSpell("50-percent-reduced-xp-buff", 57353);

translate(XP_BUFF, {
  enGB: Translation.english,
});

XP_BUFF.Tags.addUnique(MODULE_NAME, "xp-debuff");

XP_BUFF.Effects.get(0)
  .Type.APPLY_AURA.set()
  .Aura.MOD_XP_PCT.set()
  .PercentBase.set(-51);

XP_BUFF.Effects.get(1)
  .Type.APPLY_AURA.set()
  .Aura.MOD_XP_QUEST_PCT.set()
  .PercentBase.set(-51);

const XP_RING = CreatorHelper.createItem("xp-ring");

XP_RING.InventoryType.FINGER.set()
  .Quality.ORANGE.set()
  .DisplayInfo.setSimpleIcon(MODULE_NAME, "xp-ring-icon", "inv_jewelry_ring_32")
  .Spells.addGet()
  .Spell.set(XP_BUFF.ID)
  .Trigger.ON_EQUIP.set();

std.InlineScripts.Player.OnLogin((player) => {
  player.AddAura(UTAG("hogger", "xp-debuff"), player);
});
