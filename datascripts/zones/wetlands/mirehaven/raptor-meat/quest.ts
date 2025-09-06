import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { MIREHAVEN_WOOD_BUNDLE } from "../loot-wood/quest";
import { QuestObjective } from "wow/wotlk/std/Quest/QuestObjective";
import { QuestObjectiveTypes } from "../../../../utils/enums/quest-objective-types";
import { translate } from "../../../../utils/translation";
import { addQuestItemToCreatureTooltip } from "../../../../utils/quest-tooltip";
import { AreaIDs } from "../../../../utils/enums/area-ids";
import { WorldMapAreaIDs } from "../../../../utils/enums/world-map-area";

const QUESTGIVER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-raptor-meat-questgiver",
  3935
)
  .NPCFlags.QUEST_GIVER.set(true)
  .Spawns.add(MODULE_NAME, "mirehaven-raptor-meat-questgiver-spawn", {
    map: 0,
    x: -3667.5354,
    y: -2217.551025,
    z: 167.087494,
    o: 6.265839,
  });

const MIREHAVEN_RAPTOR_MEAT_QUEST_ITEM = std.Items.create(
  MODULE_NAME,
  "mitehaven-raptor-meat-quest-item",
  MIREHAVEN_WOOD_BUNDLE.ID
).DisplayInfo.setSimpleIcon(
  MODULE_NAME,
  "mirehaven-raptor-meat-quest-item-icon",
  "inv_misc_food_119_rhinomeat"
);

const MIREHAVEN_RAPTOR = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-raptor-npc",
  1015
)
  .Level.set(25, 25)
  .Spawns.add(MODULE_NAME, "mirehaven-raptor-npc", [
    { map: 0, x: -3713.015137, y: -1955.034424, z: 167.822647, o: 0.065121 },
    { map: 0, x: -3659.11377, y: -1965.101074, z: 166.424561, o: 6.089128 },
    { map: 0, x: -3649.845459, y: -1915.345093, z: 165.50708, o: 1.651628 },
    { map: 0, x: -3673.599365, y: -1896.574463, z: 166.443588, o: 2.904339 },
    { map: 0, x: -3725.073486, y: -1894.348145, z: 168.609924, o: 3.171374 },
    { map: 0, x: -3747.666016, y: -1854.922852, z: 169.171997, o: 1.317834 },
    { map: 0, x: -3697.198486, y: -1834.044556, z: 167.680786, o: 0.976186 },
    { map: 0, x: -3701.130371, y: -1799.903564, z: 168.203461, o: 1.655555 },
    { map: 0, x: -3741.266113, y: -1796.427856, z: 168.692551, o: 2.794383 },
    { map: 0, x: -3759.275635, y: -1767.776611, z: 168.694504, o: 0.964405 },
    { map: 0, x: -3757.276855, y: -1916.622437, z: 169.881744, o: 2.452732 },
    { map: 0, x: -3685.700684, y: -1860.906006, z: 166.418106, o: 1.67126 },
    { map: 0, x: -3733.943115, y: -1828.661621, z: 168.684647, o: 2.688351 },
    { map: 0, x: -3726.944336, y: -1988.485474, z: 165.106125, o: 3.505144 },
    { map: 0, x: -3761.722412, y: -1992.372681, z: 156.641418, o: 3.245962 },
    { map: 0, x: -3802.201904, y: -2035.119385, z: 153.005646, o: 3.265598 },
    { map: 0, x: -3845.315918, y: -2034.406982, z: 151.537689, o: 3.104591 },
    { map: 0, x: -3888.081787, y: -2041.320679, z: 153.979858, o: 4.011725 },
    { map: 0, x: -3901.075195, y: -2075.000244, z: 162.803833, o: 4.561497 },
    { map: 0, x: -3878.020996, y: -2125.770996, z: 166.44545, o: 0.171112 },
  ]);

const MIREHAVEN_RAPTOR_MEAT_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-raptor-meat-quest"
)
  .Objectives.Item.add(MIREHAVEN_RAPTOR_MEAT_QUEST_ITEM.ID, 6)
  .POIs.add(QuestObjectiveTypes.ITEM, [
    { map: 0, x: -3906.834961, y: -2132.82666, z: 167.380844, o: 1.184235 },
    { map: 0, x: -3796.894775, y: -2123.358398, z: 166.616394, o: 1.337387 },
    { map: 0, x: -3754.687012, y: -1987.320801, z: 158.095581, o: 0.214267 },
    { map: 0, x: -3637.453125, y: -1975.978516, z: 166.310745, o: 0.076823 },
    { map: 0, x: -3705.110596, y: -1778.368042, z: 168.633499, o: 4.105917 },
    { map: 0, x: -3933.335449, y: -2050.139893, z: 165.541962, o: 0.339936 },
  ])
  .POIs.forEach((poi) => poi.WorldMapArea.set(WorldMapAreaIDs.WETLANDS))
  .MinLevel.set(20)
  .QuestLevel.set(25)
  .Rewards.Difficulty.DIFFICULTY_5.set()
  .Questgiver.addCreatureBoth(QUESTGIVER.ID)
  .AreaSort.set(AreaIDs.WETLANDS);

namespace Translation {
  export function english() {
    MIREHAVEN_RAPTOR_MEAT_QUEST.Name.enGB.set(
      "PLACEHOLDER: Mirehaven Raptor Meat"
    );
    MIREHAVEN_RAPTOR_MEAT_QUEST_ITEM.Name.enGB.set("Raptor Meat");
    addQuestItemToCreatureTooltip(
      MIREHAVEN_RAPTOR.ID,
      MIREHAVEN_RAPTOR_MEAT_QUEST_ITEM.ID,
      0
    );
  }
}

translate({
  enGB: Translation.english,
});
