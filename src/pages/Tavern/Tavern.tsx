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
import playerFeature from "../../features/Player";

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

const Tavern: FC<TavernProps> = () => {
  const buyHealthRefill = () => {
    if (playerFeature.updatePlayerCoins(-3)) {
      playerFeature.fillPlayerHealth();
    } else {
      alert("You don't have enough coins to purchase this item");
    }
  };
  const buyMaxHealth = () => {
    if (playerFeature.updatePlayerCoins(-10)) {
      playerFeature.increasePlayerMaxHealth(1);
    } else {
      alert("You don't have enough coins to purchase this item");
    }
  };

  return (
    <TavernWrapper>
      <div className="bubble">
        <p id="bubble__text">Text Bubble</p>
      </div>

      <TavernItemsWrapper>
        <TavernItemWrapper onClick={buyHealthRefill} $backgroundColor="#888">
          <span>Sleep</span>

          <TransformBox
            firstImage={firstSleepImage}
            secondImage={secondSleepImage}
          ></TransformBox>

          <TavernItemPriceWrapper>
            <p>3</p> <img src="../images/icons/coin.png" alt="coins" />
          </TavernItemPriceWrapper>
        </TavernItemWrapper>

        <TavernItemWrapper onClick={buyMaxHealth} $backgroundColor="#f05446">
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
};

export default Tavern;
