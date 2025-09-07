import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { MIREHAVEN_WOOD_BUNDLE } from "../loot-wood/quest";
import { MIREHAVEN_REPAIRER } from "./repairer";
import { setQuestText } from "../../../../utils/quest-text";
import { AreaIDs } from "../../../../utils/enums/area-ids";
import { QuestObjectiveTypes } from "../../../../utils/enums/quest-objective-types";
import { WorldMapAreaIDs } from "../../../../utils/enums/world-map-area";
import { MIREHAVEN_TURN_BACK_COW_QUEST } from "../turn-back-cow/quest";

export const MIREHAVEN_BLACKSMITH_QUEST_ITEM = std.Items.create(
  MODULE_NAME,
  "mirehaven-blacksmith-quest-item",
  MIREHAVEN_WOOD_BUNDLE.ID
)
  .Name.enGB.set("Orcish Bastard Weapon")
  .DisplayInfo.setSimpleIcon(
    MODULE_NAME,
    "mirehaven-blacksmith-quest-item-icon",
    "inv_weapon_shortblade_07"
  );

export const MIREHAVEN_BLACKSMITH_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-blacksmith-quest"
)
  .Objectives.Item.add(MIREHAVEN_BLACKSMITH_QUEST_ITEM.ID, 4)
  .Name.enGB.set("PLACEHOLDER: Mirehaven Blacksmith Quest")
  .Questgiver.addCreatureBoth(MIREHAVEN_REPAIRER.ID)
  .MinLevel.set(20)
  .QuestLevel.set(25)
  .Rewards.Difficulty.DIFFICULTY_5.set()
  .POIs.add(QuestObjectiveTypes.ITEM, [
    { map: 0, x: -3649.486328, y: -1747.270874, z: 189.240234, o: 1.533813 },
    { map: 0, x: -3644.34375, y: -1608.279175, z: 205.204483, o: 1.533813 },
    { map: 0, x: -3737.272461, y: -1576.10022, z: 195.830872, o: 2.951457 },
    { map: 0, x: -3772.144043, y: -1722.742065, z: 207.372528, o: 5.390104 },
  ])
  .POIs.forEach((poi) => poi.WorldMapArea.set(WorldMapAreaIDs.WETLANDS))
  .AreaSort.set(AreaIDs.WETLANDS)
  .PrevQuest.set(MIREHAVEN_TURN_BACK_COW_QUEST.ID);

namespace Translation {
  export function english() {
    setQuestText(MIREHAVEN_BLACKSMITH_QUEST, "enGB", {
      name: "Orcish Bastard Weapons",
      pickup: `Mirehaven's smithy is in dire need of repairs. The weapons forged here are critical to our defense against the forces of evil.

I have tasked a skilled blacksmith to repair our weapons. Bring me 4 damaged weapons, and I will reward you with a fine weapon of your own.`,
      completeLog: "Return to Mirehaven.",
      objective: "Bring 4 damaged weapons to the blacksmith.",
    });
  }
}

Translation.english();
