import styled from "styled-components";

export const PlayerStatsWrapper = styled.div`
  grid-area: stats;
  justify-self: center;
  margin-left: 4vw;

  display: grid;
  grid-template-columns: repeat(3, 1fr 8fr);
  grid-template-areas:
    "statsTitle statsTitle"
    "healthImg  healthText"
    "coinsImg   coinsText"
    "weaponImg  weaponText";
  align-items: center;
  align-self: center;

  padding: 1rem;
  margin-left: 4vw;

  min-width: 165px;
  width: clamp(110px, 60vw, 50%);
  max-height: 80%;
  background-color: white;

  border-radius: 20px;

  @media (max-width: 700px) {
    #stats {
      width: 100%;
    }
  }
`;

export const PlayerStatsTitleArea = styled.div`
  grid-area: statsTitle;
  text-align: center;
`;

export const PlayerStatsTitleText = styled.h2`
  font-size: 2rem;
  margin-bottom: 1vh;
`;

export const PlayerStatsStatImage = styled.img<{ $gridArea: string }>`
  grid-area: ${(props) => props.$gridArea};

  margin-left: 1vw;
  height: clamp(5vh, 6vh, 10vh);
`;

export const PlayerStatsStatText = styled.p<{
  $gridArea: string;
  color?: string;
}>`
  grid-area: ${(props) => props.$gridArea};
  color: ${(props) => props.color};

  font-size: clamp(0.5rem, 2rem, 3rem);
  margin-left: 1vw;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const PlayerHealthValueText = styled.span<{
  color: string;
}>`
  color: ${(props) => props.color};

  font-size: clamp(0.5rem, 2rem, 3rem);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
