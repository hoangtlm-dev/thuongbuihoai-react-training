import React, { memo } from "react";
import { MENU_ABOUT, MENU_HELP, MENU_SERVICE } from "@constants/menu";
import MenuContact from "../MenuContact/MenuContact";
import url from "@assets/images/logos/logo.png";
import Logo from "../Logo/Logo";
import IconLink from "../IconLink/IconLink";
import ICON_LINK from "@constants/iconLink";
import "./footer.css";

const Footer: React.FC = memo(() => {
  return (
    <footer data-testid="footer" className="footer">
      <div className="footer__info">
        <div className="footer__contact">
          <div className="footer__item">
            <p className="footer__title">Services</p>
            <MenuContact menuList={MENU_SERVICE} />
          </div>
          <div className="footer__item">
            <p className="footer__title">About</p>
            <MenuContact menuList={MENU_ABOUT} />
          </div>
          <div className="footer__item">
            <p className="footer__title">Help</p>
            <MenuContact menuList={MENU_HELP} />
          </div>
        </div>
        <div className="footer__about">
          <p className="footer__service">Terms & Conditions</p>
          <p className="footer__service">Privacy Policy</p>
        </div>
      </div>
      <div className="footer__social">
        <Logo type="large" src={url} />
        <IconLink iconList={ICON_LINK} />
      </div>
    </footer>
  );
});

export default Footer;
