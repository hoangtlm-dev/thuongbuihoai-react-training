import React, { memo } from "react";
import { useRouter } from "next/router";
import { IMAGE } from "@constants/image";
import CustomImage from "../CustomImage";

interface LogoProps {
  url: string;
}

const Logo: React.FC<LogoProps> = ({ url = IMAGE.logoUrl }) => {
  const router = useRouter();
  return (
    <figure>
      <a onClick={() => router.push("/")}>
        <CustomImage url={url} alt="This is logo" width={256} height={43} />
      </a>
    </figure>
  );
};

export default memo(Logo);
