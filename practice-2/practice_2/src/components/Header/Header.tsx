import React from "react";
import { users } from "../../constants/header";
import { HeaderProps } from "../../types/header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import User from "../Icon/Icon";
import "./header.css"

export default function Header({url}: HeaderProps) {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo href="#Home" src={url} />
      </div>
      <Search />
      <div className="header__user">
        <User
          username={users.username}
          avatar={users.avatar}
        />
      </div>
    </header>
  );
}
