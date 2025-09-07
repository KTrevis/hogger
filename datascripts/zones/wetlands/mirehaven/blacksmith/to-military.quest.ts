import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { MIREHAVEN_BLACKSMITH_QUEST } from "./damaged-weapon.quest";
import { MIREHAVEN_REPAIRER } from "./repairer";
import { MIREHAVEN_MILITARY_BOSS } from "../military/npcs";
import { setQuestText } from "../../../../utils/quest-text";

export const MIREHAVEN_TO_MILITARY_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-to-military-quest"
)
  .PrevQuest.set(MIREHAVEN_BLACKSMITH_QUEST.ID)
  .Questgiver.addCreatureStarter(MIREHAVEN_REPAIRER.ID)
  .Questgiver.addCreatureEnder(MIREHAVEN_MILITARY_BOSS.ID);

function english() {
  setQuestText(MIREHAVEN_TO_MILITARY_QUEST, "enGB", {
    name: "Military Promotion",
    objective: `Speak to ${MIREHAVEN_MILITARY_BOSS.Name.enGB.get()}`,
    pickup: `You've done more than swing a blade—you've proven yourself. Bringing back weapons straight from the orc camp? That takes guts, brains, and maybe a sprinkle of luck. The higher-ups have noticed, and they don't hand out recognition easily.

The military building is calling your name. The commanders there want to see what kind of soldier snatched steel right out from under the orcs' noses. Head over, report in, and stand tall—you've earned this.`,
    completeLog: `Speak to ${MIREHAVEN_MILITARY_BOSS.Name.enGB.get()}`,
  });
}

english();
