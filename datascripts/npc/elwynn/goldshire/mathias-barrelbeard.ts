import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { translate } from "../../../utils/translation";
import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";

namespace Translation {
  export function english(npc: CreatureTemplate) {
    npc.Name.enGB
      .set("Mathias Barrelbeard")
      .Subname.enGB.set("Alchemist & Brewmaster");
  }

  export function french(npc: CreatureTemplate) {
    npc.Name.frFR
      .set("Mathias Barbe-de-Tonneau")
      .Subname.frFR.set("Alchimiste & Maître Brasseur");
  }
}

export const MATHIAS_BARRELBEARD = std.CreatureTemplates.create(
  MODULE_NAME,
  "goldshire-brewer",
  5107
);

MATHIAS_BARRELBEARD.NPCFlags.REPAIRER.set(false)
  .NPCFlags.QUEST_GIVER.set(true)
  .Level.set(15)
  .Spawns.add(MODULE_NAME, "goldshire-alchemist-spawn", {
    map: 0,
    x: -9433.219727,
    y: 90.971046,
    z: 57.030617,
    o: 5.147066,
  })
  .NPCFlags.PROFESSION_TRAINER.set(true);

translate(MATHIAS_BARRELBEARD, {
  enGB: Translation.english,
  frFR: Translation.french,
});
