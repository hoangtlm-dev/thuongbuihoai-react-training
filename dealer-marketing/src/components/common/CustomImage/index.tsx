import React from "react";
import Image from "next/image";
import { IMAGE } from "@constants/image";

interface ImageProps {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  className?: string;
  placeholder?: "blur" | "empty";
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  onClick?: () => {};
}
const CustomImage: React.FC<ImageProps> = React.forwardRef(
  ({
    url,
    alt,
    height = IMAGE.height,
    width = IMAGE.width,
    blurDataURL = IMAGE.blurDataURL,
    className = "banner-image-filter",
    placeholder = "blur",
    layout = undefined,
    onClick = () => {},
  }) => {
    return (
      <Image
        src={url}
        alt={alt}
        layout={layout}
        placeholder={placeholder}
        width={width}
        height={height}
        blurDataURL={blurDataURL}
        className={className}
        onClick={onClick}
      />
    );
  },
);

export default CustomImage;
