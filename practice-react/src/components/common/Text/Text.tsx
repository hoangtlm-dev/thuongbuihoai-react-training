import React, { memo } from "react";
import "./text.css";

interface TitleProps {
  type?: string;
  text: string;
}

const Text: React.FC<TitleProps> = memo(({ text, type }) => {
  let className = "";
  switch (type) {
    case "blur":
      className = "text--blur";
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
