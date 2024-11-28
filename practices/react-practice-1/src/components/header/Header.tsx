import React from "react";
import Navigation from "../navigation/Menu";
import SectionTitle from "../title/SectionTitle";
import "./header.css";
import { Description } from "../description/Description";
import Button from "../button/Button";
import { HeaderProps } from "../../types/header";

export default function Header({
  mainText,
  menuList,
  menuBar
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="header__menu">
        <SectionTitle className="nav__title">
          HOFMANN
        </SectionTitle>
        <Navigation menuList={menuList} menuBar={menuBar}></Navigation>
      </div>
      <div className="container">
        <div className="header__info">
          <div className="header__content">
            <SectionTitle className="main__title">
              What Makes A Hotel Boutique
            </SectionTitle>
            <Description className="main">{mainText}</Description>
            <Button className="primary">Explore</Button>
          </div>
        </div>
      </div>
    </header>
  );
}