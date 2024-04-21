import styled from "styled-components";

export const ArmoryWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("../images/bg/wooden-wall.png");
  background-size: 500px;

  display: grid;
  grid-template-rows: 1.8fr 7fr 1.2fr;
  grid-template-areas:
    "box"
    "wpns"
    "return";

  /* Text Bubble styles*/
  .bubble {
    grid-area: box;

    height: 100%;
    width: 100%;
    background: rgb(204, 204, 204, 0.2);
    border-radius: 1.2rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      padding: 1.2rem;
      height: 100%;
      border-radius: 2rem;
      background-color: #fff;

      overflow-y: auto;
    }
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
  }
`;

export const ArmoryItemsWrapper = styled.div`
  grid-area: wpns;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 500px) {
    grid-template-columns: 50vw 50vw;
    grid-template-rows: 35vh 35vh;
  }
`;

export const ArmoryItemWrapper = styled.div`
  justify-self: center;
  align-self: center;
  height: min(90%, 350px);
  width: min(80%, 150px);

  border: 2px solid #fff;
  border-radius: 20px;

  background: url("../images/bg/wooden-racks.jpg");
  color: #ffff42;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-0.5rem);
    border: 2px solid red;

    box-shadow: 0 0.5rem 2px -2px red;

    cursor: pointer;
  }
`;

export const ArmoryItemImageWrapper = styled.img`
  max-height: 80%;
  transition-duration: 0.5s;

  &:hover {
    transform: translateY(-0.5rem);
    transition-duration: 0.3s;
  }
`;

export const ArmoryItemPriceWrapper = styled.div`
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
