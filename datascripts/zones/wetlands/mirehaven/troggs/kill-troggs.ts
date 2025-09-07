import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../../utils/constants";
import { MIREHAVEN_TROGG } from "./npcs";
import { AreaIDs } from "../../../../utils/enums/area-ids";
import { QuestObjectiveTypes } from "../../../../utils/enums/quest-objective-types";
import { WorldMapAreaIDs } from "../../../../utils/enums/world-map-area";
import { setQuestText } from "../../../../utils/quest-text";
import { MIREHAVEN_ORC_CAMP_BOSS_QUEST } from "../orc-camp/boss";
import { MIREHAVEN_MILITARY_BOSS } from "../military/npcs";
import { MapInstanceTypee } from "wow/wotlk/std/Map/Map";

export const MIREHAVEN_TROGG_KILL_QUEST = std.Quests.create(
  MODULE_NAME,
  "mirehaven-trogg-kill-quest"
)
  .Objectives.Entity.add(MIREHAVEN_TROGG.ID, 8)
  .Rewards.Difficulty.DIFFICULTY_5.set()
  .MinLevel.set(20)
  .QuestLevel.set(25)
  .Rewards.Difficulty.DIFFICULTY_5.set()
  .AreaSort.set(AreaIDs.WETLANDS)
  .POIs.add(0, [
    { map: 0, x: -3972.253662, y: -1510.957153, z: 169.218094, o: 1.649272 },
    { map: 0, x: -4097.52832, y: -1032.7229, z: 221.973663, o: 1.751374 },
    { map: 0, x: -4313.427246, y: -1473.915527, z: 192.70343, o: 1.963434 },
  ])
  .POIs.forEach((poi) => poi.WorldMapArea.set(WorldMapAreaIDs.WETLANDS))
  .Questgiver.addCreatureBoth(MIREHAVEN_MILITARY_BOSS.ID)
  .PrevQuest.set(MIREHAVEN_ORC_CAMP_BOSS_QUEST.ID);

namespace Translation {
  export function english() {
    setQuestText(MIREHAVEN_TROGG_KILL_QUEST, "enGB", {
      name: "Trogged Down",
      pickup: `Those stinking troggs have been crawling out of that cave like maggots on a spoiled ham, and I'm sick of it! They're noisy, they stink worse than a goblin's sock drawer, and—worst of all—they keep trying to chew on my boots.

I need you to go in there and thin their ranks. Smash a few skulls, bash a few bellies, and make sure they get the message: this is our mountain, not theirs!

Bring me back proof of your work—something troggy enough to show you did the job. Teeth, ears, toenails... I don't care, as long as it once belonged to a trogg.`,
      completeLog: "Return tu Mirehaven.",
      objective: "Kill 8 troggs.",
    });
  }
}

Translation.english();