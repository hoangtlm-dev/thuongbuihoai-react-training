import React, { memo } from "react";
import "./title.css";

interface TitleProps {
  text?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = memo(({ text="", className }) => {
  return (
    <h2 data-testid="title-test" className={className}>
      {text}
    </h2>
  );
});

export default Title;
