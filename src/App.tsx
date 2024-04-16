import React from "react";
import "./App.css";
import MoveToAreaButton from "./components/MoveToAreaButton/MoveToAreaButton";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
