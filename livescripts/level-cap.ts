export namespace LevelCap {
  const MAX_LEVEL = 10;

  function applyDebuffXP(player: TSPlayer) {
    const debuffID = UTAG("hogger", "xp-debuff");
    const levelToApplyDebuff = MAX_LEVEL - 10;

    if (player.GetLevel() >= levelToApplyDebuff) {
      player.AddAura(debuffID, player);
    } else {
      player.RemoveAura(debuffID);
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
  }
}
