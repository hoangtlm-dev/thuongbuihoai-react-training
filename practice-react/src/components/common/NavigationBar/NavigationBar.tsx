import React, { memo } from "react";
import { MENU_LIST } from "@constants/menu";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import url from "../../../assets/images/logos/logo.png";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import "./navigationBar.css";

interface NavigationBarProps {
  mode: {
    light?: boolean;
    dark?: boolean;
  };
}

const NavigationBar: React.FC<NavigationBarProps> = memo(({ mode }) => {
  return (
    <nav data-testid="navigation-bar" className="nav">
      <Logo src={url} />
      <div className="nav__about">
        <Menu menuList={MENU_LIST} />
        {mode.light && (
          <>
            <Button text="Sign Up" type="light" />
            <Button text="Login" type="outline--light" />
          </>
        )}
        {mode.dark && (
          <>
            <Button text="Sign Up" type="dark" />
            <Button text="Login" type="outline--dark" />
          </>
        )}
      </div>
    </nav>
  );
});

export default NavigationBar;
