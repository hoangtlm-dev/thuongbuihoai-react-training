import React, { memo } from "react";

interface TitleProps {
  className?: string;
  text?: string;
}

const Text: React.FC<TitleProps> = memo(({ text, className }) => {
  return (
    <p data-testid="text" className={className}>
      {text}
    </p>
  );
});

export default Text;
