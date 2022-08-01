import { MENU_CONTACT } from "@src/constants/menu";
import React from "react";
import Menu from "../Menu/Menu";
import headerStyle from "./_header.module.scss";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <Menu type="light" menuList={MENU_CONTACT} />
    </header>
  );
};

export default Header;
