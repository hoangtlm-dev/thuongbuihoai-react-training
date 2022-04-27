import { useState } from "react"
import CardItem from "./pages/CardItem/CardItem"
import { Routes, Route } from "react-router-dom"
import Filter from "./components/Filter/Filter/Filter"
import Header from "./components/Header/Header"
import Navigation from "./components/common/Navigation/Navigation"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { cardImage } from "./constants/card"
import { logos } from "./constants/header"

function App() {
  return (
    <>
      <Navigation />
      <Header url={logos.src} />
      <Filter />
      <Routes>
        <Route path="/" element={<CardItem />}/>
      </Routes>
      <Routes>
        <Route path="/detail" element={<ProductDetails productId="1" image={cardImage} />}/>
      </Routes>
    </>
  )
}

export default App
