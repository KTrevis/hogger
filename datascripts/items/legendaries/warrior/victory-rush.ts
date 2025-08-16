import { CreatorHelper } from "../../../utils/creator-helper";
import { ItemTemplate } from "wow/wotlk/std/Item/ItemTemplate";
import { translate } from "../../../utils/translation";
import { VICTORY_RUSH_FLAG_TRIGGER_ON_KILL } from "../../../auras/warrior/victory-rush-healing";
import { MODULE_NAME } from "../../../utils/constants";

const VICTORY_RUSH_LEGENDARY = CreatorHelper.createItem(
  "victory-rush-legendary"
);

VICTORY_RUSH_LEGENDARY.InventoryType.FINGER.set()
  .Quality.ORANGE.set()
  .DisplayInfo.setSimpleIcon(
    MODULE_NAME,
    "victory-rush-legendary-icon",
    "inv_jewelry_ring_32"
  )
  .Spells.addGet()
  .Spell.set(VICTORY_RUSH_FLAG_TRIGGER_ON_KILL.ID)
  .Trigger.ON_EQUIP.set();

namespace ItemTranslation {
  export function english(item: ItemTemplate) {
    item.Name.enGB.set("Ixion's Touchring");
  }
}

translate(VICTORY_RUSH_LEGENDARY, {
  enGB: ItemTranslation.english,
});
