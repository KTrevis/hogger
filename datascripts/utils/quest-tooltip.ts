import { std } from "wow/wotlk";

export function addQuestItemToCreatureTooltip(
  creatureId: number,
  itemId: number,
  index: number
) {
  std.SQL.creature_questitem.add(creatureId, index, {
    ItemId: itemId,
    CreatureEntry: creatureId,
    Idx: index,
  });
}
