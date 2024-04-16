import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button
        id="explore"
        text="Explore"
        imageSource="./images/icons/explore.png"
        alternativeText="crossed swords"
      />
      <Button
        id="tavern"
        text="Tavern"
        imageSource="./images/icons/tavern.png"
        alternativeText="beer mug"
      />
      <Button
        id="armory"
        text="Armory"
        imageSource="./images/icons/armory.png"
        alternativeText="hammer"
      />
    </div>
  );
}

export default App;
