import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { EmoteIds } from "../../../../utils/enums/emote-ids";

export const MIREHAVEN_REPAIRER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-repairer",
  2046
)
  .Spawns.add(
    MODULE_NAME,
    "mirehaven-repairer-spawn",
    {
      map: 0,
      x: -3751.808594,
      y: -2278.674805,
      z: 168.181808,
      o: 4.644,
    },
    (spawn) =>
      spawn.MovementType.IDLE.set()
        .Emote.set(EmoteIds.EMOTE_STATE_WORK_MINING)
        .EquipmentID.set(1)
  )
  .NPCFlags.QUEST_GIVER.set(true)
  .Weapons.add(5956);
