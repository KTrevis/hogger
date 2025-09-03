import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";

export const TURN_BACK_COW_CREDIT = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-turn-back-cow-credit",
  40218
)
  .Name.enGB.set("Turn Back Cow Credit")
  .Tags.addUnique(MODULE_NAME, "mirehaven-turn-back-cow-credit")
  .Spawns.add(MODULE_NAME, "mirehaven-turn-back-cow-credit-spawn", {
    map: 0,
    x: -3659.924561,
    y: -2261.208252,
    z: 166.371933,
    o: 2.696239,
  });

const KILL_CREDIT = std.Spells.create(MODULE_NAME, "mirehaven-cow-kill-credit")
  .Effects.addMod((eff) =>
    eff.Type.KILL_CREDIT2.set()
      .MiscValueA.set(TURN_BACK_COW_CREDIT.ID)
      .ImplicitTargetA.UNIT_MASTER.set()
  )
  .Tags.addUnique(MODULE_NAME, "mirehaven-cow-kill-credit");

export const TURN_BACK_COW_SPELL = std.Spells.create(
  MODULE_NAME,
  "mirehaven-turn-back-cow"
)
  .Effects.addMod((eff) =>
    eff.Type.DUMMY.set().ImplicitTargetA.UNIT_CASTER.set()
  )
  .Range.setSimple(0, 10)
  .Icon.setPath("spell_nature_polymorph_cow")
  .Name.enGB.set("Turn Back Cow")
  .InlineScripts.OnCast((spell) => {
    const caster = spell.GetCaster();
    const CREDIT_ID = UTAG("hogger", "mirehaven-turn-back-cow-credit");
    const KILL_CREDIT_SPELL_ID = UTAG("hogger", "mirehaven-cow-kill-credit");
    const CONTROL_VEHICLE = UTAG("hogger", "control-vehicle");

    const credit = caster.GetNearestCreature(10, CREDIT_ID, 0, 0);

    if (!credit) {
      return;
    }
    const res = caster.CastSpell(credit, KILL_CREDIT_SPELL_ID, true);

    if (res !== SpellCastResult.CAST_OK) {
      return;
    }
    const creature = ToCreature(caster);
    creature?.RemoveAura(CONTROL_VEHICLE);
  });
