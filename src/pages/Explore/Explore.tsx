import React, { FC } from "react";
import {
  ExploreWrapper,
  ExploreButtonWrapper,
  EscapeButtonWrapper,
  MonsterWrapper,
} from "./Explore.styled";
import { Link } from "react-router-dom";
import monsterFeature from "../../features/Monster";

interface ExploreProps {}

const Explore: FC<ExploreProps> = function () {
  const monster = monsterFeature.getMonster();
  monster.health = 0;

  return (
    <ExploreWrapper>
      <div className="box">
        <div id="box__text">
          <p id="box__encounterText">You see a small green monster</p>
        </div>

        <ExploreButtonWrapper>
          <span>Lutar</span>
        </ExploreButtonWrapper>
      </div>

      <Link id="escapeContainer" to="/">
        <EscapeButtonWrapper>
          <img src="../images/icons/escape.png" alt="escape button" />
          <span>Voltar</span>
        </EscapeButtonWrapper>
      </Link>

      <MonsterWrapper id="monster" $imageUrl={monster.imageUrl} />
    </ExploreWrapper>
  );
};

export default Explore;
