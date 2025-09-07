import { MODULE_NAME } from "../../../../utils/constants";
import { std } from "wow/wotlk";
import { setQuestText } from "../../../../utils/quest-text";
import { GameObjectDisplayIDs } from "../../../../utils/enums/gameobject-display-id";
import { WOOD_BUNDLE_CHEST } from "../loot-wood/wood-bundle";
import { AreaIDs } from "../../../../utils/enums/area-ids";
import { WorldMapAreaIDs } from "../../../../utils/enums/world-map-area";
import { QuestObjectiveTypes } from "../../../../utils/enums/quest-objective-types";
import { DORMITORY_PATROL } from "../dormitory/npcs";
import { MIREHAVEN_ORC_CAMP_BOSS_QUEST } from "../orc-camp/boss";

const ORE_ITEM = std.Items.create(MODULE_NAME, "mirehaven-trogg-ore-item")
  .Flags.HAS_QUEST_GLOW.set(true)
  .Bonding.QUEST_ITEM.set()
  .Quality.WHITE.set()
  .DisplayInfo.setSimpleIcon(
    MODULE_NAME,
    "mirehaven-trogg-ore-icon",
    "inv_pet_scorchedstone"
  )
  .MaxStack.set(20);

const MIREHAVEN_TROGG_ORE_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-trogg-ore-quest"
)
  .Objectives.Item.add(ORE_ITEM.ID, 6)
  .MinLevel.set(20)
  .QuestLevel.set(25)
  .AreaSort.set(AreaIDs.WETLANDS)
  .POIs.add(QuestObjectiveTypes.ITEM, [
    { map: 0, x: -4184.168457, y: -1403.688232, z: 203.369751, o: 3.455709 },
    { map: 0, x: -4247.665527, y: -1379.599976, z: 204.080948, o: 3.87197 },
    { map: 0, x: -4321.078125, y: -1474.766113, z: 189.682083, o: 4.747684 },
  ])
  .POIs.forEach((poi) => poi.WorldMapArea.set(WorldMapAreaIDs.WETLANDS))
  .Questgiver.addCreatureBoth(DORMITORY_PATROL.ID)
  .Rewards.Difficulty.DIFFICULTY_5.set()
  .PrevQuest.set(MIREHAVEN_ORC_CAMP_BOSS_QUEST.ID);

const ORE = std.GameObjectTemplates.Chests.create(
  MODULE_NAME,
  "mirehaven-trogg-ore"
)
  .Spawns.add(MODULE_NAME, "mirehaven-trogg-ore-spawn", [
    { map: 0, x: -4201.252441, y: -1420.592896, z: 201.681198, o: 2.05193 },
    { map: 0, x: -4208.359863, y: -1388.092896, z: 202.67041, o: 2.911941 },
    { map: 0, x: -4246.55127, y: -1374.541748, z: 202.765244, o: 2.012659 },
    { map: 0, x: -4255.536133, y: -1430.167236, z: 196.81012, o: 4.946115 },
    { map: 0, x: -4235.882324, y: -1425.62085, z: 203.077286, o: 1.239035 },
    { map: 0, x: -4263.304688, y: -1473.395264, z: 191.860321, o: 5.374152 },
    { map: 0, x: -4294.547852, y: -1479.64856, z: 191.312012, o: 4.718342 },
    { map: 0, x: -4319.6875, y: -1462.496094, z: 188.267258, o: 2.970831 },
    { map: 0, x: -4288.737305, y: -1420.92749, z: 185.174927, o: 0.89738 },
  ])
  .Lock.set(43)
  .Display.set(GameObjectDisplayIDs.INCENDIUM_ORE)
  .Loot.modRef((table) => table.addItem(ORE_ITEM.ID, 100, 1, 1))
  .Quest.set(MIREHAVEN_TROGG_ORE_QUEST.ID)
  .IsConsumable.set(1);

namespace Translation {
  export function english() {
    const ORE_NAME = "Shinestone Ore";
    ORE_ITEM.Name.enGB.set(ORE_NAME);
    ORE.Name.enGB.set(ORE_NAME);
    setQuestText(MIREHAVEN_TROGG_ORE_QUEST, "enGB", {
      name: ORE_NAME,
      pickup: `Listen up, hero! You see that cave over yonder? It's stuffed with minerals so shiny they could make a dwarf cry with joy. Problem is, a bunch of grumpy troggs got there first and now they're sitting on it like it's their personal treasure chest.

I need you to head into that dank, smelly hole, give those rock-chewing brutes a lesson in property rights, and bring me back some of those minerals. Don't worry, I won't ask how you got them... let's just say "the troggs donated them."

So, what do you say? Ready to go spelunking with a side of smashing?`,
      completeLog: "Return to Mirehaven.",
      objective: "Bring 6 Shinestone to the dormitory.",
    });
  }
}

Translation.english();
