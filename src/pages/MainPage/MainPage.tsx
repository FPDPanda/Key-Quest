import React, { FC } from "react";
import { MainPageWrapper } from "./MainPage.styled";
import { Link } from "react-router-dom";
import MoveToAreaButton from "../../components/MoveToAreaButton/MoveToAreaButton";
import PlayerStats from "../../components/PlayerStats/PlayerStats";
import Player from "../../components/Player/Player";
import playerFeature from "../../features/Player";

const MainPage: FC = () => {
  const player = playerFeature.getPlayer();

  return (
    <MainPageWrapper>
      <Link id="explore" to="/explore">
        <MoveToAreaButton
          enabled={player.weapons.length > 0}
          text="Explore"
          imageSource="./images/icons/explore.png"
          alternativeText="crossed swords"
        />
      </Link>
      <Link id="tavern" to="/tavern">
        <MoveToAreaButton
          enabled={player.weapons.length > 0}
          text="Tavern"
          imageSource="./images/icons/tavern.png"
          alternativeText="beer mug"
        />
      </Link>
      <Link id="armory" to="/armory">
        <MoveToAreaButton
          text="Armory"
          imageSource="./images/icons/armory.png"
          alternativeText="hammer"
        />
      </Link>
      <PlayerStats />
      <Player imageSource="./images/character/knight.gif" />
    </MainPageWrapper>
  );
};

export default MainPage;
