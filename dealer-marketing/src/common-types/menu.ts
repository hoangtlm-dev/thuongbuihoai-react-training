export interface MenuType {
  key: string;
  label: string;
  url: string;
}

export enum MenuTypeProp {
  light = "item-light",
  dark = "item-dark",
  normal = "item-normal",
}

export interface MenuProps {
  menuList: MenuType[];
  type?: MenuTypeProp;
}
