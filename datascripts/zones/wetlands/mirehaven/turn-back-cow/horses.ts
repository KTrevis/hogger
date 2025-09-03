import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";

function spawnHorses() {
  std.CreatureTemplates.load(5405).Spawns.add(
    MODULE_NAME,
    "pinto-menethil-south-spawns",
    [
      { map: 0, x: -3652.546143, y: -2259.212891, z: 166.371902, o: 2.69606 },
      { map: 0, x: -3663.18335, y: -2265.295166, z: 166.371841, o: 5.900485 },
    ]
  );

  std.CreatureTemplates.load(5405).Spawns.add(
    MODULE_NAME,
    "brown-horse-menethil-south-spawns",
    { map: 0, x: -3655.050049, y: -2264.990723, z: 166.371765, o: 2.69606 }
  );

  std.CreatureTemplates.load(12374).Spawns.add(
    MODULE_NAME,
    "belier-menethil-south-spawns",
    [
      { map: 0, x: -3656.751221, y: -2267.973633, z: 166.371902, o: 2.707841 },
      { map: 0, x: -3659.211426, y: -2256.092529, z: 166.371902, o: 5.715912 },
    ]
  );
}

spawnHorses();
