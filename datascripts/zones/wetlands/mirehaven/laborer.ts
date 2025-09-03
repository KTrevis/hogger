import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { EmoteIds } from "../../../utils/enums/emote-ids";

const LABORER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-laborer",
  2582
)
  .Name.enGB.set("Mirehaven Laborer")
  .Spawns.add(
    MODULE_NAME,
    "mirehaven-laborer-spawn",
    [
      { map: 0, x: -3681.934082, y: -2258.098877, z: 166.371536, o: 4.808946 },
      { map: 0, x: -3685.467773, y: -2279.67334, z: 166.371536, o: 4.435884 },
      { map: 0, x: -3703.876465, y: -2277.619873, z: 166.371536, o: 4.035331 },
      { map: 0, x: -3695.865723, y: -2296.508301, z: 166.371536, o: 1.533833 },
    ],
    (spawn) => spawn.MovementType.IDLE.set().EquipmentID.set(1).Emote.set(0)
  )
  .Weapons.add(1195)
  .InlineScripts.OnCreate((creature) => {
    const TIME = Math.random() * 1000;
    creature.AddTimer(Math.random() * 2000, 1, 0, (owner) => {
      const creature = ToCreature(owner);
      creature?.EmoteState(173);
    });
  });
