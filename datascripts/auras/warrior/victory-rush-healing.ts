import { std } from "wow/wotlk";
import { INFINITE_DURATION, MODULE_NAME } from "../../utils/constants";
import { HEALING_20_PCT } from "../../utils/auras/healing-20-percent";

const VICTORY_RUSH_SPELL = std.Spells.load(34428);

export const VICTORY_RUSH_HEALING = std.Spells.create(
  MODULE_NAME,
  "victory-rush-healing",
  20500
).Name.enGB.set("Victory Rush Healing");

VICTORY_RUSH_HEALING.Proc.TriggerMask.set("DONE_SPELL_MELEE_DMG_CLASS");
VICTORY_RUSH_HEALING.Proc.ClassMask.B.set(VICTORY_RUSH_SPELL.ClassMask.B.get());

VICTORY_RUSH_HEALING.InlineScripts.OnProc(() => console.log("PROC"));
VICTORY_RUSH_HEALING.InlineScripts.OnApply(() => console.log("APPLY"));

VICTORY_RUSH_HEALING.Effects.get(0)
  .ClassMask.B.set(VICTORY_RUSH_SPELL.ClassMask.B.get())
  .ClassMask.A.set(0)
  .TriggerSpell.set(HEALING_20_PCT.ID);

console.log(VICTORY_RUSH_HEALING.objectify());
