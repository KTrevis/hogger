import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { QuestObjectiveTypes } from "../../../../utils/enums/quest-objective-types";
import { WorldMapAreaIDs } from "../../../../utils/enums/world-map-area";
import { AreaIDs } from "../../../../utils/enums/area-ids";
import { MIREHAVEN_LOOT_WOOD_QUESTGIVER } from "./questgiver";

export const MIREHAVEN_WOOD_BUNDLE = std.Items.create(
  MODULE_NAME,
  "mirehaven-wood-bundle-item"
)
  .DisplayInfo.setSimpleIcon(
    MODULE_NAME,
    "mirehaven-wood-bundle-icon",
    "inv_tradeskillitem_03"
  )
  .Flags.HAS_QUEST_GLOW.set(true)
  .Quality.WHITE.set()
  .Bonding.QUEST_ITEM.set()
  .MaxStack.set(20);

export const MIREHAVEN_COLLECT_WOOD_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-collect-wood-quest"
)
  .Objectives.Item.add(MIREHAVEN_WOOD_BUNDLE.ID, 8)
  .POIs.add(QuestObjectiveTypes.ITEM, [
    { map: 0, x: -3738.585205, y: -2031.710938, z: 165.170654, o: 0.080833 },
    { map: 0, x: -3585.303467, y: -2026.21521, z: 186.171875, o: 6.222649 },
    { map: 0, x: -3567.501221, y: -2304.196045, z: 240.265503, o: 4.706841 },
    { map: 0, x: -3735.415283, y: -2354.54126, z: 251.83754, o: 3.308851 },
  ])
  .AreaSort.set(AreaIDs.WETLANDS)
  .POIs.forEach((poi) => poi.WorldMapArea.set(WorldMapAreaIDs.WETLANDS))
  .Name.enGB.set("Collect Wood")
  .MinLevel.set(20)
  .QuestLevel.set(25)
  .Rewards.Difficulty.DIFFICULTY_5.set()
  .Questgiver.addCreatureBoth(MIREHAVEN_LOOT_WOOD_QUESTGIVER.ID);

namespace Translation {
  export function english() {
    MIREHAVEN_COLLECT_WOOD_QUEST.Name.enGB
      .set("Collect Wood")
      .PickupText.enGB.set(
        `Mirehaven's fires are dwindling and the night grows cold.
We need fresh wood to keep the hearths lit and the workers safe.
Head into the mire and gather sturdy bundles wherever you can find them.`
      )
      .CompleteLogText.enGB.set("Return to Mirehaven.")
      .ObjectiveText.enGB.set("Collect bundle of wood.")
      .CompleteText.enGB.set("")
      .IncompleteText.enGB.set("");

    MIREHAVEN_WOOD_BUNDLE.Name.enGB.set("Mirehaven Wood Bundle");
  }
}

Translation.english();
