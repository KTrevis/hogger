import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { AreaIDs } from "../../../../utils/enums/area-ids";
import { WorldMapAreaIDs } from "../../../../utils/enums/world-map-area";
import { TURN_BACK_COW_QUESTGIVER } from "./questgiver";

export const TURN_BACK_COW_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-turn-back-cow-quest"
)
  .Objectives.Entity.add(TURN_BACK_COW_QUESTGIVER.ID, 6)
  .Name.enGB.set("Turn Back Cow")
  .Tags.addUnique(MODULE_NAME, "mirehaven-turn-back-cow-quest")
  .Questgiver.addCreatureBoth(TURN_BACK_COW_QUESTGIVER.ID, true)
  .POIs.add(
    0,
    [
      { map: 0, x: -3802.375977, y: -2109.237305, z: 167.073135, o: 3.438003 },
      { map: 0, x: -3902.151611, y: -2140.138428, z: 167.108566, o: 1.588391 },
      { map: 0, x: -3923.994873, y: -2049.751465, z: 163.711426, o: 1.152495 },
      { map: 0, x: -3794.168457, y: -2035.528931, z: 154.861252, o: 6.127996 },
    ],
    AreaIDs.WETLANDS
  )
  .AreaSort.set(AreaIDs.WETLANDS)
  .POIs.forEach((poi) => poi.WorldMapArea.set(WorldMapAreaIDs.WETLANDS))
  .MinLevel.set(20)
  .QuestLevel.set(25)
  .Rewards.Difficulty.DIFFICULTY_5.set();

std.SQL.quest_template
  .query({ ID: TURN_BACK_COW_QUEST.ID })
  .ObjectiveText1.set("Turned Back Cow");
