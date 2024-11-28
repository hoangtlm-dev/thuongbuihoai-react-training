import React from "react";
import { HeaderProps } from "@/types/header";
import Logo from "../Logo/Logo";
import url from "@/assets/images/js-logo4.png"
import Avatar from "../Avatar/Avatar";
import Menu from "../Menu/Menu";
import MENU_LIST from "@/constants/menu";
import "./header.css";

const Header: React.FC<HeaderProps> = ({ username, image }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo href="#Home" src={url} />
        <Menu menuList={MENU_LIST} />
      </div>
      <div className="header__user">
        <Avatar
          username={username}
          avatar={image}
        />
      </div>
    </header>
  );
}

export default Header;
