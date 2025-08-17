import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { translate } from "../../../utils/translation";
import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";

namespace Translation {
  export function english(npc: CreatureTemplate) {
    npc.Name.enGB.set("Thorin Ironbeard").Subname.enGB.set("Ironforge Cook");
  }

  export function french(npc: CreatureTemplate) {
    npc.Name.frFR
      .set("Thorin Fer-de-Fer")
      .Subname.frFR.set("Cuisinier d'Ironforge");
  }
}

export const THORIN_IRONBEARD = std.CreatureTemplates.create(
  MODULE_NAME,
  "thorin-ironbeard-northshire",
  713
)
  .Name.enGB.set("Thorin Ironbeard")
  .Level.set(10)
  .Spawns.add(MODULE_NAME, "boar-meat-quest-giver-northshire", {
    map: 0,
    x: -9429.727539,
    y: 92.592346,
    z: 57.183064,
    o: 5.147066,
  });

translate(THORIN_IRONBEARD, {
  enGB: Translation.english,
  frFR: Translation.french,
});

std.GameObjectTemplates.Generic.load(186682).Spawns.add(
  MODULE_NAME,
  "boar-meat-quest-giver-northshire",
  { map: 0, x: -9432.554688, y: 92.998688, z: 57.103741, o: 5.174561 }
);
