import Header from "./components/header/Header";
import Plan from "./components/section/plan/Plan";
import { CARD_LIST } from "./constants/card";
import MENU_LIST from "./constants/menu";
import { FEATURE, MAIN_TEXT } from "./constants/feature";
import menuBar from "./assets/images/icons/menuBar.svg"
import Feature from "./components/section/feature/Feature";
import imageDesktop from "./assets/images/computer.png";
import Result from "./components/section/result/Result";
import { RESULT, RESULT_TEXT } from "./constants/result";
import INPUT_LIST from "./constants/input";
import Account from "./components/section/account/Account";
import Footer from "./components/footer/Footer";
import { FOOTER_CONTACT, FOOTER_MEDIUM, FOOTER_TEXT } from "./constants/footer";
import ABOUT_US from "./constants/about";
import { BUTTON_CONTACT } from "./constants/buttonContact";


function App(): JSX.Element {
  return (
    <>
      <Header mainText={MAIN_TEXT} menuList={MENU_LIST} menuBar={menuBar} />
      <Plan cardList={CARD_LIST} />
      <Feature list={FEATURE} imageDesktop={imageDesktop} />
      <Result text={RESULT_TEXT} list={RESULT} />
      <Account list={INPUT_LIST} />
      <Footer contact={BUTTON_CONTACT} footerText={FOOTER_TEXT} aboutUs={ABOUT_US} footerContact={FOOTER_CONTACT} infoContact={FOOTER_MEDIUM.contact} />
    </>
  )
}

export default App
