import { std } from "wow/wotlk";

const CREATURE_TO_DELETE = [60898, 61693, 60899, 60900, 60895, 60894];

CREATURE_TO_DELETE.forEach((id) => {
  const instance = std.CreatureInstances.load(id);
  if (!instance) {
    return;
  }
  instance.delete();
});
