import { MODULE_NAME } from "../constants";
import { CreatorHelper } from "../creator-helper";

export const HEALING_20_PCT = CreatorHelper.createSpell(
  "victory-rush-healing-20-pct"
);

HEALING_20_PCT.Tags.addUnique(MODULE_NAME, "victory-rush-healing-20-pct")
  .Name.enGB.set("Healing 20%")
  .Effects.addGet()
  .Type.HEAL_PCT.set()
  .HealPctBase.set(20)
  .ImplicitTargetA.UNIT_CASTER.set();
