import React from "react";
import "./App.css";
import MoveToAreaButton from "./components/MoveToAreaButton/MoveToAreaButton";
import PlayerStats from "./components/PlayerStats/PlayerStats";
import Player from "./components/Player/Player";

function App() {
  return (
    <div className="game">
      <MoveToAreaButton
        id="explore"
        text="Explore"
        imageSource="./images/icons/explore.png"
        alternativeText="crossed swords"
      />
      <MoveToAreaButton
        id="tavern"
        text="Tavern"
        imageSource="./images/icons/tavern.png"
        alternativeText="beer mug"
      />
      <MoveToAreaButton
        id="armory"
        text="Armory"
        imageSource="./images/icons/armory.png"
        alternativeText="hammer"
      />
      <PlayerStats />
      <Player imageSource="./images/character/knight.gif" />
    </div>
  );
}

export default App;
