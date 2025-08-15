import { Language, Languages } from "wow/data/dbc/Localization";
import { Spell } from "wow/wotlk/std/Spell/Spell";

type TranslationMap = Partial<Record<Language, (spell: Spell) => void>>;

export function translate(spell: Spell, fn: TranslationMap) {
  for (const lang of Languages) {
    fn[lang]?.(spell);
  }
}
