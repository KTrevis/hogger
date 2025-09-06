import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";
import { translate } from "../../../../utils/translation";

const MIREHAVEN_INN_KEEPER = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-inn-keeper",
  6778
)
  .Spawns.add(MODULE_NAME, "mirehaven-inn-keeper-spawn", {
    map: 0,
    x: -3662.709961,
    y: -2207.705811,
    z: 167.099106,
    o: 1.557332,
  })
  .NPCFlags.INNKEEPER.set(true);

namespace Translation {
  export function english() {
    MIREHAVEN_INN_KEEPER.Subname.enGB.set("Innkeeper");
  }
}

translate({
  enGB: Translation.english,
});
