import React from "react";
import { users } from "../../constants/header";
import { HeaderProps } from "../../types/header";
import Logo from "../Logo/Logo";
import User from "../Icon/Icon";
import Menu from "../Menu/Menu";
import MENU_LIST from "../../constants/menu";
import "./header.css"

const Header: React.FC<HeaderProps> = ({url}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo href="#Home" src={url} />
        <Menu menuList={MENU_LIST} />
      </div>
      <div className="header__user">
        <User
          username={users.username}
          avatar={users.avatar}
        />
      </div>
    </header>
  );
}

export default Header;
