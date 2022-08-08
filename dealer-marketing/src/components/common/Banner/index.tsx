import Image from "next/image";
import React from "react";
import styleBanner from "./banner.module.css";

interface BannerProps {
  url: string;
  text: string;
  blurDataURL: string;
}

const Banner: React.FC<BannerProps> = ({ url, text, blurDataURL }) => (
  <div className={styleBanner.banner}>
    <div className={styleBanner["banner-image"]}>
      <Image
        src={url}
        alt="This is banner home page"
        width={1349}
        height={480}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </div>
    <h1 className={styleBanner["banner-title"]}>{text}</h1>
  </div>
);

export default Banner;
