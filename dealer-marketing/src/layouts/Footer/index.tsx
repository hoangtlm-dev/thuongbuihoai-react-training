import React from "react";
import { MENU_CONTACT, MENU_SERVICES } from "@constants/menu";
import { Menu } from "@components/common";
import styleFooter from "./footer.module.css";
import { MenuTypeProp } from "@common-types/menu";

const Footer: React.FC = () => (
  <footer data-testid="footer" className={styleFooter.footer}>
    <Menu type={MenuTypeProp.normal} menuList={MENU_CONTACT} />
    <div>
      <Menu type={MenuTypeProp.normal} menuList={MENU_SERVICES} />
      <p className={styleFooter["footer-title"]}>
        Copyright &copy; 2022 Dealer Marketing Magazine
      </p>
    </div>
  </footer>
);

export default Footer;
