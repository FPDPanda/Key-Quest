import styled from "styled-components";

export const TransformBoxWrapper = styled.div`
  overflow: hidden;
  height: 55%;

  cursor: pointer;
`;

export const TransformBoxImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  gap: 10px;
  transition: 1.5s;

  &:hover {
    transform: translateY(-100%);
  }
`;

export const TransformBoxImageWrapper = styled.img`
  width: 115px;
`;
