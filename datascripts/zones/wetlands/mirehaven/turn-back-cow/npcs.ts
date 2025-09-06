import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { HORSE_VEHICLE_MOUNT_NPC } from "../../../../transports/vehicles/horse-vehicle-mount";
import { addCreatureSpells } from "../../../../utils/creature-spells";
import { TURN_BACK_COW_SPELL } from "./spell";
import { COW_VEHICULE } from "./vehicle";
import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";
import { translate } from "../../../../utils/translation";

const COW_SPAWNS = [
  { map: 0, x: -3819.753906, y: -2113.562256, z: 166.218063, o: 2.971061 },
  { map: 0, x: -3862.537109, y: -2116.595947, z: 165.864105, o: 3.642576 },
  { map: 0, x: -3906.225098, y: -2099.960693, z: 166.522995, o: 2.1621 },
  { map: 0, x: -3909.242676, y: -2065.616455, z: 162.139648, o: 1.427753 },
  { map: 0, x: -3893.536621, y: -2020.925293, z: 145.241013, o: 0.363538 },
  { map: 0, x: -3861.19458, y: -2027.241211, z: 149.63504, o: 6.081237 },
  { map: 0, x: -3844.47168, y: -2005.293701, z: 142.669418, o: 0.135772 },
  { map: 0, x: -3799.462158, y: -2024.803223, z: 152.357101, o: 0.006183 },
  { map: 0, x: -3762.760254, y: -2003.015503, z: 156.904846, o: 0.689479 },
  { map: 0, x: -3730.360596, y: -1982.716675, z: 165.354706, o: 0.756238 },
  { map: 0, x: -3662.721924, y: -1978.711792, z: 166.595825, o: 6.155851 },
  { map: 0, x: -3643.450928, y: -1925.764893, z: 165.478683, o: 1.573053 },
  { map: 0, x: -3658.575928, y: -1873.130493, z: 165.094803, o: 2.319182 },
  { map: 0, x: -3737.604004, y: -1912.733643, z: 168.948288, o: 2.008953 },
  { map: 0, x: -3816.547119, y: -2050.272461, z: 155.498978, o: 4.00386 },
];

export const COW_QUEST_OBJECTIVE = std.CreatureTemplates.create(
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

addCreatureSpells(COW_QUEST_OBJECTIVE.ID, [
  { spell: 48594, index: 0 },
  { spell: TURN_BACK_COW_SPELL.ID, index: 1 },
]);

namespace Translation {
  export function english() {
    COW_QUEST_OBJECTIVE.Name.enGB.set("Mirehaven Cow");
  }
}

translate({
  enGB: Translation.english,
});
