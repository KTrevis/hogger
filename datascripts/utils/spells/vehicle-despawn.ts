import { std } from "wow/wotlk";
import { INFINITE_DURATION, MODULE_NAME } from "../constants";
import { CONTROL_VEHICLE } from "./control-vehicle";

export const VEHICLE_INSTANT_DESPAWN_FLAG = std.Spells.create(
  MODULE_NAME,
  "vehicle-instant-despawn-flag"
)
  .Name.enGB.set("Vehicle Instant Despawn Flag")
  .Effects.addMod((eff) => eff.Type.APPLY_AURA.set().Aura.DUMMY.set())
  .Duration.set(INFINITE_DURATION)
  .Tags.addUnique(MODULE_NAME, "vehicle-instant-despawn-flag")
  .Attributes.HIDE_FROM_AURA_BAR.set(true);

CONTROL_VEHICLE.InlineScripts.OnRemove((_, application) => {
  const creature = ToCreature(application.GetTarget());
  if (!creature) {
    return;
  }
  const VEHICLE_INSTANT_DESPAWN_FLAG = UTAG(
    "hogger",
    "vehicle-instant-despawn-flag"
  );
  if (creature.HasAura(VEHICLE_INSTANT_DESPAWN_FLAG)) {
    creature.DespawnOrUnsummon(0);
  }
});
