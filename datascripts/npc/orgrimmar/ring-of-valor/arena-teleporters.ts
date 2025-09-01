import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { GameObjectDisplayId } from "../../../utils/gameobject-display-id";
import { GameObjectGoober } from "wow/wotlk/std/GameObject/GameObjectTemplate";
import { translate } from "../../../utils/translation";
import { AreaIDs } from "../../../utils/area-ids";

namespace Translation {
  export function english(go: GameObjectGoober) {
    go.Name.enGB.set("Goblin Teleporter");
  }
}

const TP_IN = std.GameObjectTemplates.Goobers.create(
  MODULE_NAME,
  "ring-of-valor-tp-in-go",
  180911
)
  .Spawns.add(MODULE_NAME, "ring-of-valor-tp-in-go-spawn", {
    map: 1,
    x: 2143.407471,
    y: -4742.138184,
    z: 72.826974,
    o: 0.935632,
  })
  .Spell.set(0)
  .Display.set(GameObjectDisplayId.GOBLIN_TELEPORTER);

TP_IN.InlineScripts.OnGossipHello((_, player) =>
  player.Teleport(1, 2169.14624, -4801.341797, 55.138973, 1.264487)
);

translate(TP_IN, {
  enGB: Translation.english,
});

const TP_OUT = std.GameObjectTemplates.Goobers.create(
  MODULE_NAME,
  "ring-of-valor-tp-out-go",
  TP_IN.ID
)
  .Spawns.add(MODULE_NAME, "ring-of-valor-tp-out-go-spawn", {
    map: 1,
    x: 2208.81543,
    y: -4739.516602,
    z: 55.138973,
    o: 3.840594,
  })
  .InlineScripts.OnGossipHello((_, player) => {
    if (player.IsInCombat()) {
      player.SendAreaTriggerMessage(
        "You cannot use this teleporter while in combat."
      );
    }
    player.Teleport(1, 2142.951904, -4742.124512, 73.5, 5.573409);
  });
