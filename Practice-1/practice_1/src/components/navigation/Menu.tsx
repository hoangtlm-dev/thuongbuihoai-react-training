import React from "react";
import { MenuType } from "../../types/menu";
import Button from "../button/Button";
import "./menu.css"

interface NavigationProps {
  menuList: MenuType[];
}

export default function Navigation({ menuList }: NavigationProps): JSX.Element {
  function renderMenuList(list: MenuType[]) {
    return list.map((item) => <li className="nav__menu-item" key={item.key}>{item.label}</li>);
  }

  return (
    <nav className="nav">
      <i className="fa fa-bars nav__icon" />
      <div className="nav__menu">
      <ul className="nav__list">{renderMenuList(menuList)}</ul>
      <Button type="primary">TAKE A TOUR</Button>
      </div>
    </nav>
  );
}
