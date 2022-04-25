import CardItem from "./components/Card/CardItem/CardItem"
import Header from "./components/Header/Header"
import { logos } from "./constants/header"

function App() {

  return (
    <>
      <Header url={logos.src} />
      <CardItem />
    </>
  )
}

export default App
