import React from "react";
import { ROUTER_CONTACT } from "@constants/routes";
import { Menu } from "@components/common";
import styleHeader from "./header.module.css";
import { RouterTypeProp } from "@self-types/routes";

const Header = () => (
  <header data-testid="header" className={styleHeader.header}>
    <div className={styleHeader["header-contact"]}>
      <Menu type={RouterTypeProp.light} menuList={ROUTER_CONTACT} />
    </div>
  </header>
);

export default Header;
