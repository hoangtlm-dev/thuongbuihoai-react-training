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
    case "normal":
      className = "text--normal";
      break;
    case "medium":
      className = "text--medium";
      break;
    case "large":
      className = "text--large";
      break;
    default:
      break;
  }

  switch (decoration) {
    case "blur":
      className = "text--blur";
      break;
    case "highlight":
      className = "text--highlight";
      break;
    case "dark":
      className = "text--dark";
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
