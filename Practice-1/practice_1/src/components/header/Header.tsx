import React from "react";
import Navigation from "../navigation/Menu";
import { MenuType } from "../../types/menu";
import SectionTitle from "../title/SectionTitle";
import "./header.css";
import { Description } from "../description/Description";
import Button from "../button/Button";

interface HeaderProps {
  MAIN_TEXT: string;
  menuList: MenuType[]
  menuBar: string;
}

export default function Header({
  MAIN_TEXT,
  menuList,
  menuBar
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="header__menu">
        <SectionTitle className="nav__title">
          <span>HOFMANN</span>
        </SectionTitle>
        <Navigation menuList={menuList} menuBar={menuBar}></Navigation>
      </div>
      <div className="container">
        <div className="header__info">
          <div className="header__content">
            <SectionTitle className="main__title">
              <span>What Makes A Hotel Boutique</span>
            </SectionTitle>
            <Description className="main">{MAIN_TEXT}</Description>
            <Button className="primary">Explore</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
