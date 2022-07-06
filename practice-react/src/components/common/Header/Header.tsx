import React from "react";
import Logo from "../Logo/Logo";
import url from "../../../assets/images/logos/logo.png";
import Menu from "../Menu/Menu";
import MENU_LIST from "@constants/menu";
import Button from "../Button/Button";
import Text from "../Text/Text";

const Header: React.FC = () => {
  return (
    <header data-testid="header" className="header">
      <Logo src={url} />
      <div className="header__about">
        <Menu menuList={MENU_LIST} />
        <Button text="Sign Up" type="light" />
        <Button text="Login" type="outline--light" />
      </div>
      <Text text="Lorem ipsum dolor sit" type="blur" />
      <h1 className="header__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      <Button text="Sign Up" type="large" />
    </header>
  );
};

export default Header;
