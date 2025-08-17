import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { Quest } from "wow/wotlk/std/Quest/Quest";
import { translate } from "../../../utils/translation";
import { THORIN_IRONBEARD } from "../../../npc/elwynn/goldshire/thorin-ironbeard";
import { AreaIDs } from "../../../utils/AreaIDs";

namespace Translation {
  export function english(quest: Quest) {
    quest.Name.enGB
      .set("Get Wolf Meat")
      .ObjectiveText.enGB.set(
        "Collect 8 pieces of Wolf Meat from the wolves around Goldshire."
      )
      .PickupText.enGB.set(
        "The guards here at Goldshire could use some fresh meat for their meals. Hunt down the wolves in the surrounding area and bring me back 8 pieces of wolf meat. They're dangerous creatures, so be careful!"
      )
      .CompleteText.enGB.set(
        "Excellent work! This meat will feed the guards well. Here's a small reward for your efforts."
      )
      .IncompleteText.enGB.set(
        "Have you collected the wolf meat yet? The guards are getting hungry!"
      );
  }
}

const QUEST = std.Quests.create(MODULE_NAME, "get-wolf-meat-elwynn-goldshire");

QUEST.Objectives.Item.add(2672, 8)
  .MinLevel.set(3)
  .QuestLevel.set(7)
  .Rewards.Difficulty.set(4)
  .Questgiver.addCreatureBoth(THORIN_IRONBEARD.ID)
  .AreaSort.set(AreaIDs.ELWYNN)
  .Rewards.Item.add(2680, 5);

translate(QUEST, {
  enGB: Translation.english,
});
