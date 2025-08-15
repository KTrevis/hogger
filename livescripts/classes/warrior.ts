export namespace WarriorEvents {
  function victoryRushHealing(events: TSEvents) {
    const VICTORY_RUSH_ID = 34428;
    events.Spell.OnCast(VICTORY_RUSH_ID, (spell) => {
      const player = ToPlayer(spell.GetCaster());
      const flagID = UTAG("hogger", "victory-rush-healing-flag");
      const healing20PctID = UTAG("hogger", "victory-rush-healing-20-pct");

      if (!player || !player.HasAura(flagID)) {
        return;
      }
      player.CastSpell(player, healing20PctID, true);
    });
  }

  export function main(events: TSEvents) {
    victoryRushHealing(events);
  }
}
