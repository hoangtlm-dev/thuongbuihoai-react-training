import React from "react";
import Menu from "../../components/common/Menu/Menu";
import { MENU_CONTACT } from "@constants/menu";
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
