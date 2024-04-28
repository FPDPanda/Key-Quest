import React, { FC } from "react";
import {
  PlayerHealthValueText,
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

  const getCurrentHealthColor = () => {
    if (player.stats.currentHealth < player.stats.maxHealth) {
      return "red";
    } else {
      return "black";
    }
  };

  return (
    <PlayerStatsWrapper>
      <PlayerStatsTitleArea>
        <PlayerStatsTitleText>Stats</PlayerStatsTitleText>
      </PlayerStatsTitleArea>
      <PlayerStatsStatImage
        $gridArea="healthImg"
        src="./images/icons/heart.png"
      />
      <PlayerStatsStatText $gridArea="healthText">
        <PlayerHealthValueText color={getCurrentHealthColor()}>
          {player.stats.currentHealth}
        </PlayerHealthValueText>
        /
        <PlayerHealthValueText color="black">
          {player.stats.maxHealth}
        </PlayerHealthValueText>
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
        {player.weapons[player.weapons.length - 1]}
      </PlayerStatsStatText>
    </PlayerStatsWrapper>
  );
};

export default PlayerStats;
