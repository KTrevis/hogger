import { std } from "wow/wotlk";
import { Enchantment } from "wow/wotlk/std/Enchant/Enchantment";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { ItemInventoryType } from "wow/wotlk/std/Item/ItemInventoryType";

enum STATS {
  ARMOR = 8,
  STAMINA = 1,
}

const LIGHT_ARMOR_KIT_ENCHANT = std.Enchantments.load(15);
const LIGHT_ARMOR_KIT_SPELL = std.Spells.load(2831);

LIGHT_ARMOR_KIT_ENCHANT.Effects.clearAll()
  .Effects.addMod((eff) => eff.Type.ADD_ARMOR.set().MinArmor.set(STATS.ARMOR))
  .Effects.addMod((eff) =>
    eff.Type.STAT.set().Stat.set("STAMINA").MinStat.set(STATS.STAMINA)
  );

namespace Translation {
  export function english() {
    const TOOLTIP = LIGHT_ARMOR_KIT_SPELL.Description.enGB.get();

    LIGHT_ARMOR_KIT_SPELL.Description.enGB.set(
      `${TOOLTIP} Also increases stamina by ${STATS.STAMINA}.`
    );
    LIGHT_ARMOR_KIT_ENCHANT.Name.enGB.set(
      `Reinforced (+${STATS.ARMOR} Armor, +${STATS.STAMINA} Stamina)`
    );
  }
}

Translation.english();
