import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

interface LogoProps {
  url: string;
}

const Logo: React.FC<LogoProps> = ({ url }) => (
  <Link href="/" passHref>
    <Image src={url} alt="This is logo" width={256} height={43} />
  </Link>
);

export default memo(Logo);
