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

const VICTORY_RUSH_LEGENDARY = CreatorHelper.createItem(
  "victory-rush-legendary"
);

VICTORY_RUSH_LEGENDARY.InventoryType.FINGER.set()
  .Name.enGB.set("PLACEHOLDER NAME VICTORY RUSH LEGENDARY")
  .Quality.ORANGE.set()
  .Spells.addGet()
  .Spell.set(VICTORY_RUSH_HEALING_PASSIVE.ID)
  .Trigger.ON_EQUIP.set();

HEALING_SPELL.InlineScripts.OnCast(() => console.log("cast"));
