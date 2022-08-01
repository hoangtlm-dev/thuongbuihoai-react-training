import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Image
      src="/images/logos/logo-dealer-marketing.svg"
      alt="This is logo"
      width={256}
      height={43}
    />
  );
};
export default Logo;
