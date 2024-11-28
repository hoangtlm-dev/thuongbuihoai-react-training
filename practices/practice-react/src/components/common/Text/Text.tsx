import React, { memo } from "react";
import "./text.css";

interface TitleProps {
  size?: string;
  decoration?: string;
  text?: string;
}

const Text: React.FC<TitleProps> = memo(({ text, size, decoration }) => {
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

  switch (decoration) {
    case "blur":
      className = `${className}-${decoration}`
      break;
    case "highlight":
      className = `${className}-${decoration}`;
      break;
    case "dark":
      className = `${className}-${decoration}`;
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
