import React, { FC } from "react";
import { ReturnButtonWrapper } from "./ReturnButton.styled";
import { Link } from "react-router-dom";

interface ReturnButtonProps {}

const ReturnButton: FC<ReturnButtonProps> = () => (
  <Link id="returnContainer" to="/">
    <ReturnButtonWrapper>
      <span id="returnContainer__button__text">Voltar</span>
      <img src="./images/icons/escape.png" alt="return button" />
    </ReturnButtonWrapper>
  </Link>
);

export default ReturnButton;
