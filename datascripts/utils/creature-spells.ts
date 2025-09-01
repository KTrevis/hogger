import { std } from "wow/wotlk";

export function getCreatureSpells(creatureId: number) {
  const res = std.SQL.creature_template_spell.queryAll({
    CreatureID: creatureId,
  });
  return res.map((row) => row.Spell.get());
}

type CreatureSpell = {
  spell: number;
  index: number;
};

export function addCreatureSpells(creatureId: number, spells: CreatureSpell[]) {
  spells.forEach((spell) => {
    std.SQL.creature_template_spell.add(creatureId, spell.index, {
      Spell: spell.spell,
    });
  });
}
