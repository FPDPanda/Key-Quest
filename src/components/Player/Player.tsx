import React, { FC } from "react";
import { PlayerWrapper } from "./Player.styled";

interface PlayerProps {
  imageSource: string;
}

const Player: FC<PlayerProps> = ({ imageSource }) => (
  <PlayerWrapper $imageSource={imageSource} $gridArea="player"></PlayerWrapper>
);

export default Player;
