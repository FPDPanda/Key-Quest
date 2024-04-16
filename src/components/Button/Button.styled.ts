import styled from "styled-components";

export const LinkWrapper = styled.a`
  text-decoration: none;
  border-radius: 2rem;

  width: clamp(150px, 30vw, 35vw);
  height: 30vh;

  display: flex;
  justify-self: center;
  align-self: center;

  :hover {
    transform: translateY(-0.5rem);

    background-color: #dddddd;
    box-shadow: 0 0.5rem 2px -2px #888;

    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.button`
  padding: 1rem;
  border: 4px solid #888;
  background-color: #fff;
  height: 100%;
  width: 100%;

  border-radius: 2rem;

  align-items: center;
  justify-content: center;
  display: flex;

  transition-duration: 0.3s;

  overflow: clip;
`;

export const ButtonIconWrapper = styled.img`
  height: clamp(5vh, 10vh, 15vh);
  max-width: 20vw;
  width: auto;

  margin-right: 2vw;

  transition-duration: 0.2s;

  :hover {
    transform: rotate(-6deg);
  }
`;

export const ButtonTextWrapper = styled.div`
  font-size: 2.2rem;

  :hover {
    text-decoration: underline;
  }
`;
