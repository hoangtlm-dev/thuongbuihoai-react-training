export interface MenuType {
  key: string;
  label: string;
  url: string;
}

export interface MenuProps {
  menuList: MenuType[];
}