import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  url: string;
  blurDataURL?: string;
}

const Logo: React.FC<LogoProps> = ({
  url = "/images/logos/logo-dealer-marketing.svg",
  blurDataURL = "/images/backgrounds/blur.jpg",
}) => (
  <figure>
    <Link href="/">
      <Image
        src={url}
        alt="This is logo"
        width={256}
        height={43}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </Link>
  </figure>
);

export default Logo;
