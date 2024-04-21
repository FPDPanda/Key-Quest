import React, { FC } from "react";
import {
  ArmoryItemImageWrapper,
  ArmoryItemPriceWrapper,
  ArmoryItemWrapper,
  ArmoryItemsWrapper,
  ArmoryWrapper,
} from "./Armory.styled";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

interface ArmoryProps {}

interface ArmoryItem {
  name: string;
  value: number;
  imageUrl: string;
}

const armoryItems: ArmoryItem[] = [
  { name: "dagger", imageUrl: "./images/weapons/dagger.png", value: 5 },
  { name: "axe", imageUrl: "./images/weapons/axe.png", value: 20 },
  { name: "sword", imageUrl: "./images/weapons/sword.png", value: 40 },
];

const Armory: FC<ArmoryProps> = () => (
  <ArmoryWrapper>
    <div className="bubble">
      <p id="bubble__text">Text Bubble</p>
    </div>

    <ArmoryItemsWrapper>
      {armoryItems.map((item) => (
        <ArmoryItemWrapper key={item.name}>
          <ArmoryItemImageWrapper src={item.imageUrl} alt={item.name} />

          <ArmoryItemPriceWrapper>
            <span>{item.value}</span>{" "}
            <img src="./images/icons/coin.png" alt="coins" />
          </ArmoryItemPriceWrapper>
        </ArmoryItemWrapper>
      ))}
    </ArmoryItemsWrapper>

    <ReturnButton />
  </ArmoryWrapper>
);

export default Armory;
