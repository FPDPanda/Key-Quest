import React, { FC } from "react";
import {
  PlayerStatsStatImage,
  PlayerStatsStatText,
  PlayerStatsTitleArea,
  PlayerStatsTitleText,
  PlayerStatsWrapper,
} from "./PlayerStats.styled";

interface PlayerStatsProps {}

const PlayerStats: FC<PlayerStatsProps> = () => (
  <PlayerStatsWrapper>
    <PlayerStatsTitleArea>
      <PlayerStatsTitleText>Stats</PlayerStatsTitleText>
    </PlayerStatsTitleArea>
    <PlayerStatsStatImage
      $gridArea="healthImg"
      src="./images/icons/heart.png"
    />
    <PlayerStatsStatText $gridArea="healthText" color="black">
      5
    </PlayerStatsStatText>
    <PlayerStatsStatImage $gridArea="coinsImg" src="./images/icons/coins.png" />
    <PlayerStatsStatText $gridArea="coinsText" color="gold">
      5
    </PlayerStatsStatText>
    <PlayerStatsStatImage
      $gridArea="weaponImg"
      src="./images/icons/dagger.png"
    />
    <PlayerStatsStatText $gridArea="weaponText" color="grey">
      5
    </PlayerStatsStatText>
  </PlayerStatsWrapper>
);

export default PlayerStats;
