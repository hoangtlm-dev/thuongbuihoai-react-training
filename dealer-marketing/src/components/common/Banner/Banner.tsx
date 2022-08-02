import Image from "next/image";
import React from "react";
import styleBanner from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styleBanner.banner}>
      <div className={styleBanner["banner-image"]}>
        <Image
          src="/images/backgrounds/home-page.avif"
          alt="This is banner home page"
          width={1349}
          height={480}
        />
      </div>
      <h1 className={styleBanner["banner-title"]}>
        Expert Automotive Knowledge at Your Fingertips
      </h1>
    </div>
  );
};

export default Banner;
