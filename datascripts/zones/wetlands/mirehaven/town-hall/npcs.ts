import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";

export const MIREHAVEN_MAYOR = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-mayor",
  344
).Spawns.add(MODULE_NAME, "mirehaven-mayor-spawn", {
  map: 0,
  x: -3702.911377,
  y: -2056.802002,
  z: 170.155899,
  o: 3.144613,
});
