import React, { FC } from "react";
import {
  ButtonIconWrapper,
  ButtonTextWrapper,
  ButtonWrapper,
  LinkWrapper,
} from "./Button.styled";

interface ButtonProps {
  id: string;
  text: string;
  imageSource: string;
  alternativeText: string;
}

const Button: FC<ButtonProps> = ({
  id,
  text,
  imageSource,
  alternativeText,
}) => (
  <LinkWrapper id={`button__ ${id}`} href="https://google.com">
    <ButtonWrapper className="button">
      <ButtonIconWrapper
        src={imageSource}
        alt={alternativeText}
      ></ButtonIconWrapper>
      <ButtonTextWrapper id={`button__${id}__text`}>{text}</ButtonTextWrapper>
    </ButtonWrapper>
  </LinkWrapper>
);

export default Button;
