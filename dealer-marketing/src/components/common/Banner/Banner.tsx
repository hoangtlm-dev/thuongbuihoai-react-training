import Image from "next/image";
import React from "react";
import styleBanner from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styleBanner.banner}>
      <div className={styleBanner.banner__image}>
        <Image
          src="/images/backgrounds/home-page.avif"
          alt="This is banner home page"
          layout="fill"
        />
      </div>
      <h1 className={styleBanner.banner__title}>
        Expert Automotive Knowledge at Your Fingertips
      </h1>
    </div>
  );
};

export default Banner;
