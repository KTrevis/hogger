import { std } from "wow/wotlk";
import { MODULE_NAME } from "./utils/constants";
import { addCreatureSpells } from "./utils/creature-spells";

const WINTERGRASP_CANNON = std.CreatureTemplates.load(28366);

const CANNON_VEHICLE = std.Vehicles.create(
  WINTERGRASP_CANNON.Vehicle.get()
).FacingLimit.set(0, 0);

const CANNON_SCRATCH = std.CreatureTemplates.create(
  MODULE_NAME,
  "tower-cannon-scratch",
  WINTERGRASP_CANNON.ID
)
  .Name.enGB.set("Tower Cannon (Scratch)")
  .NPCFlags.GOSSIP.set(true)
  .Vehicle.set(CANNON_VEHICLE.ID)
  .InlineScripts.OnGossipHello((creature, player, cancel) => {
    cancel.set(true);
    player.CastSpell(creature, 60962, true);
  });

addCreatureSpells(CANNON_SCRATCH.ID, [
  { spell: 51421, index: 0 },
  { spell: 50672, index: 1 },
]);
