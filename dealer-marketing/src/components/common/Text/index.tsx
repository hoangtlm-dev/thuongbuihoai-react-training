import React, { memo } from "react";
import styleText from "./text.module.css";

export enum TextType {
  normal = "text-normal",
  regular = "text-regular",
  regularDark = "text-regular-dark",
  regularOutline = "text-regular-outline",
  medium = "text-medium",
  mediumOutline = "text-medium-outline",
  large = "text-large",
  largeDark = "text-large-dark",
}

interface TextProps {
  size?: string;
  text?: string;
}

const Text: React.FC<TextProps> = ({ text = "Research", size = "normal" }) => {
  return <p className={styleText[size]}>{text}</p>;
};

export default memo(Text);
