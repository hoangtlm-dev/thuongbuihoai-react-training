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
}
const CustomImage: React.FC<ImageProps> = ({
  url = IMAGE.url,
  blurDataURL = "/images/backgrounds/blur.jpg",
  className = "banner-image-filter",
  height = IMAGE.height,
  width = IMAGE.width,
  alt = IMAGE.alt,
  layout,
  placeholder,
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
    />
  );
};

export default CustomImage;
