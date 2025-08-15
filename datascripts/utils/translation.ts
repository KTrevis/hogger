import { Language, Languages } from "wow/data/dbc/Localization";

type TranslationMap<T> = Partial<Record<Language, (item: T) => void>>;

export function translate<T>(item: T, fn: TranslationMap<T>) {
  for (const lang of Languages) {
    fn[lang]?.(item);
  }
}
