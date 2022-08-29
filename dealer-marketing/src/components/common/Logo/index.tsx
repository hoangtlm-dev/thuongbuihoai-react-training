import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGE } from "@constants/image";

interface LogoProps {
  url: string;
}

const Logo: React.FC<LogoProps> = ({ url }) => (
  <div data-testid="logo">
    <Link data-testid="logo" href="/" passHref>
      <Image
        src={url}
        alt="This is logo"
        width={256}
        height={43}
        placeholder="blur"
        blurDataURL={IMAGE.blurDataURL}
      />
    </Link>
  </div>
);

export default memo(Logo);
