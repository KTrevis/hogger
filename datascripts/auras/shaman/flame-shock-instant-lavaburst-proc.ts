import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../utils/constants";

const FLAME_SHOCK = std.Spells.load(8050);

const FLAME_SHOCK_INSTANT_LAVABURST_PROC = std.Spells.create(
  MODULE_NAME,
  "flame-shock-instant-lavaburst-proc"
);
