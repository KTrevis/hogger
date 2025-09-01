import { std } from "wow/wotlk";
import { MODULE_NAME } from "../constants";

export const CONTROL_VEHICLE = std.Spells.create(
  MODULE_NAME,
  "control-vehicle",
  60962
)
  .Name.enGB.set("Control Vehicle")
  .Tags.addUnique(MODULE_NAME, "control-vehicle");
