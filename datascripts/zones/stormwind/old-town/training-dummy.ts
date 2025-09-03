import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";

const LEVEL_20_SPAWNS = [
  {
    map: 0,
    x: -8709.955078,
    y: 355.151001,
    z: 101.019279,
    o: 3.913907,
  },
];

const LEVEL_20_TRAINING_DUMMY = std.CreatureTemplates.create(
  MODULE_NAME,
  "level-20-training-dummy",
  31144
)
  .Spawns.add(MODULE_NAME, "level-20-training-dummy-spawn", LEVEL_20_SPAWNS)
  .Level.set(20, 20)
  .Name.enGB.set("Training Dummy");
