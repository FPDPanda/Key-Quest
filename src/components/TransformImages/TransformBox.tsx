import React, { FC } from "react";
import {
  TransformBoxImageWrapper,
  TransformBoxImagesWrapper,
  TransformBoxWrapper,
} from "./TransformBox.styled";

interface TransformBoxProps {
  firstImage: { id: string; imageUrl: string; alt: string };
  secondImage: { id: string; imageUrl: string; alt: string };
}

const TransformBox: FC<TransformBoxProps> = ({ firstImage, secondImage }) => (
  <TransformBoxWrapper>
    <TransformBoxImagesWrapper>
      <TransformBoxImageWrapper
        id={firstImage.id}
        src={firstImage.imageUrl}
        alt={firstImage.alt}
      />
      <TransformBoxImageWrapper
        id={secondImage.id}
        src={secondImage.imageUrl}
        alt={secondImage.alt}
      />
    </TransformBoxImagesWrapper>
  </TransformBoxWrapper>
);

export default TransformBox;
