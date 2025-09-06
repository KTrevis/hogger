import { std } from "wow/wotlk";
import { INFINITE_DURATION, MODULE_NAME } from "../../../../utils/constants";
import { VisualIDs } from "../../../../utils/enums/visuals";
import { translate } from "../../../../utils/translation";

const COUNTER_AURA = std.Spells.create(
  MODULE_NAME,
  "mirehaven-orc-camp-counter-aura"
)
  .Duration.set(INFINITE_DURATION)
  .Effects.addMod((eff) => eff.Type.APPLY_AURA.set().Aura.DUMMY.set())
  .Tags.addUnique(MODULE_NAME, "mirehaven-orc-camp-boss-counter-aura")
  .Stacks.set(10)
  .InlineScripts.OnApply((effect) => {
    const FLAMESTRIKE_ID = UTAG(
      "hogger",
      "mirehaven-orc-camp-boss-flamestrike-clone"
    );
    const aura = effect.GetAura();
    const caster = ToCreature(effect.GetCaster());
    const stacks = aura.GetStackAmount();

    if (!caster) {
      return;
    }
    if (stacks === 10) {
      caster.CastSpell(caster, FLAMESTRIKE_ID, true);
      aura.SetStackAmount(1);
    }
  });

const MIREHAVEN_ORC_CAMP_BOSS_AOE = std.Spells.create(
  MODULE_NAME,
  "mirehaven-orc-camp-boss-flamestrike-clone"
)
  .Duration.setSimple(60 * 1000)
  .Name.enGB.set("Mirehaven Orc Camp Flamestrike")
  .Tags.addUnique(MODULE_NAME, "mirehaven-orc-camp-boss-flamestrike-clone")
  .Effects.addMod((eff) =>
    eff.Type.PERSISTENT_AREA_AURA.set()
      .Aura.PERIODIC_DAMAGE.set()
      .DamagePeriod.set(1000)
      .DamageBase.set(50)
      .Radius.setSimple(8)
      .ImplicitTargetA.DEST_DYNOBJ_ENEMY.set()
  )
  .Visual.set(VisualIDs.BLACK_CIRCLE)
  .Duration.setSimple(30 * 1000);

const BOSS = std.CreatureTemplates.create(
  MODULE_NAME,
  "mirehaven-orc-camp-boss",
  1034
)
  .Level.set(25, 25)
  .Rank.set("ELITE")
  .Spawns.add(MODULE_NAME, "mirehaven-orc-camp-boss-spawn", {
    map: 0,
    x: -3612.258545,
    y: -1685.303101,
    z: 158.655289,
    o: 2.837557,
  })
  .Stats.HealthMod.set(2)
  .InlineScripts.OnJustEnteredCombat((creature, target) => {
    creature.AddNamedTimer("mirehaven-orc-camp-boss", 1000, -1, 0, (owner) => {
      const COUNTER_AURA_ID = UTAG(
        "hogger",
        "mirehaven-orc-camp-boss-counter-aura"
      );
      const creature = ToCreature(owner);
      if (creature?.IsNull() || !creature) {
        return;
      }
      creature.AddAura(COUNTER_AURA_ID, creature);
    });
  })
  .InlineScripts.OnReachedHome((creature) => {
    const COUNTER_AURA_ID = UTAG(
      "hogger",
      "mirehaven-orc-camp-boss-counter-aura"
    );
    creature.RemoveAura(COUNTER_AURA_ID);
    creature.AddAura(COUNTER_AURA_ID, creature);
    creature.RemoveTimer("mirehaven-orc-camp-boss");
  })
  .InlineScripts.OnCreate((creature) => {
    const COUNTER_AURA_ID = UTAG(
      "hogger",
      "mirehaven-orc-camp-boss-counter-aura"
    );
    creature.AddAura(COUNTER_AURA_ID, creature);
  });

namespace Translation {
  export function english() {
    const TOOLTIP =
      "When this aura reaches 10 stacks, the affected unit will cast an area on the ground.";
    COUNTER_AURA.Name.enGB
      .set("")
      .AuraDescription.enGB.set(TOOLTIP)
      .Description.enGB.set(TOOLTIP);
  }
}

translate({
  enGB: Translation.english,
});
