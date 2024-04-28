import styled from "styled-components";

export const MainPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url("./images/bg/night-forest.png");
  background-size: cover;
  background-position: bottom;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "explore tavern armory"
    "stats stats player";

  #explore {
    grid-area: explore;
  }
  #tavern {
    grid-area: tavern;
  }
  #armory {
    grid-area: armory;
  }

  a {
    text-decoration: none;
    border-radius: 2rem;

    width: clamp(150px, 30vw, 35vw);
    height: 30vh;

    justify-self: center;
    align-self: center;

    transition-duration: 0.3s;

    overflow: clip;

    &:hover {
      transform: translateY(-0.5rem);

      background-color: #dddddd;
      box-shadow: 0 0.5rem 2px -2px #888;
    }

    @media (max-width: 700px) {
      height: 100%;
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    padding: 4vh 1vh 0 1vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 9vh 9vh 9vh 65vh;
    row-gap: 1vh;
    grid-template-areas:
      "explore explore"
      "tavern tavern"
      "armory armory"
      "stats player";

    overflow: hidden;
  }
`;
