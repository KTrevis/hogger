import { PercentUnits } from "wow/wotlk/std/Misc/PercentCell";
import { CreatorHelper } from "../../../utils/creator-helper";

const VICTORY_RUSH_HEALING_PASSIVE = CreatorHelper.createSpell(
  "victory-rush-healing-legendary-passive",
  33746
);

const HEALING_SPELL = CreatorHelper.createSpell(
  "victory-rush-healing-legendary-proc"
);

HEALING_SPELL.Effects.addGet()
  .Type.HEAL_PCT.set()
  .ImplicitTargetA.UNIT_CASTER.set()
  .HealPctBase.set(20);

VICTORY_RUSH_HEALING_PASSIVE.Effects.get(0)
  .Type.APPLY_AURA.set()
  .Aura.PROC_TRIGGER_SPELL.set()
  .TriggeredSpell.set(HEALING_SPELL.ID);
