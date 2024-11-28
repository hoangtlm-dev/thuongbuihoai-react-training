import React, { memo } from "react";
import styleText from "./text.module.css";

export enum SizeType {
  default = "",
  normal = "normal",
  regular = "regular",
  medium = "medium",
  large = "large",
}

export enum ThemeType {
  default = "",
  primary = "primary",
  secondary = "secondary",
  light = "light",
  dark = "dark",
}

interface TextProps {
  size?: string;
  theme?: string;
  text?: string;
}

const Text = React.forwardRef<HTMLInputElement, TextProps>(
  (
    { text = "Research", size = SizeType.default, theme = ThemeType.default },
    ref,
  ) => {
    return (
      <p
        ref={ref}
        data-testid="text"
        className={styleText[`${size ? `text-${size}` : `text-${theme}`}`]}
        dangerouslySetInnerHTML={{ __html: `${text}` }}
      />
    );
  },
);

export default memo(Text);
