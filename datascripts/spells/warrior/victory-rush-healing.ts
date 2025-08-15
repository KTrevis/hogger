import { Spell } from "wow/wotlk/std/Spell/Spell";
import { MODULE_NAME } from "../../utils/constants";
import { CreatorHelper } from "../../utils/creator-helper";
import { translate } from "../../utils/translation";

export const VICTORY_RUSH_FLAG_TRIGGER_ON_KILL = CreatorHelper.createSpell(
  "victory-rush-healing-legendary-passive",
  33746
);

const HEALING_FLAG = CreatorHelper.createSpell("victory-rush-healing-flag");

HEALING_FLAG.Tags.addUnique(MODULE_NAME, "victory-rush-healing-flag")
  .Attributes.HIDE_FROM_AURA_BAR.set(true)
  .Cooldown.Time.set(0)
  .Duration.setSimple(20 * 1000)
  .Effects.get(0)
  .Type.APPLY_AURA.set()
  .Aura.DUMMY.set();

VICTORY_RUSH_FLAG_TRIGGER_ON_KILL.Proc.getSQL().Cooldown.set(0);

VICTORY_RUSH_FLAG_TRIGGER_ON_KILL.Effects.get(0)
  .Type.APPLY_AURA.set()
  .Aura.PROC_TRIGGER_SPELL.set()
  .TriggeredSpell.set(HEALING_FLAG.ID);

namespace Translation {
  export function english(spell: Spell) {
    spell.Description.enGB.set(
      "Using Victory Rush heals you for 20% of your maximum health."
    );
  }
}

translate(VICTORY_RUSH_FLAG_TRIGGER_ON_KILL, {
  enGB: Translation.english,
});
