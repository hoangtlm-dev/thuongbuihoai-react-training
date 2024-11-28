import React, { memo } from "react";
import { MenuProps, MenuType } from "@common-types/menu";

const MenuContact: React.FC<MenuProps> = memo(({ menuList }) => {
  const renderContactList = (list: MenuType[]) => {
    return list.map((item) => (
      <li className="contact-item" key={item.key}>
        <a href={item.url}>{item.label}</a>
      </li>
    ));
  }

  return (
    <div data-testid="contact" className="contact">
      <ul className="contact-list">
        {renderContactList(menuList)}
      </ul>
    </div>
  );
});

export default MenuContact;