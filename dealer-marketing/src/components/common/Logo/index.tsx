import Link from "next/link";
import React, { memo } from "react";
import CustomImage from "../CustomImage";

interface LogoProps {
  url: string;
}

const Logo: React.FC<LogoProps> = ({ url }) => {
  return (
    <figure>
      <Link href="/" passHref>
        <CustomImage url={url} alt="This is logo" width={256} height={43} />
      </Link>
    </figure>
  );
};

export default memo(Logo);
