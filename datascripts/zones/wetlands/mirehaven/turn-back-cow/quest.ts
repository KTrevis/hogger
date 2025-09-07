import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { AreaIDs } from "../../../../utils/enums/area-ids";
import { WorldMapAreaIDs } from "../../../../utils/enums/world-map-area";
import { MIREHAVEN_TURN_BACK_COW_QUESTGIVER } from "./questgiver";
import { setQuestText } from "../../../../utils/quest-text";

export const MIREHAVEN_TURN_BACK_COW_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-turn-back-cow-quest"
)
  .Objectives.Entity.add(MIREHAVEN_TURN_BACK_COW_QUESTGIVER.ID, 6)
  .Name.enGB.set("Turn Back Cow")
  .Tags.addUnique(MODULE_NAME, "mirehaven-turn-back-cow-quest")
  .Questgiver.addCreatureBoth(MIREHAVEN_TURN_BACK_COW_QUESTGIVER.ID, true)
  .POIs.add(
    0,
    [
      { map: 0, x: -3906.834961, y: -2132.82666, z: 167.380844, o: 1.184235 },
      { map: 0, x: -3796.894775, y: -2123.358398, z: 166.616394, o: 1.337387 },
      { map: 0, x: -3754.687012, y: -1987.320801, z: 158.095581, o: 0.214267 },
      { map: 0, x: -3637.453125, y: -1975.978516, z: 166.310745, o: 0.076823 },
      { map: 0, x: -3705.110596, y: -1778.368042, z: 168.633499, o: 4.105917 },
      { map: 0, x: -3933.335449, y: -2050.139893, z: 165.541962, o: 0.339936 },
    ],
    AreaIDs.WETLANDS
  )
  .AreaSort.set(AreaIDs.WETLANDS)
  .POIs.forEach((poi) => poi.WorldMapArea.set(WorldMapAreaIDs.WETLANDS))
  .MinLevel.set(20)
  .QuestLevel.set(25)
  .Rewards.Difficulty.DIFFICULTY_5.set();

namespace Translation {
  export function english() {
    setQuestText(MIREHAVEN_TURN_BACK_COW_QUEST, "enGB", {
      name: "Turn Back Cows",
      pickup: `Hey, you! My herd spooked and six cows bolted into the marsh.
I can't leave the pen or I'll lose the rest.

Please round them up and turn them back this way.
Give them a firm swat if they get stubborn, but don't hurt them.
Bring all six home and I'll make it worth your while.`,
      completeLog: "Return to Mirehaven.",
      objective: "Turn Back Cows.",
    });

    std.SQL.quest_template
      .query({ ID: MIREHAVEN_TURN_BACK_COW_QUEST.ID })
      .ObjectiveText1.set("Turned Back Cows");
  }
}

Translation.english();
