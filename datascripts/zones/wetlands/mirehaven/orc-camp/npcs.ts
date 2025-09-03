import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { MIREHAVEN_BLACKSMITH_QUEST_ITEM } from "../blacksmith/quest";
import { addQuestItemToCreatureTooltip } from "../../../../utils/quest-tooltip";

const MIREHAVEN_DRAGON_MAW_RAIDER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-dragon-maw-raider",
  1034
)
  .Spawns.add(MODULE_NAME, "mirehaver-dragon-maw-raider-spawn", [
    { map: 0, x: -3650.908936, y: -1875.591797, z: 164.931992, o: 3.442289 },
    { map: 0, x: -3657.877197, y: -1858.018188, z: 164.686722, o: 5.877021 },
    { map: 0, x: -3649.081543, y: -1862.178833, z: 164.600281, o: 3.399092 },
    { map: 0, x: -3769.463623, y: -1911.812378, z: 170.522781, o: 0.410651 },
    { map: 0, x: -3774.919678, y: -1895.229492, z: 170.587173, o: 5.743505 },
    { map: 0, x: -3761.448975, y: -1892.272461, z: 170.464935, o: 5.201582 },
    { map: 0, x: -3767.174561, y: -1767.462158, z: 168.693649, o: 0.006169 },
    { map: 0, x: -3770.63916, y: -1751.011108, z: 170.655426, o: 5.708163 },
    { map: 0, x: -3755.35498, y: -1744.75293, z: 169.12294, o: 5.649258 },
    { map: 0, x: -3687.853027, y: -1642.783447, z: 158.921555, o: 3.344113 },
    { map: 0, x: -3692.309326, y: -1625.363037, z: 160.376129, o: 3.999922 },
    { map: 0, x: -3676.800049, y: -1622.562256, z: 159.376923, o: 4.781392 },
  ])
  .NormalLoot.modRefCopy((table) =>
    table.addItem(MIREHAVEN_BLACKSMITH_QUEST_ITEM.ID, 90, 1, 1, true)
  )
  .Spawns.add(MODULE_NAME, "mirehaven-dragon-maw-raider-spawn-wander", []);

addQuestItemToCreatureTooltip(
  MIREHAVEN_DRAGON_MAW_RAIDER.ID,
  MIREHAVEN_BLACKSMITH_QUEST_ITEM.ID,
  0
);
