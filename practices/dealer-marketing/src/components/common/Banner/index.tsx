import React, { memo } from "react";
import Image from "next/image";
import { IMAGE } from "@constants/image";
import styleBanner from "./banner.module.css";

interface BannerProps {
  url: string;
  text?: string;
  alt?: string;
}

const Banner: React.FC<BannerProps> = ({
  url,
  text = "",
  alt = IMAGE.altBanner,
}) => (
  <div data-testid="banner" className={styleBanner.banner}>
    <div className={styleBanner["banner-image"]}>
      <Image
        layout="fill"
        src={url}
        alt={alt}
        placeholder="blur"
        blurDataURL={IMAGE.blurDataURL}
      />
    </div>
    <h1 className={styleBanner["banner-title"]}>{text}</h1>
  </div>
);

export default memo(Banner);
