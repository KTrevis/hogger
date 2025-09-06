import { std } from "wow/wotlk";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { MODULE_NAME } from "../../utils/constants";
import { translate } from "../../utils/translation";

const LAVA_BURST = std.Spells.load(51505);

export const INSTANT_LAVABURST = std.Spells.create(
  MODULE_NAME,
  "instant-lava-burst-aura"
);

INSTANT_LAVABURST.Duration.setSimple(8 * 1000)
  .Icon.set(LAVA_BURST.Icon.get())
  .Family.set(LAVA_BURST.Family.get())
  .Effects.addMod((eff) =>
    eff.Type.APPLY_AURA.set()
      .ClassMask.B.set(LAVA_BURST.ClassMask.B.get())
      .Aura.ADD_PCT_MODIFIER.set()
      .Operation.CASTING_TIME.set()
      .PercentBase.set(-999)
      .ImplicitTargetA.UNIT_CASTER.set()
  )
  .Effects.addMod((eff) =>
    eff.Type.APPLY_AURA.set()
      .ClassMask.B.set(LAVA_BURST.ClassMask.B.get())
      .Aura.ADD_PCT_MODIFIER.set()
      .Operation.COST.set()
      .PercentBase.set(-999)
      .ImplicitTargetA.UNIT_CASTER.set()
  )
  .InlineScripts.OnApply((eff) => {
    const player = ToPlayer(eff.GetCaster());
    if (!player) {
      return;
    }
    const LAVABURST_IDS = [51505, 60043];
    for (const id of LAVABURST_IDS) {
      player.ResetCooldown(id);
    }
  })
  .Proc.mod((proc) =>
    proc.SpellFamily.set(LAVA_BURST.Family.get())
      .ClassMask.B.set(LAVA_BURST.ClassMask.B.get())
      .TriggerMask.DONE_PERIODIC.set(true)
      .PhaseMask.HIT.set(true)
  )
  .InlineScripts.OnProc((application) => application.GetAura().Remove());

namespace Translation {
  export function english() {
    const TOOLTIP = "Your Lava Burst is instant and costs no mana.";
    INSTANT_LAVABURST.AuraDescription.enGB
      .set(TOOLTIP)
      .Description.enGB.set(TOOLTIP)
      .Name.enGB.set("Instant Lava Burst");
  }
}

translate({
  enGB: Translation.english,
});
