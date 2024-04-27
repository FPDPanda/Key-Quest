import styled from "styled-components";

export const ExploreWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("./images/bg/night-forest.png");
  background-size: cover;
  background-repeat: repeat-x;

  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "box escape"
    "box ."
    "box monster";

  .box {
    grid-area: box;

    height: 100%;
    width: 100%;
    background: rgb(204, 204, 204, 0.2);
    border-radius: 1.2rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #box__text {
    grid-area: box;
    padding: 2rem;
    height: clamp(40vh, 60vh, 70vh);
    border-radius: 2rem;
    background-color: #fff;

    overflow-y: auto;
  }

  #escapeContainer {
    grid-area: escape;
    justify-self: right;
    margin: 3rem 3rem 0 0;
    width: 50%;
    height: 50%;

    display: flex;
    justify-content: right;
    text-decoration: none;
  }

  /* Monster area styling */
  #monster {
    grid-area: monster;
    justify-self: right;
    width: 30vw;
  }

  /* Media queries */
  @media (max-width: 900px) {
    overflow: hidden;
    grid-template-rows: 3fr 1fr 3fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "box"
      "escape"
      "monster";

    .box {
      min-height: 30vh;
      width: 100%;
      gap: 15px;
    }

    #box__text {
      max-height: 30vh;
    }

    #escapeContainer {
      width: 100%;
      margin: 0;
      align-self: center;
      justify-content: center;
    }

    #monster {
      width: 100%;
    }
  }

  @media (max-height: 400px) {
    .game {
      background-size: contain;
    }
  }
`;

export const ExploreButtonWrapper = styled.button`
  padding: 2rem;
  border: 2px solid #888;
  background-color: #fff;
  height: min(10%, 170px);
  width: 100%;

  border-radius: 2rem;

  align-items: center;
  justify-content: center;
  display: flex;

  transition-duration: 0.3s;

  overflow: clip;

  &:hover {
    transform: translateY(-0.5rem);

    box-shadow: 0 0.5rem 2px -2px #888;

    cursor: pointer;
  }
`;

export const EscapeButtonWrapper = styled.button`
  border: 2px solid #888;
  border-radius: 2rem;

  width: 100%;
  max-width: 280px;
  height: 100%;

  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  justify-content: space-around;

  transition-duration: 0.3s;

  overflow: clip;
  padding: 0 1rem;
  background-color: #ff4444;
  color: #fff;

  img {
    height: 10vh;
    width: auto;

    transition-duration: 0.2s;
  }

  span {
    font-size: 2.2rem;
  }

  &:hover {
    transform: translateY(-0.5rem);

    box-shadow: 0 0.5rem 2px -2px #888;

    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }

  img:hover {
    transform: rotate(-6deg);
  }

  @media (max-width: 900px) {
    width: 45%;

    img {
      display: none;
    }
  }
`;