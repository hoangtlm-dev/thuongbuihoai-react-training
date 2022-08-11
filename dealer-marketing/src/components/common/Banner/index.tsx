import React, { memo } from "react";
import Image from "next/image";
import styleBanner from "./banner.module.css";

interface BannerProps {
  url: string;
  text: string;
  blurDataURL: string;
}

const Banner: React.FC<BannerProps> = ({
  url = "/images/backgrounds/home-page.png",
  text = "This is home page",
  blurDataURL = "/images/backgrounds/blur.jpg",
}) => (
  <div className={styleBanner.banner}>
    <div className={styleBanner["banner-image"]}>
      <Image
        src={url}
        alt="This is banner home page"
        layout="fill"
        placeholder="blur"
        blurDataURL={blurDataURL}
        className={styleBanner["banner-image-filter"]}
      />
    </div>
    <h1 className={styleBanner["banner-title"]}>{text}</h1>
  </div>
);

export default memo(Banner);
