import Link from "next/link";
import React from "react";
import linkStyle from "./customLink.module.css";

interface LinkProps {
  href: string;
  children: JSX.Element;
}

const CustomLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className={linkStyle.link} href={href}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
