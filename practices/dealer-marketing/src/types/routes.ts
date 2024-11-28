export interface RouterType {
  key: string;
  label: string;
  url: string;
}

export enum RouterTypeProp {
  light = "light",
  dark = "dark",
  normal = "normal",
}

export interface RouterProps {
  menuList: RouterType[];
  type?: RouterTypeProp;
}
