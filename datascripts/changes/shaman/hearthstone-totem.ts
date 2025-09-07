import { Languages } from "wow/data/dbc/Localization";
import { std } from "wow/wotlk";

const EVERY_SHAMAN_TOTEM = 21;

const EARTHEN_RING_TOTEM = std.Items.load(46978);

const HEARTHSTONE = std.Items.load(6948).TotemCategory.set(EVERY_SHAMAN_TOTEM);

for (const lang of Languages) {
  HEARTHSTONE.Description[lang].set(EARTHEN_RING_TOTEM.Description[lang].get());
}
