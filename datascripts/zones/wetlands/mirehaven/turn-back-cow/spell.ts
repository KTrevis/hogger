import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { TURN_BACK_COW_QUESTGIVER } from "./questgiver";

std.Spells.create(MODULE_NAME, "mirehaven-cow-kill-credit-spell")
  .Effects.addMod((eff) =>
    eff.Type.KILL_CREDIT2.set()
      .MiscValueA.set(TURN_BACK_COW_QUESTGIVER.ID)
      .ImplicitTargetA.UNIT_MASTER.set()
  )
  .Tags.addUnique(MODULE_NAME, "mirehaven-cow-kill-credit-spell");

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
    const QUESTGIVER_ID = UTAG("hogger", "mirehaven-turn-back-cow-questgiver");
    const KILL_CREDIT_SPELL_ID = UTAG(
      "hogger",
      "mirehaven-cow-kill-credit-spell"
    );
    const CONTROL_VEHICLE = UTAG("hogger", "control-vehicle");
    const credit = caster.GetNearestCreature(10, QUESTGIVER_ID, 0, 0);

    if (!credit || credit.IsNull()) {
      return;
    }
    const res = caster.CastSpell(credit, KILL_CREDIT_SPELL_ID, true);

    if (res !== SpellCastResult.CAST_OK) {
      return;
    }
    const creature = ToCreature(caster);
    if (!creature || creature.IsNull()) {
      return;
    }
    creature.RemoveAura(CONTROL_VEHICLE);
  });
