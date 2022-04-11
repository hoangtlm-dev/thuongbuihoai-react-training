import React from "react";
import Navigation from "../navigation/Menu";
import { MenuType } from "../../types/menu";
import SectionTitle from "../title/SectionTitle";
import "./header.css";
import { Description } from "../description/Description";
import Button from "../button/Button";

export interface HeaderProps {
  children1: string;
  children2: string;
  children3: string;
  MAIN_TEXT: string;
  menuList: MenuType[]
  menuBar: string;
}

export default function Header({
  children1,
  children2,
  children3,
  MAIN_TEXT,
  menuList,
  menuBar
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="header__menu">
        <SectionTitle className="nav__title">
          <span>{children1}</span>
        </SectionTitle>
        <Navigation menuList={menuList} menuBar={menuBar}></Navigation>
      </div>
      <div className="container">
        <div className="header__info">
          <div className="header__content">
            <SectionTitle className="main__title">
              <span>{children2}</span>
            </SectionTitle>
            <Description className="description">{MAIN_TEXT}</Description>
            <Button type="primary">{children3}</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
