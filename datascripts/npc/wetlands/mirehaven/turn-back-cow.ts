import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import {
  HORSE_VEHICLE_MOUNT_NPC,
  HORSE_VEHICULE,
} from "../../../transports/vehicles/horse-vehicle-mount";
import { addCreatureSpells } from "../../../utils/creature-spells";
import { COW_SPAWNS } from "./cow-spawns";
import { AreaIDs } from "../../../utils/enums/area-ids";
import { WorldMapAreaIDs } from "../../../utils/enums/world-map-area";

function spawnHorses() {
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
}

spawnHorses();

const QUESTGIVER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-cow-questgiver",
  1252
).Spawns.add(MODULE_NAME, "mirehaven-questgiver-spawn", [
  { map: 0, x: -3659.992432, y: -2261.080078, z: 166.372086, o: 2.62159 },
]);

const COW_VEHICULE = std.Vehicles.create(HORSE_VEHICULE.ID);

COW_VEHICULE.Seats.modRef(0, (seat) => seat.Attachment.OffsetZ.set(1.5));

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

const TURN_BACK_COW_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-turn-back-cow-quest"
)
  .Objectives.Entity.add(TURN_BACK_COW_CREDIT.ID, 6)
  .Name.enGB.set("Turn Back Cow")
  .Tags.addUnique(MODULE_NAME, "mirehaven-turn-back-cow-quest")
  .Questgiver.addCreatureBoth(QUESTGIVER.ID, true)
  .POIs.add(
    0,
    [
      { map: 0, x: -3802.375977, y: -2109.237305, z: 167.073135, o: 3.438003 },
      { map: 0, x: -3902.151611, y: -2140.138428, z: 167.108566, o: 1.588391 },
      { map: 0, x: -3923.994873, y: -2049.751465, z: 163.711426, o: 1.152495 },
      { map: 0, x: -3794.168457, y: -2035.528931, z: 154.861252, o: 6.127996 },
    ],
    AreaIDs.WETLANDS
  )
  .AreaSort.set(AreaIDs.WETLANDS)
  .POIs.forEach((poi) => poi.WorldMapArea.set(WorldMapAreaIDs.WETLANDS));

const COW_QUEST_OBJECTIVE = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-horse-quest-objective",
  HORSE_VEHICLE_MOUNT_NPC.ID
)
  .Vehicle.set(COW_VEHICULE.ID)
  .Spawns.add(
    MODULE_NAME,
    "mirehaven-horse-quest-objective-spawn",
    COW_SPAWNS,
    (spawn) => spawn.MovementType.RANDOM_MOVEMENT.set().WanderDistance.set(10)
  )
  .Models.clearAll()
  .Models.addMod((model) => model.set(1060))
  .InlineScripts.OnGossipHello((creature, player, cancel) => {
    cancel.set(true);
    const QUEST_ID = UTAG("hogger", "mirehaven-turn-back-cow-quest");
    const CONTROL_VEHICLE = UTAG("hogger", "control-vehicle");
    if (player.HasQuest(QUEST_ID)) {
      player.CastSpell(creature, CONTROL_VEHICLE, true);
    } else {
      player.SendAreaTriggerMessage(
        `You cannot ride this cow without the quest "Turn Back Cow".`
      );
    }
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
    creature?.RemoveAura(CONTROL_VEHICLE);
  });

addCreatureSpells(COW_QUEST_OBJECTIVE.ID, [
  { spell: 48594, index: 0 },
  { spell: TURN_BACK_COW_SPELL.ID, index: 1 },
]);

std.SQL.quest_template
  .query({ ID: TURN_BACK_COW_QUEST.ID })
  .ObjectiveText1.set("Turned Back Cow");

console.log(std.Quests.load(279).POIs.objectify());
