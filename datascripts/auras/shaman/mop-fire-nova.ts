import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../utils/constants";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { translate } from "../../utils/translation";

const LIGHTNING_SHIELD = std.Spells.load(324);

const FIRE_NOVA_VISUAL = std.Spells.create(
  MODULE_NAME,
  "fire-nova-visual",
  8349
)
  .Effects.clearAll()
  .Tags.addUnique("hogger", "fire-nova-visual")
  .Name.enGB.set("Fire Nova Visual");

const MOP_FIRE_NOVA = std.Spells.create(MODULE_NAME, "mop-fire-nova")
  .Icon.setPath("ability_warlock_fireandbrimstone")
  .Effects.clearAll()
  .Range.setSimple(0, 40)
  .TargetType.UNIT_ENEMY.set(true)
  .Cooldown.mod((x) =>
    x.GlobalCategory.set(
      LIGHTNING_SHIELD.Cooldown.GlobalCategory.get()
    ).GlobalTime.set(LIGHTNING_SHIELD.Cooldown.GlobalTime.get())
  )
  .SkillLines.add(LIGHTNING_SHIELD.SkillLines.get()[0].SkillLine.get())
  .InlineScripts.OnCheckCast((spell, result) => {
    const FLAME_SHOCK_IDS: uint32[] = [
      8050, 8052, 8053, 10447, 10448, 29228, 25457, 49232, 49233,
    ];
    const target = ToCreature(spell.GetTarget());
    if (!target) {
      result.set(SpellCastResult.FAILED_NO_VALID_TARGETS);
      return;
    }
    for (const id of FLAME_SHOCK_IDS) {
      if (target.HasAura(id)) {
        return;
      }
    }
    result.set(SpellCastResult.FAILED_NO_VALID_TARGETS);
  })
  .InlineScripts.OnCast((spell) => {
    const VISUAL_ID = UTAG("hogger", "fire-nova-visual");
    const player = ToPlayer(spell.GetCaster());
    const target = ToCreature(spell.GetTarget());

    if (!player || !target) {
      return;
    }
    const FLAME_SHOCK_IDS: uint32[] = [
      8050, 8052, 8053, 10447, 10448, 29228, 25457, 49232, 49233,
    ];
    let auraFound: uint32 = 0;

    for (const id of FLAME_SHOCK_IDS) {
      if (target.HasAura(id)) {
        auraFound = id;
        break;
      }
    }
    if (auraFound == 0) {
      return;
    }
    const units = target.GetUnitsInRange(10, 0, 0);

    for (const unit of units) {
      if (unit == player || unit.IsFriendlyTo(player)) {
        continue;
      }
      player.AddAura(auraFound, unit);
      const pos = unit.GetPosition();
      unit.CastSpellAoF(pos.x, pos.y, pos.z, VISUAL_ID);
    }
  });

namespace Translation {
  export function english() {
    MOP_FIRE_NOVA.Name.enGB
      .set("Searing Spread")
      .Description.enGB.set(
        "If your target has an active Flame Shock, it will be spread to all enemies in a 10 yard radius."
      );
  }
}

translate({
  enGB: Translation.english,
});
