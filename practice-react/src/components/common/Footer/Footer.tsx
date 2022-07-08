import React, { memo } from "react";
import { MENU_ABOUT, MENU_HELP, MENU_SERVICE } from "@constants/menu";
import MenuContact from "../Menu/MenuContact/MenuContact";
import url from "@assets/images/logos/logo.png";
import "./footer.css";
import Logo from "../Logo/Logo";
import Icon from "../Icon/Icon";

const Footer: React.FC = memo(() => {
  return (
    <footer className="footer">
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
        <div className="footer__social--group">
          <Icon iconName="fb" />
          <Icon iconName="twitter" />
          <Icon iconName="instagram" />
        </div>
      </div>
    </footer>
  );
});

export default Footer;
