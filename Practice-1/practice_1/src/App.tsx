import Header from "./components/header/Header";
import Plan from "./components/section/plan/Plan";
import { CARD_LIST } from "./constants/card";
import MENU_LIST from "./constants/menu";
import { MAIN_TEXT } from "./stories/Description.stories";
import menuBar from "./assets/images/icons/menuBar.svg"


function App(): JSX.Element {
  return (
    <>
    <Header
        children1="HOFMANN"
        children2="What Makes A Hotel Boutique"
        children3="EXPLORE"
        MAIN_TEXT={MAIN_TEXT}
        menuList={MENU_LIST}
        menuBar={menuBar} />
    <Plan planTitle={"Subscribing Plans"} cardList={CARD_LIST} /></>
  )
}

export default App
