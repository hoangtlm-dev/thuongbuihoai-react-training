import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <figure>
      <a href="/">
        <Image
          src="/images/logos/logo-dealer-marketing.svg"
          alt="This is logo"
          width={256}
          height={43}
          placeholder="blur"
          blurDataURL="/images/blur.jfif"
        />
      </a>
    </figure>
  );
};
export default Logo;
