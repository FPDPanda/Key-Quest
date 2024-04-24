import React, { FC } from "react";
import {
  ExploreWrapper,
  ExploreButtonWrapper,
  EscapeButtonWrapper,
} from "./Explore.styled";
import { Link } from "react-router-dom";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => (
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

    <div id="monster"></div>
  </ExploreWrapper>
);

export default Explore;
