import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../utils/constants";
import { VEHICLE_INSTANT_DESPAWN_FLAG } from "../../utils/spells/vehicle-despawn";

const HORSE_40_VEHICLE = std.Vehicles.create(62);

HORSE_40_VEHICLE.Seats.modRef(0, (seat) => {
  seat.HasUISkin.set(0).Attachment.set(21, 0, 0, 0);
});

const HORSE_40_NPC = std.CreatureTemplates.create(
  "hogger",
  "horse-40-mount",
  5403
)
  .Tags.addUnique(MODULE_NAME, "horse-40-mount-npc")
  .Vehicle.set(HORSE_40_VEHICLE.ID)
  .NPCFlags.GOSSIP.set(true)
  .Spawns.add(MODULE_NAME, "horse-40-mount-spawn", [
    { map: 0, x: -9441.90332, y: 81.925133, z: 57.308872, o: 5.190265 },
  ])
  .Auras.set(VEHICLE_INSTANT_DESPAWN_FLAG.ID.toString())
  .Icon.set("vehichleCursor")
  .InlineScripts.OnGossipHello((creature, player, cancel) => {
    cancel.set(true);
    const LIFETIME = 60 * 1000;
    const CONTROL_VEHICLE = UTAG("hogger", "control-vehicle");
    const position = player.GetPosition();
    const spawned = player.SpawnCreature(
      creature.GetEntry(),
      position.x,
      position.y,
      position.z,
      position.o,
      TempSummonType.MANUAL_DESPAWN,
      0
    );
    if (!spawned || spawned?.IsNull()) {
      return;
    }
    player.SendAreaTriggerMessage(
      `You can ride this horse for ${LIFETIME / 1000} seconds.`
    );
    player.CastSpell(spawned, CONTROL_VEHICLE, true);
    player.AddNamedTimer("horse-vehicle-despawn", LIFETIME, 1, 0, (owner) => {
      const player = ToPlayer(owner)!;
      if (player.IsNull()) {
        return;
      }
      const vehicle = player.GetVehicle()!;
      if (vehicle.IsNull()) {
        return;
      }
      const vehicleOwner = vehicle.GetOwner()!;
      if (vehicleOwner.IsNull()) {
        return;
      }
      const CONTROL_VEHICLE = UTAG("hogger", "control-vehicle");
      vehicleOwner.RemoveAura(CONTROL_VEHICLE);
      player.RemoveAura(CONTROL_VEHICLE);
    });
  })
  .InlineScripts.OnDespawn((_, summoner) => {
    const player = ToPlayer(summoner)!;
    if (player.IsNull()) {
      return;
    }
    player.RemoveTimer("horse-vehicle-despawn");
  });
