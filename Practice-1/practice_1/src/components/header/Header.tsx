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
}

export default function Header({
  children1,
  children2,
  children3,
  MAIN_TEXT,
  menuList,
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <SectionTitle className="nav__title">
          <span>{children1}</span>
        </SectionTitle>
        <div className="header__content">
          <SectionTitle className="main__title">
            <span>{children2}</span>
          </SectionTitle>
          <Description className="description">{MAIN_TEXT}</Description>
          <Button type="secondary">{children3}</Button>
        </div>
      </div>
      <Navigation menuList={menuList} />
    </header>
  );
}
