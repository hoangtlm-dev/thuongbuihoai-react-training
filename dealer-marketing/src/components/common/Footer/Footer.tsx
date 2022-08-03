import { MENU_CONTACT, MENU_SERVICES } from "@src/constants/menu";
import React from "react";
import Menu from "../Menu/Menu";
import styleFooter from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styleFooter.footer}>
      <Menu type="normal" menuList={MENU_CONTACT} />
      <div>
        <Menu type="normal" menuList={MENU_SERVICES} />
        <p className={styleFooter["footer-title"]}>
          Copyright &copy; 2022 Dealer Marketing Magazine
        </p>
      </div>
    </footer>
  );
};

export default Footer;
