import { MENU_CONTACT } from "@src/constants/menu";
import React from "react";
import Menu from "../Menu/Menu";
import styleHeader from "./header.module.css";

const Header = () => {
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader["header-contact"]}>
        <Menu type="light" menuList={MENU_CONTACT} />
      </div>
    </header>
  );
};

export default Header;
