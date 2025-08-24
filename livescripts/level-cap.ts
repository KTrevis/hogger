export namespace LevelCap {
  const MAX_LEVEL = 80;
  const LEVEL_TO_APPLY_XP_DEBUFF = MAX_LEVEL - 10;

  function applyDebuffXP(player: TSPlayer) {
    const DEBUFF_ID = UTAG("hogger", "xp-debuff");

    if (player.GetLevel() >= LEVEL_TO_APPLY_XP_DEBUFF) {
      player.AddAura(DEBUFF_ID, player);
    } else {
      player.RemoveAura(DEBUFF_ID);
    }
  }

  function blockXP(player: TSPlayer) {
    if (player.GetLevel() >= MAX_LEVEL) {
      player.SetFlag(UnitFields.PLAYER_FLAGS, PlayerFlags.FLAGS_NO_XP_GAIN);
      player.SetLevel(MAX_LEVEL);
    } else {
      player.RemoveFlag(UnitFields.PLAYER_FLAGS, PlayerFlags.FLAGS_NO_XP_GAIN);
    }
  }

  export function main(events: TSEvents) {
    events.Player.OnLogin((player) => {
      applyDebuffXP(player);
      blockXP(player);
    });

    events.Player.OnLevelChanged((player) => {
      applyDebuffXP(player);
      blockXP(player);
    });

    events.Player.OnReload((player) => {
      applyDebuffXP(player);
      blockXP(player);
    });
  }
}
