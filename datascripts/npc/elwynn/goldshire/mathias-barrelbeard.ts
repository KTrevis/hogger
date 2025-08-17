import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { translate } from "../../../utils/translation";
import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";

namespace Translation {
  export function english(npc: CreatureTemplate) {
    npc.Name.enGB
      .set("Mathias Barrelbeard")
      .Subname.enGB.set("Herbalism Trainer");
  }

  export function french(npc: CreatureTemplate) {
    npc.Name.frFR
      .set("Mathias Barbe-de-Tonneau")
      .Subname.frFR.set("Instructeur d'Herboristerie");
  }
}

export const MATHIAS_BARRELBEARD = std.CreatureTemplates.create(
  MODULE_NAME,
  "mathias-barrelbeard-goldshire",
  5107
);

MATHIAS_BARRELBEARD.NPCFlags.REPAIRER.set(false)
  .NPCFlags.GOSSIP.set(true)
  .NPCFlags.QUEST_GIVER.set(true)
  .NPCFlags.TRAINER.set(true)
  .NPCFlags.PROFESSION_TRAINER.set(true)
  .NPCFlags.REPAIRER.set(false)
  .NPCFlags.VENDOR.set(false)
  .Icon.setTrainer()
  .Level.set(15)
  .Spawns.add(MODULE_NAME, "goldshire-alchemist-spawn", {
    map: 0,
    x: -9433.219727,
    y: 90.971046,
    z: 57.030617,
    o: 5.147066,
  })
  .Trainer.modRef((trainer) => {
    const herbalismProfession = std.Professions.load(182);
    herbalismProfession.addToTrainer(trainer, "Apprentice", 0, 100, 5);
  });

translate(MATHIAS_BARRELBEARD, {
  enGB: Translation.english,
  frFR: Translation.french,
});
