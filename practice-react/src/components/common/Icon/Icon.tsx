import React, { memo, MouseEventHandler, useMemo } from "react";
import "./icon.css";

interface IconProps {
  iconName: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Icon: React.FC<IconProps> = memo(({ iconName="filter", onClick }) => {
  const className = useMemo(() => {
    switch (iconName) {
      case "filter":
        return `icon-${iconName}`;
      case "plus":
        return `icon-${iconName}`;
      case "minus":
        return `icon-${iconName}`;
      case "cart":
        return `icon-${iconName}`;
      case "fb":
        return `icon-${iconName}`;
      case "twitter":
        return `icon-${iconName}`;
      case "instagram":
        return `icon-${iconName}`;
      default:
        return "icon"
    }
  }, [iconName]);

  return <i data-testid="icon" onClick={onClick} className={className} />;
});

export default Icon;
