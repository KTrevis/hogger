import { Language } from "wow/data/dbc/Localization";
import { Quest } from "wow/wotlk/std/Quest/Quest";

export function setQuestText(
  quest: Quest,
  lang: Language,
  data: {
    name: string;
    pickup: string;
    completeLog: string;
    objective: string;
    incomplete?: string;
    complete?: string;
  }
) {
  quest.PickupText[lang]
    .set(data.pickup)
    .Name[lang].set(data.name)
    .CompleteLogText[lang].set(data.completeLog)
    .ObjectiveText[lang].set(data.objective)
    .IncompleteText[lang].set(data.incomplete ?? "")
    .CompleteText[lang].set(data.complete ?? "");
}
