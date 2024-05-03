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
  enabled?: boolean;
}

const MoveToAreaButton: FC<MoveToAreaButtonProps> = ({
  text,
  imageSource,
  alternativeText,
  enabled = true,
}) => (
  <MoveToAreaButtonWrapper disabled={!enabled} className="button">
    <MoveToAreaButtonIconWrapper
      src={imageSource}
      alt={alternativeText}
    ></MoveToAreaButtonIconWrapper>
    <MoveToAreaButtonTextWrapper>{text}</MoveToAreaButtonTextWrapper>
  </MoveToAreaButtonWrapper>
);

export default MoveToAreaButton;
