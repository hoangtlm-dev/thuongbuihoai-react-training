import React from "react";
import Logo from "../Logo/Logo";
import url from "../../../assets/images/logos/logo.png";
import Menu from "../Menu/Menu";
import { MENU_LIST } from "@constants/menu";
import Button from "../Button/Button";
import "./navigationBar.css";

const NavigationBar: React.FC = () => {
  return (
    <nav data-testid="navigation-bar" className="nav">
      <Logo src={url} />
      <div className="nav__about">
        <Menu menuList={MENU_LIST} />
        <Button text="Sign Up" type="light" />
        <Button text="Login" type="outline--light" />
      </div>
    </nav>
  );
};

export default NavigationBar;
