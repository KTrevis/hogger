import { std } from "wow/wotlk";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { MODULE_NAME } from "../../utils/constants";
import { translate } from "../../utils/translation";

const LAVA_BURST = std.Spells.load(51505);

const INSTANT_LAVABURST = std.Spells.create(
  MODULE_NAME,
  "instant-lava-burst-aura",
  57761
);

INSTANT_LAVABURST.Name.enGB
  .set("Instant Lava Burst")
  .Duration.setSimple(8 * 1000)
  .Icon.set(LAVA_BURST.Icon.get())
  .Attributes.IS_PASSIVE.set(true);

INSTANT_LAVABURST.Family.set(LAVA_BURST.Family.get());
INSTANT_LAVABURST.Effects.get(0).ClassMask.A.set(LAVA_BURST.ClassMask.A.get());
INSTANT_LAVABURST.Effects.get(1).ClassMask.A.set(LAVA_BURST.ClassMask.A.get());

namespace Translation {
  export function english(spell: Spell) {
    const TOOLTIP = "Your Lava Burst is instant and does not cost mana.";
    spell.AuraDescription.enGB.set(TOOLTIP);
    spell.Description.enGB.set(TOOLTIP);
  }
}

translate(INSTANT_LAVABURST, {
  enGB: Translation.english,
});
