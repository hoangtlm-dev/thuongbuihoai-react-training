import React from "react";
import "./sectionTitle.css";

interface SectionTitleProps {
  className?: string;
  children: JSX.Element;
}

export default function SectionTitle({
  className,
  children,
}: SectionTitleProps): JSX.Element {
  return (
      <h2 className={`section-title section-title--${className}`}>
        {children}
      </h2>
    )
  }
