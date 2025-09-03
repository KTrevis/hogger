import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { EmoteIds } from "../../../utils/enums/emote-ids";
import { PatrolData } from "../../../utils/types/patrol-data";

const delay = 10000;

const PEASANT_PATROL_PATH: PatrolData[] = [
  {
    spawn: {
      map: 0,
      x: -3653.797607,
      y: -2308.778809,
      z: 166.844833,
      o: 6.246204,
    },
    patrol: [
      { map: 0, x: -3666.150391, y: -2290.794189, z: 166.372147, o: 2.138572 },
      {
        map: 0,
        x: -3638.676514,
        y: -2282.408447,
        z: 166.372147,
        o: 0.28896,
        delay,
      },
      {
        map: 0,
        x: -3630.205566,
        y: -2234.132324,
        z: 166.224258,
        o: 1.396372,
        delay,
      },
      {
        map: 0,
        x: -3636.417969,
        y: -2272.663086,
        z: 166.135559,
        o: 5.138784,
        delay,
      },
      { map: 0, x: -3665.422852, y: -2291.61499, z: 166.371582, o: 3.717213 },
      { map: 0, x: -3653.664062, y: -2308.93335, z: 166.844711, o: 5.452928 },
      {
        map: 0,
        x: -3653.664062,
        y: -2308.93335,
        z: 166.844711,
        o: 5.452928,
        delay,
      },
    ],
  },
  {
    spawn: {
      map: 0,
      x: -3662.848389,
      y: -2318.20752,
      z: 166.844711,
      o: 5.382239,
    },
    patrol: [
      { map: 0, x: -3662.848389, y: -2318.20752, z: 166.844711, o: 5.382239 },
      { map: 0, x: -3680.3396, y: -2323.261963, z: 166.372101, o: 4.820681 },
      {
        map: 0,
        x: -3679.651123,
        y: -2334.074951,
        z: 166.372101,
        o: 4.789265,
        delay,
      },
      {
        map: 0,
        x: -3715.549072,
        y: -2307.248779,
        z: 166.372101,
        o: 2.499829,
        delay,
      },
      { map: 0, x: -3709.623047, y: -2296.511475, z: 166.372101, o: 1.066478 },
      {
        map: 0,
        x: -3738.553711,
        y: -2263.171387,
        z: 166.372101,
        o: 2.440926,
        delay,
      },
      { map: 0, x: -3683.550537, y: -2282.781006, z: 166.372101, o: 6.085167 },
      {
        map: 0,
        x: -3659.87085,
        y: -2317.071045,
        z: 166.844391,
        o: 5.354756,
        delay,
      },
    ],
  },
];

const WOODCUTTER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-woodcutter",
  11260
)
  .Name.enGB.set("Mirehaven Peasant")
  .Weapons.add(768);

PEASANT_PATROL_PATH.forEach((curr, index) => {
  WOODCUTTER.Spawns.add(
    MODULE_NAME,
    `mirehaven-loot-wood-peasant-spawn-${index}`,
    curr.spawn,
    (spawn) =>
      spawn.MovementType.WAYPOINT.set()
        .PatrolPath.add("WALK", curr.patrol)
        .Emote.set(EmoteIds.EMOTE_STATE_WORK_CHOPWOOD)
        .EquipmentID.set(1)
  );
});
