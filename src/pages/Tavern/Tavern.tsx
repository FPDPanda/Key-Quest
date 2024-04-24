import React, { FC } from "react";
import {
  TavernItemImageWrapper,
  TavernItemPriceWrapper,
  TavernItemWrapper,
  TavernItemsWrapper,
  TavernWrapper,
} from "./Tavern.styled";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import TransformBox from "../../components/TransformImages/TransformBox";

interface TavernProps {}

const firstSleepImage = {
  id: "sleep_moon",
  imageUrl: "./images/icons/moon.png",
  alt: "moon",
};

const secondSleepImage = {
  id: "sleep_sun",
  imageUrl: "./images/icons/sun.png",
  alt: "sun",
};

const Tavern: FC<TavernProps> = () => (
  <TavernWrapper>
    <div className="bubble">
      <p id="bubble__text">Text Bubble</p>
    </div>

    <TavernItemsWrapper>
      <TavernItemWrapper $backgroundColor="#888">
        <span>Sleep</span>

        <TransformBox
          firstImage={firstSleepImage}
          secondImage={secondSleepImage}
        ></TransformBox>

        <TavernItemPriceWrapper>
          <p>3</p> <img src="../images/icons/coin.png" alt="coins" />
        </TavernItemPriceWrapper>
      </TavernItemWrapper>

      <TavernItemWrapper $backgroundColor="#f05446">
        <span>Increase HP</span>
        <TavernItemImageWrapper
          src="./images/icons/hp-up.png"
          alt="hp potion"
        />

        <TavernItemPriceWrapper>
          <p>10</p> <img src="../images/icons/coin.png" alt="coins" />
        </TavernItemPriceWrapper>
      </TavernItemWrapper>
    </TavernItemsWrapper>

    <ReturnButton />
  </TavernWrapper>
);

export default Tavern;
