import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";

export const DORMITORY_PATROL = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-dormitory-patrol",
  197
).Spawns.add(
  MODULE_NAME,
  "mirehaven-dormitory-patrol-spawn",
  {
    map: 0,
    x: -3703.817627,
    y: -2140.142334,
    z: 168.146271,
    o: 0.069036,
  },
  (spawn) =>
    spawn.PatrolPath.add("WALK", [
      {
        map: 0,
        x: -3677.762939,
        y: -2138.341064,
        z: 167.862747,
        o: 0.069036,
      },
      {
        map: 0,
        x: -3700.427002,
        y: -2139.862305,
        z: 168.179871,
        o: 3.206702,
      },
    ])
);

const INJURED_SOLDIERS = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-injured-soldiers",
  16865
).Spawns.add(MODULE_NAME, "mirehaven-injured-soldiers-spawn", [
  { map: 0, x: -3687.131104, y: -2145.708496, z: 170.490128, o: 1.62806 },
  { map: 0, x: -3683.008545, y: -2145.34375, z: 170.458588, o: 1.62806 },
  { map: 0, x: -3678.889893, y: -2145.443115, z: 170.594788, o: 1.557373 },
  { map: 0, x: -3690.507324, y: -2132.749268, z: 170.636627, o: 4.714668 },
  { map: 0, x: -3694.689941, y: -2133.509766, z: 170.750107, o: 4.687171 },
  { map: 0, x: -3690.389648, y: -2133.172363, z: 168.801514, o: 4.722509 },
  { map: 0, x: -3682.727295, y: -2146.06543, z: 168.653534, o: 1.741931 },
]);
