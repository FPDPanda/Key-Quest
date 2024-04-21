import styled from "styled-components";

export const PlayerWrapper = styled.div<{
  $imageSource: string;
  $gridArea: string;
}>`
  grid-area: ${(props) => props.$gridArea};
  background-image: url(${(props) => props.$imageSource});

  background-size: 30vh;
  background-repeat: no-repeat;
  background-position: center bottom 1.5vh;

  @media (max-width: 900px) {
    background-position: right bottom 1.5vh;
  }
`;
