export interface MenuType {
  key: string;
  label: string;
  url: string;
}

export enum MenuTypeProp {
  light = "light",
  dark = "dark",
  normal = "normal",
}

export interface MenuProps {
  menuList: MenuType[];
  type?: MenuTypeProp;
}
