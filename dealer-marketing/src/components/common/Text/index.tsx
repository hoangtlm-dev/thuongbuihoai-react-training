import React, { memo } from "react";
import styleText from "./text.module.css";

export enum TextType {
  normal = "normal",
  regular = "regular",
  regularDark = "regular-dark",
  regularOutline = "regular-outline",
  medium = "medium",
  mediumOutline = "medium-outline",
  large = "large",
  largeDark = "large-dark",
}

interface TextProps {
  size?: string;
  text?: string;
  onClick?: () => {};
}

const Text: React.FC<TextProps> = React.forwardRef(
  ({ text = "Research", size = "normal", onClick = () => {} }) => {
    return (
      <p onClick={onClick} className={styleText[`text-${size}`]}>
        {text}
      </p>
    );
  },
);

export default memo(Text);
