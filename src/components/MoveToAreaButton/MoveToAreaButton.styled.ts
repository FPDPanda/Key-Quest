import styled from "styled-components";

export const MoveToAreaButtonLinkWrapper = styled.a<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};

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
`;

export const MoveToAreaButtonWrapper = styled.button`
  padding: 1rem;
  border: 4px solid #888;
  background-color: #fff;
  height: 100%;
  width: 100%;

  border-radius: 2rem;

  align-items: center;
  justify-content: center;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export const MoveToAreaButtonIconWrapper = styled.img`
  height: clamp(5vh, 10vh, 15vh);
  max-width: 20vw;
  width: auto;

  margin-right: 2vw;

  transition-duration: 0.2s;

  &:hover {
    transform: rotate(-6deg);
  }
`;

export const MoveToAreaButtonTextWrapper = styled.div`
  font-size: 2.2rem;

  &:hover {
    text-decoration: underline;
  }
`;
