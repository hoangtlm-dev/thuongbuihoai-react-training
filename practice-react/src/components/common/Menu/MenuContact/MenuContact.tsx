import React, { memo } from "react";
import { MenuProps, MenuType } from "@common-types/menu";

const MenuContact: React.FC<MenuProps> = memo(({ menuList }) => {
  const renderContactList = (list: MenuType[]) => {
    return list.map((item) => (
      <li className="contact__item" key={item.key}>
        <a href="">{item.label}</a>
      </li>
    ));
  }

  return (
    <div data-testid="contact" className="contact">
      <ul className="contact__list">
        {renderContactList(menuList)}
      </ul>
    </div>
  );
});

export default MenuContact;