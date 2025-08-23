import { std } from "wow/wotlk";
import { Enchantment } from "wow/wotlk/std/Enchant/Enchantment";
import { translate } from "../../../utils/translation";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { ItemInventoryType } from "wow/wotlk/std/Item/ItemInventoryType";

enum STATS {
  ARMOR = 8,
  STAMINA = 1,
}

const LIGHT_ARMOR_KIT_ENCHANT = std.Enchantments.load(15);

LIGHT_ARMOR_KIT_ENCHANT.Effects.clearAll();
LIGHT_ARMOR_KIT_ENCHANT.Effects.addMod((eff) =>
  eff.Type.ADD_ARMOR.set().MinArmor.set(STATS.ARMOR)
).Effects.addMod((eff) =>
  eff.Type.STAT.set().Stat.set("STAMINA").MinStat.set(STATS.STAMINA)
);
ItemInventoryType

console.log([5, 7, 8, 10, 20].reduce((m, i) => m | (1 << i), 0));

namespace EnchantTranslation {
  export function english(enchant: Enchantment) {
    enchant.Name.enGB.set(
      `Reinforced (+${STATS.ARMOR} Armor, +${STATS.STAMINA} Stamina)`
    );
  }
}

translate(LIGHT_ARMOR_KIT_ENCHANT, {
  enGB: EnchantTranslation.english,
});

const LIGHT_ARMOR_KIT_SPELL = std.Spells.load(2831);

namespace SpellTranslation {
  export function english(spell: Spell) {
    const TOOLTIP = spell.Description.enGB.get();
    spell.Description.enGB.set(
      `${TOOLTIP} Also increases stamina by ${STATS.STAMINA}.`
    );
  }
}

translate(LIGHT_ARMOR_KIT_SPELL, {
  enGB: SpellTranslation.english,
});
