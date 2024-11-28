import { RouterProps, RouterTypeProp, RouterType } from "@self-types/routes";
import Link from "next/link";
import React, { memo } from "react";
import menuStyle from "./menu.module.css";

const Menu: React.FC<RouterProps> = ({
  menuList,
  type = RouterTypeProp.dark,
}) => {
  const renderMenuList = (list: RouterType[]) => {
    return list?.map((item) => (
      <li className={menuStyle[`menu-item-${type}`]} key={item.key}>
        <Link href={item.url}>{item.label}</Link>
      </li>
    ));
  };

  return (
    <ul data-testid="menu" className={menuStyle["menu-list"]}>
      {renderMenuList(menuList)}
    </ul>
  );
};

export default memo(Menu);
