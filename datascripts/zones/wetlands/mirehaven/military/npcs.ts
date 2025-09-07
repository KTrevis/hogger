import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { PatrolData } from "../../../../utils/types/patrol-data";

export const MIREHAVEN_MILITARY_BOSS = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-military-boss",
  25250
)
  .Spawns.add(MODULE_NAME, "mirehaven-military-boss-spawn", {
    map: 0,
    x: -3556.179443,
    y: -2114.563232,
    z: 183.523743,
    o: 3.082599,
  })
  .NPCFlags.QUEST_GIVER.set(true);

const GUARD = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-military-guard",
  5558
);

const PATROL_DATA: PatrolData[] = [
  {
    patrol: [
      { map: 0, x: -3599.628418, y: -2093.445801, z: 168.306702, o: 6.234416 },
      { map: 0, x: -3556.707764, y: -2093.092773, z: 168.306702, o: 6.254048 },
    ],
    spawn: {
      map: 0,
      x: -3599.628418,
      y: -2093.445801,
      z: 168.306702,
      o: 6.234416,
    },
  },
  {
    patrol: [
      { map: 0, x: -3557.750244, y: -2138.957031, z: 168.306702, o: 3.045694 },
      { map: 0, x: -3596.823242, y: -2138.233398, z: 168.306702, o: 0.002271 },
    ],
    spawn: {
      map: 0,
      x: -3596.823242,
      y: -2138.233398,
      z: 168.306702,
      o: 0.002271,
    },
  },
  {
    patrol: [
      { map: 0, x: -3583.004639, y: -2117.166748, z: 166.807297, o: 3.151719 },
      { map: 0, x: -3619.151123, y: -2117.370361, z: 167.067825, o: 3.159573 },
    ],
    spawn: {
      map: 0,
      x: -3619.151123,
      y: -2117.370361,
      z: 167.067825,
      o: 3.159573,
    },
  },
  {
    patrol: [
      { map: 0, x: -3559.855957, y: -2134.469482, z: 177.128036, o: 3.175281 },
      { map: 0, x: -3588.503906, y: -2133.88916, z: 182.229889, o: 3.175281 },
    ],
    spawn: {
      map: 0,
      x: -3588.503906,
      y: -2133.88916,
      z: 182.229889,
      o: 3.175281,
    },
  },
  {
    patrol: [
      { map: 0, x: -3589.317627, y: -2098.498779, z: 182.229889, o: 0.033687 },
      { map: 0, x: -3557.227051, y: -2097.983887, z: 177.128448, o: 0.021906 },
    ],
    spawn: {
      map: 0,
      x: -3557.227051,
      y: -2097.983887,
      z: 177.128448,
      o: 0.021906,
    },
  },
  {
    patrol: [
      { map: 0, x: -3556.581299, y: -2094.197754, z: 192.332397, o: 3.15172 },
      { map: 0, x: -3594.484375, y: -2093.833252, z: 192.33316, o: 3.132085 },
    ],
    spawn: {
      map: 0,
      x: -3594.484375,
      y: -2093.833252,
      z: 192.33316,
      o: 3.132085,
    },
  },
  {
    patrol: [
      { map: 0, x: -3557.438477, y: -2137.824707, z: 192.332275, o: 3.069249 },
      { map: 0, x: -3594.209717, y: -2138.115479, z: 192.33252, o: 3.17135 },
    ],
    spawn: {
      map: 0,
      x: -3557.438477,
      y: -2137.824707,
      z: 192.332275,
      o: 3.069249,
    },
  },
  {
    patrol: [
      { map: 0, x: -3701.006348, y: -2249.757812, z: 166.370026, o: 1.683442 },
      { map: 0, x: -3722.067139, y: -2116.013428, z: 166.384064, o: 1.553851 },
      { map: 0, x: -3657.52417, y: -2114.740234, z: 166.372467, o: 5.810714 },
      { map: 0, x: -3661.85498, y: -2161.19043, z: 166.372467, o: 5.743952 },
      { map: 0, x: -3604.607422, y: -2172.143799, z: 166.375916, o: 6.081674 },
      { map: 0, x: -3657.086182, y: -2239.24585, z: 166.371689, o: 3.976815 },
      { map: 0, x: -3696.991943, y: -2252.293945, z: 166.371689, o: 3.415254 },
    ],
    spawn: {
      map: 0,
      x: -3696.991943,
      y: -2252.293945,
      z: 166.371689,
      o: 3.415254,
    },
  },
];

PATROL_DATA.forEach((curr, index) => {
  GUARD.Spawns.add(
    MODULE_NAME,
    `mirehaven-military-boss-patrol-${index}`,
    curr.spawn,
    (spawn) =>
      spawn.MovementType.WAYPOINT.set().PatrolPath.add("WALK", curr.patrol)
  );
});

namespace Translation {
  export function english() {
    GUARD.Name.enGB.set("Mirehaven Guard");
  }
}

Translation.english();
