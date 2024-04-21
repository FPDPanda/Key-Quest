import React, { FC } from "react";
import {
  MoveToAreaButtonIconWrapper,
  MoveToAreaButtonTextWrapper,
  MoveToAreaButtonWrapper,
  MoveToAreaButtonLinkWrapper,
} from "./MoveToAreaButton.styled";

interface MoveToAreaButtonProps {
  id: string;
  text: string;
  imageSource: string;
  alternativeText: string;
}

const MoveToAreaButton: FC<MoveToAreaButtonProps> = ({
  id,
  text,
  imageSource,
  alternativeText,
}) => (
  <MoveToAreaButtonLinkWrapper gridArea={id} href="https://google.com">
    <MoveToAreaButtonWrapper className="button">
      <MoveToAreaButtonIconWrapper
        src={imageSource}
        alt={alternativeText}
      ></MoveToAreaButtonIconWrapper>
      <MoveToAreaButtonTextWrapper>{text}</MoveToAreaButtonTextWrapper>
    </MoveToAreaButtonWrapper>
  </MoveToAreaButtonLinkWrapper>
);

export default MoveToAreaButton;
