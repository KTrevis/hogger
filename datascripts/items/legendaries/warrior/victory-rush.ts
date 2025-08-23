import { ItemTemplate } from "wow/wotlk/std/Item/ItemTemplate";
import { translate } from "../../../utils/translation";
import { MODULE_NAME } from "../../../utils/constants";
import { VICTORY_RUSH_HEALING } from "../../../auras/warrior/victory-rush-healing";
import { std } from "wow/wotlk";

const VICTORY_RUSH_LEGENDARY = std.Items.create(
  MODULE_NAME,
  "victory-rush-legendary"
);

VICTORY_RUSH_LEGENDARY.InventoryType.FINGER.set()
  .Quality.ORANGE.set()
  .DisplayInfo.setSimpleIcon(
    MODULE_NAME,
    "victory-rush-legendary-icon",
    "inv_jewelry_ring_32"
  )
  .Spells.addMod((spell) =>
    spell.Spell.set(VICTORY_RUSH_HEALING.ID).Trigger.ON_EQUIP.set()
  );

namespace ItemTranslation {
  export function english(item: ItemTemplate) {
    item.Name.enGB.set("Ixion's Touchring");
  }
}

translate(VICTORY_RUSH_LEGENDARY, {
  enGB: ItemTranslation.english,
});
