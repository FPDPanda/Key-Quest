import styled from "styled-components";

export const ReturnButtonWrapper = styled.button`
  padding: 1rem;
  border: 2px solid #888;
  color: #fff;
  background-color: #f44;
  height: 100%;
  width: 100%;

  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  transition-duration: 0.3s;

  overflow: clip;

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

    background-color: #dddddd;
    box-shadow: 0 0.5rem 2px -2px #888;

    cursor: pointer;
  }

  & span:hover {
    text-decoration: underline;
  }

  & img:hover {
    transform: rotate(-6deg);
  }
`;
