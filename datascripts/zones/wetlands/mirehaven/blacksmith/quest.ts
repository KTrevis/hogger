import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { MIREHAVEN_WOOD_BUNDLE } from "../loot-wood/quest";
import { MIREHAVEN_REPAIRER } from "./repairer";

export const MIREHAVEN_BLACKSMITH_QUEST_ITEM = std.Items.create(
  MODULE_NAME,
  "mirehaven-blacksmith-quest-item",
  MIREHAVEN_WOOD_BUNDLE.ID
)
  .Name.enGB.set("Orcish Bastard Weapon")
  .DisplayInfo.setSimpleIcon(
    MODULE_NAME,
    "mirehaven-blacksmith-quest-item-icon",
    "inv_weapon_shortblade_07"
  );

export const MIREHAVEN_BLACKSMITH_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-blacksmith-quest"
)
  .Objectives.Item.add(MIREHAVEN_BLACKSMITH_QUEST_ITEM.ID, 4)
  .Name.enGB.set("PLACEHOLDER: Mirehaven Blacksmith Quest")
  .Questgiver.addCreatureBoth(MIREHAVEN_REPAIRER.ID)
  .MinLevel.set(20)
  .QuestLevel.set(25)
  .Rewards.Difficulty.DIFFICULTY_5.set();
