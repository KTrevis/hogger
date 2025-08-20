import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../utils/constants";

const FLAME_SHOCK_INSTANT_LAVABURST_PROC = std.Spells.create(
  MODULE_NAME,
  "flame-shock-instant-lavaburst-proc",
  33746
);

// FLAME_SHOCK_INSTANT_LAVABURST_PROC.Effects.addGet()
//   .Type.APPLY_AURA.set()
//   .Aura.ADD_TARGET_TRIGGER.set();
