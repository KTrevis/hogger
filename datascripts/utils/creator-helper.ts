import { std } from "wow/wotlk";
import { MODULE_NAME } from "./constants";

export class CreatorHelper {
  static createSpell(name: string, id?: number) {
    return std.Spells.create(MODULE_NAME, name, id);
  }

  static createItem(name: string, id?: number) {
    return std.Items.create(MODULE_NAME, name, id);
  }
}
