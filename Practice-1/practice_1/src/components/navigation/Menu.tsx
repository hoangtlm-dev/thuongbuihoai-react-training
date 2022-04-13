import React from "react";
import { MenuType } from "../../types/menu";
import Button from "../button/Button";
import Bar from "../navBar/Bar";
import "./menu.css"

interface NavigationProps {
  menuList: MenuType[];
  menuBar: string;
}

export default function Navigation({ menuList, menuBar }: NavigationProps): JSX.Element {
  function renderMenuList(list: MenuType[]) {
    return list.map((item) => <li className="nav__menu-item" key={item.key}>{item.label}</li>);
  }

  return (
    <nav className="nav">
    <Bar logo={menuBar}></Bar>
      <div className="nav__menu">
        <ul className="nav__list">{renderMenuList(menuList)}</ul>
        <Button className="light">TAKE A TOUR</Button>
      </div>
    </nav>
  );
}
