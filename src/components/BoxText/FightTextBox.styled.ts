import styled from "styled-components";

export const FightTextBoxWrapper = styled.div`
  grid-area: box;
  padding: 2rem;
  height: clamp(40vh, 60vh, 70vh);
  border-radius: 2rem;
  background-color: #fff;

  overflow-y: auto;
`;

export const FightTextBoxParagraphWrapper = styled.p<{ color: string }>`
  color: ${(props) => props.color};
`;

export const FightTextBoxSpanWrapper = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;
