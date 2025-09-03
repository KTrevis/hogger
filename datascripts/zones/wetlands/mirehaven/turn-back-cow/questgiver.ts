import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";

export const TURN_BACK_COW_QUESTGIVER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-cow-questgiver",
  1252
)
  .Spawns.add(MODULE_NAME, "mirehaven-questgiver-spawn", [
    { map: 0, x: -3659.992432, y: -2261.080078, z: 166.372086, o: 2.62159 },
  ])
  .Tags.addUnique(MODULE_NAME, "mirehaven-turn-back-cow-questgiver");
