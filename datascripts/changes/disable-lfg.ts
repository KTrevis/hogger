import { std } from "wow/wotlk";
import { MODULE_NAME } from "../utils/constants";

const dungeons = std.Maps.queryAll({
  InstanceType: 1,
});

dungeons.forEach((curr, i) => {
  curr.Type.DUNGEON.set(MODULE_NAME, `test-dungeon-${i}`).LFGDungeons.forEach(
    (value) => value.delete()
  );
});
