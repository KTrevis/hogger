import { Language, Languages } from "wow/data/dbc/Localization";

type TranslationMap<T> = Partial<Record<Language, () => void>>;

export function translate<T>(fn: TranslationMap<T>) {
  for (const lang of Languages) {
    fn[lang]?.();
  }
}
