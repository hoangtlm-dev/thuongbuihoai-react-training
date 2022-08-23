import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

interface LogoProps {
  url: string;
}

const Logo: React.FC<LogoProps> = ({ url }) => (
  <div data-testid="logo">
    <Link data-testid="logo" href="/" passHref>
      <Image src={url} alt="This is logo" width={256} height={43} />
    </Link>
  </div>
);

export default memo(Logo);
