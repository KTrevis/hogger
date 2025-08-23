import { std } from "wow/wotlk";
import { INFINITE_DURATION, MODULE_NAME } from "../../utils/constants";
import { HEALING_20_PCT } from "../../utils/auras/healing-20-percent";
import { INSTANT_LAVABURST } from "./instant-lavaburst";

const CHANCE_TO_PROC = 50;

const FLAME_SHOCK = std.Spells.load(8050);

const FLAME_SHOCK_INSTANT_LAVABURST_PROC = std.Spells.create(
  MODULE_NAME,
  "flame-shock-instant-lavaburst-proc"
);

FLAME_SHOCK_INSTANT_LAVABURST_PROC.Family.set(FLAME_SHOCK.Family.get())
  .Proc.mod((proc) =>
    proc.ClassMask.A.set(FLAME_SHOCK.ClassMask.A.get())
      .SpellFamily.set(FLAME_SHOCK.Family.get())
      .TriggerMask.TAKEN_DAMAGE.set(true)
      .PhaseMask.HIT.set(true)
      .Chance.set(CHANCE_TO_PROC)
  )
  .Duration.set(INFINITE_DURATION)
  .Effects.addMod((eff) =>
    eff.Type.APPLY_AURA.set()
      .ImplicitTargetA.UNIT_CASTER.set()
      .Aura.PROC_TRIGGER_SPELL.set()
      .TriggeredSpell.set(INSTANT_LAVABURST.ID)
  )
  .Description.enGB.set(
    `Your Flame Shock has a ${CHANCE_TO_PROC}% chance to make your Lava Burst instant.`
  )
  .Attributes.HIDE_FROM_AURA_BAR.set(true);

const INSTANT_LAVABURST_RING = std.Items.create(
  MODULE_NAME,
  "instant-lavaburst-ring"
);

INSTANT_LAVABURST_RING.InventoryType.FINGER.set()
  .Spells.addMod((spell) =>
    spell.Spell.set(
      FLAME_SHOCK_INSTANT_LAVABURST_PROC.ID
    ).Trigger.ON_EQUIP.set()
  )
  .Name.enGB.set("Instant Lavaburst Ring");

console.log(std.Spells.load(18094).objectify());
