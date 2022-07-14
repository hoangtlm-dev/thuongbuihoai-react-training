import React from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
import NavigationBar from "../NavigationBar/NavigationBar";
import backgroundGreen from "@assets/images/backgrounds/green.png";
import backgroundBasket from "@assets/images/backgrounds/basket-full.png";
import backgroundTopView from "@assets/images/backgrounds/top-view.png";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header data-testid="header" className="header">
      <NavigationBar
        mode={{
          light: true,
        }}
      />
      <div className="header__info">
        <Text text="Lorem ipsum dolor sit" size="blur" />
        <h1 className="header__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <Button text="Sign Up" type="large" />
      </div>
      <figure>
        <img
          className="header__images--right"
          src={backgroundGreen}
          alt="This is background green color"
        />
        <img
          className="header__images--basket"
          src={backgroundBasket}
          alt="This is background basket-full"
        />
        <img
          className="header__images--top-view"
          src={backgroundTopView}
          alt="This is background top-view"
        />
      </figure>
    </header>
  );
};

export default Header;
