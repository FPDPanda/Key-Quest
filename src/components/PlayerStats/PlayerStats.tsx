import React, { FC } from "react";
import {
  PlayerStatsStatImage,
  PlayerStatsStatText,
  PlayerStatsTitleArea,
  PlayerStatsTitleText,
  PlayerStatsWrapper,
} from "./PlayerStats.styled";
import playerFeature from "../../features/Player";

interface PlayerStatsProps {}

const PlayerStats: FC<PlayerStatsProps> = function () {
  const player = playerFeature.getPlayer();

  return (
    <PlayerStatsWrapper>
      <PlayerStatsTitleArea>
        <PlayerStatsTitleText>Stats</PlayerStatsTitleText>
      </PlayerStatsTitleArea>
      <PlayerStatsStatImage
        $gridArea="healthImg"
        src="./images/icons/heart.png"
      />
      <PlayerStatsStatText $gridArea="healthText" color="black">
        {player.stats.currentHealth}/{player.stats.maxHealth}
      </PlayerStatsStatText>
      <PlayerStatsStatImage
        $gridArea="coinsImg"
        src="./images/icons/coins.png"
      />
      <PlayerStatsStatText $gridArea="coinsText" color="gold">
        {player.coins}
      </PlayerStatsStatText>
      <PlayerStatsStatImage
        $gridArea="weaponImg"
        src="./images/icons/dagger.png"
      />
      <PlayerStatsStatText $gridArea="weaponText" color="grey">
        {player.weapons[0]}
      </PlayerStatsStatText>
    </PlayerStatsWrapper>
  );
};

export default PlayerStats;
