import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import {
  HORSE_VEHICLE_MOUNT_NPC,
  HORSE_VEHICULE,
} from "../../../transports/vehicles/horse-vehicle-mount";
import { addCreatureSpells } from "../../../utils/creature-spells";

std.CreatureTemplates.load(5405).Spawns.add(
  MODULE_NAME,
  "pinto-menethil-south-spawns",
  [
    { map: 0, x: -3652.546143, y: -2259.212891, z: 166.371902, o: 2.69606 },
    { map: 0, x: -3663.18335, y: -2265.295166, z: 166.371841, o: 5.900485 },
  ]
);

std.CreatureTemplates.load(5405).Spawns.add(
  MODULE_NAME,
  "brown-horse-menethil-south-spawns",
  { map: 0, x: -3655.050049, y: -2264.990723, z: 166.371765, o: 2.69606 }
);

std.CreatureTemplates.load(12374).Spawns.add(
  MODULE_NAME,
  "belier-menethil-south-spawns",
  [
    { map: 0, x: -3656.751221, y: -2267.973633, z: 166.371902, o: 2.707841 },
    { map: 0, x: -3659.211426, y: -2256.092529, z: 166.371902, o: 5.715912 },
  ]
);

const QUESTGIVER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-cow-questgiver",
  1252
).Spawns.add(MODULE_NAME, "mirehaven-questgiver-spawn", [
  { map: 0, x: -3659.992432, y: -2261.080078, z: 166.372086, o: 2.62159 },
]);

const COW_VEHICULE = std.Vehicles.create(HORSE_VEHICULE.ID);

COW_VEHICULE.Seats.modRef(0, (seat) => seat.Attachment.OffsetZ.set(1.5));

const COW_QUEST_OBJECTIVE = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-horse-quest-objective",
  HORSE_VEHICLE_MOUNT_NPC.ID
)
  .Vehicle.set(COW_VEHICULE.ID)
  .Spawns.add(MODULE_NAME, "mirehaven-horse-quest-objective-spawn", [
    { map: 0, x: -3827.156738, y: -2102.417969, z: 165.299591, o: 4.836428 },
    { map: 0, x: -3856.44165, y: -2131.091309, z: 166.555939, o: 3.638697 },
    { map: 0, x: -3885.379395, y: -2128.072266, z: 166.567047, o: 2.759051 },
    { map: 0, x: -3912.475586, y: -2100.912842, z: 166.797943, o: 2.154294 },
    { map: 0, x: -3907.666748, y: -2071.793945, z: 163.059479, o: 1.168619 },
    { map: 0, x: -3888.903809, y: -2061.905273, z: 158.924835, o: 0.159382 },
    { map: 0, x: -3848.229492, y: -2070.734375, z: 159.542679, o: 5.743565 },
    { map: 0, x: -3822.131348, y: -2061.193604, z: 157.760513, o: 0.308609 },
    { map: 0, x: -3805.23291, y: -2049.50415, z: 155.46106, o: 1.066518 },
    { map: 0, x: -3804.573486, y: -2021.941406, z: 149.529755, o: 2.327082 },
    { map: 0, x: -3832.700195, y: -2003.125488, z: 142.306671, o: 2.861153 },
    { map: 0, x: -3863.641602, y: -2001.434326, z: 140.991394, o: 3.42664 },
  ])
  .Models.clearAll()
  .Models.addMod((model) => model.set(1060))
  .InlineScripts.OnGossipHello((creature, player, cancel) => {
    cancel.set(true);
    const CONTROL_VEHICLE = UTAG("hogger", "control-vehicle");
    player.CastSpell(creature, CONTROL_VEHICLE, true);
  });

const TURN_BACK_COW_CREDIT = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-turn-back-cow-credit",
  40218
)
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

const TURN_BACK_COW_SPELL = std.Spells.create(
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
    if (!creature) {
      return;
    }
    const vehicle = creature.GetVehicle()!;
    creature?.RemoveAura(CONTROL_VEHICLE);
    if (vehicle.IsNull()) {
      return;
    }
    console.log(vehicle?.GetPassenger(0)?.GetName());
  });

const TURN_BACK_COW_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-turn-back-cow-quest"
)
  .Objectives.Entity.add(TURN_BACK_COW_CREDIT.ID, 6)
  .Name.enGB.set("Turn Back Cow");

addCreatureSpells(COW_QUEST_OBJECTIVE.ID, [
  { spell: 48594, index: 0 },
  { spell: TURN_BACK_COW_SPELL.ID, index: 1 },
]);
