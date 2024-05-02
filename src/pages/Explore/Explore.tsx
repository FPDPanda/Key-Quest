import React, { FC, useState } from "react";
import {
  ExploreWrapper,
  ExploreButtonWrapper,
  EscapeButtonWrapper,
  MonsterWrapper,
} from "./Explore.styled";
import { Link } from "react-router-dom";
import { FightText } from "../../types/fight-text";
import monsterFeature from "../../features/Monster";
import fightFeature from "../../features/Fight";
import textFeature from "../../features/Text";
import FightTextBox from "../../components/BoxText/FightTextBox";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  const [monster, setMonster] = useState(monsterFeature.getMonster());

  const inputText: FightText[] = [
    textFeature.getMonsterEncounterText(monster.name),
    textFeature.getLineBreak(),
  ];

  const [text, setText] = useState(inputText);

  const updateInputText = (textUpdates: FightText[]) => {
    const addText: FightText[] = [...textUpdates];

    setText([...text, ...addText]);
  };

  const fight = () => {
    const textUpdates = fightFeature.fight(monster);
    updateInputText(textUpdates);

    if (fightFeature.isMonsterDead()) {
      findNewMonster(textUpdates);
    }
  };

  const findNewMonster = (textUpdates: FightText[]) => {
    monsterFeature.setRandomMonster();
    setMonster(monsterFeature.getMonster());
    textUpdates.push(
      textFeature.getMonsterEncounterText(monsterFeature.getMonster().name),
      textFeature.getLineBreak()
    );
    updateInputText(textUpdates);
  };

  return (
    <ExploreWrapper>
      <div className="box">
        <FightTextBox inputText={text}></FightTextBox>

        <ExploreButtonWrapper onClick={() => findNewMonster([])}>
          <span>Escape and find a new monster</span>
        </ExploreButtonWrapper>
        <ExploreButtonWrapper onClick={fight}>
          <span>Fight</span>
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
