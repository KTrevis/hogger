import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { MIREHAVEN_BLACKSMITH_QUEST_ITEM } from "../blacksmith/quest";
import { addQuestItemToCreatureTooltip } from "../../../../utils/quest-tooltip";

const MIREHAVEN_DRAGON_MAW_RAIDER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-dragon-maw-raider",
  1034
)
  .Spawns.add(MODULE_NAME, "mirehaver-dragon-maw-raider-spawn", [])
  .NormalLoot.modRefCopy((table) =>
    table.addItem(MIREHAVEN_BLACKSMITH_QUEST_ITEM.ID, 90, 1, 1, true)
  )
  .Spawns.add(
    MODULE_NAME,
    "mirehaven-dragon-maw-raider-spawn-wander",
    [
      { map: 0, x: -3660.57666, y: -1714.802002, z: 159.878174, o: 5.727834 },
      { map: 0, x: -3692.251709, y: -1732.089722, z: 164.427734, o: 3.509087 },
      { map: 0, x: -3717.321533, y: -1725.403809, z: 162.739304, o: 1.914728 },
      { map: 0, x: -3714.625244, y: -1697.084961, z: 156.262054, o: 2.413456 },
      { map: 0, x: -3757.933594, y: -1673.471313, z: 146.87468, o: 2.150348 },
      { map: 0, x: -3765.685547, y: -1632.947754, z: 138.4048, o: 0.218268 },
      { map: 0, x: -3675.648682, y: -1668.108521, z: 157.86438, o: 0.689509 },
      { map: 0, x: -3708.79834, y: -1661.372681, z: 154.009384, o: 2.888625 },
    ],
    (spawn) => spawn.MovementType.RANDOM_MOVEMENT.set().WanderDistance.set(10)
  );

addQuestItemToCreatureTooltip(
  MIREHAVEN_DRAGON_MAW_RAIDER.ID,
  MIREHAVEN_BLACKSMITH_QUEST_ITEM.ID,
  0
);
