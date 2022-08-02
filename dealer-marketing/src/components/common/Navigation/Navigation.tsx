import { MENU_LIST } from "@src/constants/menu";
import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styleNavigation from "./navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <nav className={styleNavigation.nav}>
      <Logo />
      <div>
        <Menu type="dark" menuList={MENU_LIST} />
      </div>
    </nav>
  );
};

export default Navigation;
