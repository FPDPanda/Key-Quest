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

const Button: FC<MoveToAreaButtonProps> = ({
  id,
  text,
  imageSource,
  alternativeText,
}) => (
  <MoveToAreaButtonLinkWrapper id={`button__ ${id}`} href="https://google.com">
    <MoveToAreaButtonWrapper className="button">
      <MoveToAreaButtonIconWrapper
        src={imageSource}
        alt={alternativeText}
      ></MoveToAreaButtonIconWrapper>
      <MoveToAreaButtonTextWrapper id={`button__${id}__text`}>
        {text}
      </MoveToAreaButtonTextWrapper>
    </MoveToAreaButtonWrapper>
  </MoveToAreaButtonLinkWrapper>
);

export default Button;
