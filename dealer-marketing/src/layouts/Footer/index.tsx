import React from "react";
import { ROUTER_CONTACT, ROUTER_SERVICES } from "@constants/routes";
import { Menu } from "@components/common";
import styleFooter from "./footer.module.css";
import { RouterTypeProp } from "@common-types/routes";

const Footer: React.FC = () => (
  <footer data-testid="footer" className={styleFooter.footer}>
    <Menu type={RouterTypeProp.normal} menuList={ROUTER_CONTACT} />
    <div>
      <Menu type={RouterTypeProp.normal} menuList={ROUTER_SERVICES} />
      <p className={styleFooter["footer-title"]}>
        Copyright &copy; 2022 Dealer Marketing Magazine
      </p>
    </div>
  </footer>
);

export default Footer;
