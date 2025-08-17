import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { translate } from "../../../utils/translation";

namespace Translation {
  export function english(npc: any) {
    npc.Name.enGB.set("Thorin Ironbeard");
    npc.Subname.enGB.set("Ironforge Chef");
  }
}

export const BOAR_MEAT_QUEST_GIVER = std.CreatureTemplates.create(
  MODULE_NAME,
  "thorin-ironbeard-northshire",
  713
)
  .Name.enGB.set("Thorin Ironbeard")
  .Level.set(10)
  .Spawns.add(MODULE_NAME, "boar-meat-quest-giver-northshire", {
    map: 0,
    x: -9439.266602,
    y: 91.712776,
    z: 57.465523,
    o: 5.26604,
  });

translate(BOAR_MEAT_QUEST_GIVER, {
  enGB: Translation.english,
});

std.GameObjectTemplates.Generic.load(201868).Spawns.add(
  MODULE_NAME,
  "boar-meat-quest-giver-northshire",
  { map: 0, x: -9439.317383, y: 91.639168, z: 57.47163, o: 5.347752 }
);
