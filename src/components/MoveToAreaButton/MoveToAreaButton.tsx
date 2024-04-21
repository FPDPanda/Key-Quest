import React, { FC } from "react";
import {
  MoveToAreaButtonIconWrapper,
  MoveToAreaButtonTextWrapper,
  MoveToAreaButtonWrapper,
} from "./MoveToAreaButton.styled";

interface MoveToAreaButtonProps {
  text: string;
  imageSource: string;
  alternativeText: string;
}

const MoveToAreaButton: FC<MoveToAreaButtonProps> = ({
  text,
  imageSource,
  alternativeText,
}) => (
  <MoveToAreaButtonWrapper className="button">
    <MoveToAreaButtonIconWrapper
      src={imageSource}
      alt={alternativeText}
    ></MoveToAreaButtonIconWrapper>
    <MoveToAreaButtonTextWrapper>{text}</MoveToAreaButtonTextWrapper>
  </MoveToAreaButtonWrapper>
);

export default MoveToAreaButton;
