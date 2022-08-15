export interface MenuType {
  key: string;
  label: string;
  url: string;
}

export enum MenuTypeProp {
  light = "menu-item-light",
  dark = "menu-item-dark",
  normal = "menu-item-normal",
}

export interface MenuProps {
  menuList: MenuType[];
  type?: MenuTypeProp;
}
