import React, { memo } from "react";
import { useRouter } from "next/router";
import CustomImage from "../CustomImage/CustomImage";

interface LogoProps {
  url: string;
  blurDataURL?: string;
}

const Logo: React.FC<LogoProps> = ({
  url = "/images/logos/logo-dealer-marketing.svg",
  blurDataURL = "/images/backgrounds/blur.jpg",
}) => {
  const router = useRouter();
  return (
    <figure>
      <a onClick={() => router.push("/")}>
        <CustomImage
          url={url}
          alt="This is logo"
          width={256}
          height={43}
          blurDataURL={blurDataURL}
        />
      </a>
    </figure>
  );
};

export default memo(Logo);
