import React from "react";
import { SectionTitleProps } from "../../types/title";
import "./sectionTitle.css";

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