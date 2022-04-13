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


function App(): JSX.Element {
  return (
    <>
    <Header
      children1="HOFMANN" children2="What Makes A Hotel Boutique" children3="EXPLORE"
      MAIN_TEXT={MAIN_TEXT}
      menuList={MENU_LIST}
      menuBar={menuBar} 
    />
    <Plan planTitle={"Subscribing Plans"} cardList={CARD_LIST} />
    <Feature headingTitle = "Features" text = "We're taking it to the next level" list={FEATURE} imageDesktop = {imageDesktop} />
    <Result title="Stunning Results" text={RESULT_TEXT} list={RESULT}
  />
    </>
  )
}

export default App
