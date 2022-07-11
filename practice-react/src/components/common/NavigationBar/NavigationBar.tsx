import React from "react";
import { MENU_LIST } from "@constants/menu";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import url from "../../../assets/images/logos/logo.png";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import "./navigationBar.css";

interface NavigationBarProps {
  isThemeLight?: boolean;
  isThemeDark?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  isThemeLight,
  isThemeDark,
}) => {
  return (
    <nav data-testid="navigation-bar" className="nav">
      <Link to="/">
        <Logo src={url} />
      </Link>
      <div className="nav__about">
        <Menu menuList={MENU_LIST} />
        {isThemeLight && (
          <>
            <Button text="Sign Up" type="light" />
            <Button text="Login" type="outline--light" />
          </>
        )}
        {isThemeDark && (
          <>
            <Button text="Sign Up" type="dark" />
            <Button text="Login" type="outline--dark" />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
