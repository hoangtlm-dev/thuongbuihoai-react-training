import React, { useMemo } from "react";
import styleText from "./text.module.css";

interface TextProps {
  size?: string;
  text?: string;
}

const Text: React.FC<TextProps> = ({ text, size = "normal" }) => {
  const className = useMemo(() => {
    switch (size) {
      case "normal":
        return "text-normal";
      case "regular":
        return "text-regular";
      case "regular-dark":
        return "text-regular-dark";
      case "medium":
        return "text-medium";
      case "medium-outline":
        return "text-medium-outline";
      case "large":
        return "text-large";
      default:
        return "";
    }
  }, [size]);

  return <p className={styleText[className]}>{text}</p>;
};

export default Text;
