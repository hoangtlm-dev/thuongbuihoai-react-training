import React from "react";
import { ImagesProps } from "../../types/logo";

export default function Logo({
  href,
  src,
  alt
}: ImagesProps) {
  return (
    <a href={href}>
      <img className="logo" src={src} alt={alt} />
    </a>
  );
}
