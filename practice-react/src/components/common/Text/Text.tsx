import React, { memo } from "react";
import "./text.css";

interface TitleProps {
  size?: string;
  decoration?: string;
  text?: string;
}

const Text: React.FC<TitleProps> = memo(({ text, size, decoration }) => {
  let className = "";
  switch (size) {
    case "blur":
      className = "text--blur";
      break;
    case "normal":
      className = "text--normal";
      break;
    case "color":
      className = "text--color";
      break;
    case "medium":
      className = "text--medium";
      break;
    case "large":
      className = "text--large";
      break;
    case "large-dark":
      className = "text--large-dark";
      break;
    default:
      break;
  }
  return (
    <p data-testid="text" className={className}>
      {text}
    </p>
  );
});

export default Text;
