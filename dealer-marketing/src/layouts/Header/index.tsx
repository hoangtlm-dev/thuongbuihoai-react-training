import React from "react";
import { MENU_CONTACT } from "@constants/menu";
import { Menu } from "@components/common";
import styleHeader from "./header.module.css";
import { MenuTypeProp } from "@common-types/menu";

const Header = () => (
  <header data-testid="header" className={styleHeader.header}>
    <div className={styleHeader["header-contact"]}>
      <Menu type={MenuTypeProp.light} menuList={MENU_CONTACT} />
    </div>
  </header>
);

export default Header;
