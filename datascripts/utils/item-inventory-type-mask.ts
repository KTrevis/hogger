import { ItemInventoryType } from "wow/wotlk/std/Item/ItemInventoryType";
import { getEnumKeysAndValues } from "./enums";

function generateEnum() {
  const { keys, values } = getEnumKeysAndValues(ItemInventoryType);

  return keys.reduce((acc, curr, i) => {
    acc[curr] = 1 << values[i];
    return acc;
  }, {} as Record<keyof typeof ItemInventoryType, number>);
}

export const ItemInventoryTypeMask = generateEnum();
