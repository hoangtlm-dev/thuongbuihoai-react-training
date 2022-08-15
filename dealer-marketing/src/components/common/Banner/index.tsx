import React, { memo } from "react";
import { IMAGE } from "@constants/image";
import styleBanner from "./banner.module.css";
import CustomImage from "../CustomImage/CustomImage";

interface BannerProps {
  url: string;
  text?: string;
  alt?: string;
  blurDataURL: string;
}

const Banner: React.FC<BannerProps> = ({
  url = IMAGE.url,
  text = "",
  alt = IMAGE.alt,
  blurDataURL = IMAGE.blurDataURL,
}) => (
  <div className={styleBanner.banner}>
    <div className={styleBanner["banner-image"]}>
      <CustomImage
        layout="fill"
        url={url}
        alt={alt}
        blurDataURL={blurDataURL}
      />
    </div>
    <h1 className={styleBanner["banner-title"]}>{text}</h1>
  </div>
);

export default memo(Banner);
