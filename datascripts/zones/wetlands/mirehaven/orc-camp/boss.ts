import { std } from "wow/wotlk";
import { INFINITE_DURATION, MODULE_NAME } from "../../../../utils/constants";
import { VisualIDs } from "../../../../utils/enums/visuals";
import { setQuestText } from "../../../../utils/quest-text";
import { MIREHAVEN_MAYOR } from "../town-hall/npcs";
import { MIREHAVEN_BLACKSMITH_QUEST } from "../blacksmith/damaged-weapon.quest";

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

export const MIREHAVEN_ORC_CAMP_BOSS_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-orc-camp-boss-quest"
)
  .Objectives.Entity.add(BOSS.ID, 1)
  .Questgiver.addCreatureBoth(MIREHAVEN_MAYOR.ID)
  .Rewards.Difficulty.DIFFICULTY_5.set()
  .PrevQuest.set(MIREHAVEN_BLACKSMITH_QUEST.ID);

namespace Translation {
  export function english() {
    const TOOLTIP =
      "When this aura reaches 10 stacks, the affected unit will cast an area on the ground.";
    COUNTER_AURA.Name.enGB
      .set("")
      .AuraDescription.enGB.set(TOOLTIP)
      .Description.enGB.set(TOOLTIP);
    BOSS.Name.enGB.set("Treke").Subname.enGB.set("Warlord");

    setQuestText(MIREHAVEN_ORC_CAMP_BOSS_QUEST, "enGB", {
      name: "Orc and Treke Down",
      pickup: `There's an orc in that camp who thinks he's hot stuff—goes by the name of Treke. Calls himself a "warlord", but from what I've seen, he's more “war-snore.” Still, he's got the rest of those green brutes dancing to his drum, and if we don't clip his tusks soon, we'll be knee-deep in orc trouble.

That's where you come in. March into their camp, find Treke, and put him six feet under the dirt he's so proud of stomping on. Do that, and not only will the orcs scatter like rats in daylight, but you'll also have my eternal gratitude—and maybe a little something shiny for your trouble.`,
      completeLog: "Return to Mirehaven.",
      objective: "Slay Treke.",
    });
  }
}

Translation.english();
