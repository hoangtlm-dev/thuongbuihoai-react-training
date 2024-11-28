import React, { memo } from "react";
import { ImagesProps } from "@/types/logo";

const Logo: React.FC<ImagesProps> = ({
  href,
  src,
  alt
}) => {

  return (
    <a href={href}>
      <img className="logo" src={src} alt={alt} />
    </a>
  );
}

export default memo(Logo);
