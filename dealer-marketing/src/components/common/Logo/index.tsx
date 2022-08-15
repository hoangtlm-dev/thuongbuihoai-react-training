import React, { memo } from "react";
import { useRouter } from "next/router";
import CustomImage from "../CustomImage";

interface LogoProps {
  url: string;
}

const Logo: React.FC<LogoProps> = ({
  url = "/images/logos/logo-dealer-marketing.svg",
}) => {
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
