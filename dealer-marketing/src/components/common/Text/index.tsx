import React from "react";
import styleText from "./text.module.css";

interface TextProps {
  size?: string;
  text?: string;
}

const classNameType = {
  normal: "text-normal",
  regular: "text-regular",
  regularDark: "text-regular-dark",
  medium: "text-medium",
  mediumOutline: "text-medium-outline",
  large: "text-large",
  largeDark: "text-large-dark",
};

const Text: React.FC<TextProps> = ({ text = "Research", size = "normal" }) => {
  const className = classNameType[size as keyof typeof classNameType] || "";
  return <p className={styleText[className]}>{text}</p>;
};

export default Text;
