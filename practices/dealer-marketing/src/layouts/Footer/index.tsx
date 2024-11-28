import React from "react";
import { ROUTER_CONTACT, ROUTER_SERVICES } from "@constants/routes";
import { Menu } from "@components/common";
import { Text } from "@components/common";
import styleFooter from "./footer.module.css";
import { RouterTypeProp } from "@self-types/routes";

const Footer: React.FC = () => (
  <footer data-testid="footer" className={styleFooter.footer}>
    <Menu type={RouterTypeProp.normal} menuList={ROUTER_CONTACT} />
    <div>
      <Menu type={RouterTypeProp.normal} menuList={ROUTER_SERVICES} />
      <div className={styleFooter["footer-title"]}>
        <Text text="Copyright &copy; 2022 Dealer Marketing Magazine" />
      </div>
    </div>
  </footer>
);

export default Footer;
