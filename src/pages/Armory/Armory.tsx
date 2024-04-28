import React, { FC, useReducer } from "react";
import {
  ArmoryItemImageWrapper,
  ArmoryItemPriceWrapper,
  ArmoryItemWrapper,
  ArmoryItemsWrapper,
  ArmoryWrapper,
} from "./Armory.styled";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import playerFeature from "../../features/Player";

interface ArmoryProps {}

interface ArmoryItem {
  name: string;
  value: number;
  imageUrl: string;
}

const Armory: FC<ArmoryProps> = function () {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const armoryItems: ArmoryItem[] = [
    {
      name: "dagger",
      imageUrl: "./images/weapons/dagger.png",
      value: 5,
    },
    {
      name: "axe",
      imageUrl: "./images/weapons/axe.png",
      value: 20,
    },
    {
      name: "sword",
      imageUrl: "./images/weapons/sword.png",
      value: 40,
    },
  ];

  const purchaseWeapon = (name: string, value: number) => {
    if (playerFeature.updatePlayerCoins(value * -1)) {
      playerFeature.addPlayerWeapon(name);
      forceUpdate();
    } else {
      alert("You don't have enough coins to purchase this item");
    }
  };

  return (
    <ArmoryWrapper>
      <div className="bubble">
        <p id="bubble__text">Text Bubble</p>
      </div>

      <ArmoryItemsWrapper>
        {armoryItems
          .filter(
            (weapon) => !playerFeature.getPlayerWeapons().includes(weapon.name)
          )
          .map((weapon) => (
            <ArmoryItemWrapper
              onClick={() => purchaseWeapon(weapon.name, weapon.value)}
              key={weapon.name}
            >
              <ArmoryItemImageWrapper src={weapon.imageUrl} alt={weapon.name} />

              <ArmoryItemPriceWrapper>
                <span>{weapon.value}</span>
                <img src="./images/icons/coin.png" alt="coins" />
              </ArmoryItemPriceWrapper>
            </ArmoryItemWrapper>
          ))}
      </ArmoryItemsWrapper>

      <ReturnButton />
    </ArmoryWrapper>
  );
};

export default Armory;
