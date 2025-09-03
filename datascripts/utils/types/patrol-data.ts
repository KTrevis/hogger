import { PatrolPosition } from "wow/wotlk/std/Creature/CreaturePatrolPath";
import { CreatureInstancePosition } from "wow/wotlk/std/Creature/CreatureTemplate";

export type PatrolData = {
  spawn: CreatureInstancePosition;
  patrol: PatrolPosition[];
};
