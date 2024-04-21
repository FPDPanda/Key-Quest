import styled from "styled-components";

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

  @media (max-width: 1000px) {
    flex-direction: column;

    overflow: hidden;
  }

  @media (max-width: 700px) {
    flex-direction: initial;
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

  @media (max-width: 1000px) {
    margin: 0;
  }

  @media (max-width: 700px) {
    height: 6vh;
    margin-right: 6vw;

    transition-duration: 0.2s;
  }
`;

export const MoveToAreaButtonTextWrapper = styled.div`
  font-size: 2.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    font-size: 2rem;
    margin-top: 1vh;
  }

  @media (max-width: 700px) {
    font-size: 2.2rem;
    margin: 0;
  }
`;
