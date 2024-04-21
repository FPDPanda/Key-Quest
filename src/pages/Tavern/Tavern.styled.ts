import styled from "styled-components";

export const TavernWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("../images/bg/wooden-wall.png");

  display: grid;
  grid-template-rows: 18vh 70vh 10vh;
  grid-template-areas:
    "text"
    "items"
    "return";

  .bubble {
    grid-area: text;

    height: clamp(150px, 30%, 20vh);
    width: 100%;
    background: rgb(204, 204, 204, 0.2);
    border-radius: 1.2rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #bubble__text {
    padding: 1.2rem;
    height: 100%;
    border-radius: 2rem;
    background-color: #fff;

    overflow-y: auto;
  }

  /* Button styles */
  #returnContainer {
    grid-area: return;
    justify-self: center;
    text-decoration: none;

    width: min(90%, 400px);
    height: min(90%, 90px);
  }

  @media (max-width: 500px) {
    background-size: 300px;

    #returnContainer {
      width: 70%;
    }
  }
`;

export const TavernItemsWrapper = styled.div`
  grid-area: items;

  height: 65vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 60vh;
`;

export const TavernItemWrapper = styled.a<{ $backgroundColor: string }>`
  justify-self: center;
  align-self: center;
  width: clamp(135px, 40%, 30vh);
  height: 230px;

  color: #ffff42;
  border: 2px solid #000;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.$backgroundColor};

  &:hover {
    transition-duration: 0.3s;
    transform: translateY(-0.5rem);

    border: 2px solid red;

    box-shadow: 0 0.5rem 2px -2px red;

    cursor: pointer;

    transition-duration: 0.3s;
  }
`;

export const TavernItemImageWrapper = styled.img`
  width: clamp(90px, 40%, 45%);
  margin: 1vh 0;

  &:hover {
    transform: translateY(-0.5rem);
    transition-duration: 0.3s;
  }
`;

export const TavernItemPriceWrapper = styled.div`
  width: clamp(50px, 25%, 5vw);
  height: clamp(19px, 10%, 3vh);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: Georgia, "Times New Roman", Times, serif;
  }

  img {
    margin-left: 0.3vw;
  }
`;
