import CardItem from "./components/Card/CardItem/CardItem"
import Filter from "./components/Filter/Filter/Filter"
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import { logos } from "./constants/header"

function App() {

  return (
    <>
      <Navigation />
      <Header url={logos.src} />
      <Filter />
      <CardItem />
    </>
  )
}

export default App
