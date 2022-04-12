import React from "react";
import { FeatureListProps } from "../../types/feature";
import { Description } from "../description/Description";
import SectionTitle from "../title/SectionTitle";
import "./featureItem.css"

export default function FeatureItem({
  className,
  icon,
  alt,
  title,
  content
}: FeatureListProps): JSX.Element {
  return (
    <div className="feature__item">
      <img className={`icon--${className}`} src={icon} alt={alt} />
      <div>
        <SectionTitle className="feature__title"><span>{title}</span></SectionTitle>
        <Description className="responsive">{content}</Description>
      </div>
    </div>
  );
}