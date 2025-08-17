import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { Quest } from "wow/wotlk/std/Quest/Quest";
import { translate } from "../../../utils/translation";
import { BOAR_MEAT_QUEST_GIVER } from "../../../npc/elwynn/northshire/boar-meat-quest-giver";
import { AreaIDs } from "../../../utils/AreaIDs";

namespace Translation {
  export function english(quest: Quest) {
    quest.Name.enGB
      .set("Get Boar Meat")
      .ObjectiveText.enGB.set(
        "Collect 8 pieces of Boar Meat from the boars around Goldshire."
      )
      .PickupText.enGB.set(
        "The guards here at Goldshire could use some fresh meat for their meals. Hunt down the boars in the surrounding area and bring me back 8 pieces of boar meat. They're dangerous creatures, so be careful!"
      )
      .CompleteText.enGB.set(
        "Excellent work! This meat will feed the guards well. Here's a small reward for your efforts."
      )
      .IncompleteText.enGB.set(
        "Have you collected the boar meat yet? The guards are getting hungry!"
      );
  }
}

const QUEST = std.Quests.create(MODULE_NAME, "get-boar-meat-elwynn-goldshire");

QUEST.Objectives.Item.add(769, 8)
  .MinLevel.set(3)
  .QuestLevel.set(7)
  .Rewards.Difficulty.set(4)
  .Questgiver.addCreatureBoth(BOAR_MEAT_QUEST_GIVER.ID)
  .AreaSort.set(AreaIDs.ELWYNN);

translate(QUEST, {
  enGB: Translation.english,
});
