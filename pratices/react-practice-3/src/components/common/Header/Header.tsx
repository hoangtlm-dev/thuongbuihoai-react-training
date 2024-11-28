import React from "react";
import MENU_LIST from "@constants/menu";
import url from "@assets/images/logos/logos.png";
import backgroundUrl from "@assets/images/backgrounds/slide-1.jpg";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Button from "../Button/Button/Button";
import "./header.css";

const Header: React.FC = () => {
  return (
    <>
      <header data-testid="header" className="header">
        <div className="header__logo">
          <Logo src={url} />
        </div>
        <div className="header__about">
          <Menu menuList={MENU_LIST} />
          <Button type="primary" text="ORDER ONLINE" />
        </div>
      </header>
      <figure>
        <img src={backgroundUrl} className="header__img" alt="" />
      </figure>
    </>
  );
};

export default Header;
