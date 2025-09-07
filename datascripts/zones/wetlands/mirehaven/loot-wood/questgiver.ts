import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";

export const MIREHAVEN_LOOT_WOOD_QUESTGIVER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-loot-wood-questgiver",
  1650
)
  .Spawns.add(MODULE_NAME, "mirehaven-loot-wood-questgiver-spawn", {
    map: 0,
    x: -3654.753174,
    y: -2314.89624,
    z: 166.840714,
    o: 2.404961,
  })
  .NPCFlags.QUEST_GIVER.set(true)
  .NPCFlags.GOSSIP.set(true);
