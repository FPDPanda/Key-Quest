import React, { FC } from "react";
import {
  FightTextBoxParagraphWrapper,
  FightTextBoxSpanWrapper,
  FightTextBoxWrapper,
} from "./FightTextBox.styled";
import { FightText } from "../../types/fight-text";

interface FightTextBoxProps {
  inputText: FightText[];
}

const FightTextBox: FC<FightTextBoxProps> = ({ inputText }) => {
  return (
    <FightTextBoxWrapper>
      {inputText &&
        inputText.map((fightText, i) => {
          if (fightText.type === "p") {
            return (
              <FightTextBoxParagraphWrapper color={fightText.color} key={i}>
                {fightText.text}
              </FightTextBoxParagraphWrapper>
            );
          } else {
            return (
              <FightTextBoxSpanWrapper color={fightText.color} key={i}>
                {fightText.text}
              </FightTextBoxSpanWrapper>
            );
          }
        })}
    </FightTextBoxWrapper>
  );
};

export default FightTextBox;
