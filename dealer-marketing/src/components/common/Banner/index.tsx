import React, { memo } from "react";
import { IMAGE } from "@constants/image";
import CustomImage from "../CustomImage";
import styleBanner from "./banner.module.css";

interface BannerProps {
  url: string;
  text?: string;
  alt?: string;
}

const Banner: React.FC<BannerProps> = ({
  url = IMAGE.url,
  text = "",
  alt = IMAGE.alt,
}) => (
  <div className={styleBanner.banner}>
    <div className={styleBanner["banner-image"]}>
      <CustomImage layout="fill" url={url} alt={alt} />
    </div>
    <h1 className={styleBanner["banner-title"]}>{text}</h1>
  </div>
);

export default memo(Banner);
