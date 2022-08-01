import React from "react";
import styleText from "./text.module.css";

interface TextProps {
  size?: string;
  text?: string;
}

const Text: React.FC<TextProps> = ({ text, size }) => {
  let className = "text";
  switch (size) {
    case "normal":
      className = `${className}-${size}`;
      break;
    case "medium":
      className = `${className}-${size}`;
      break;
    case "large":
      className = `${className}-${size}`;
      break;
    default:
  }

  return <p className={styleText[className]}>{text}</p>;
};

export default Text;
