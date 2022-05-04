import { createContext, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Filter from "./components/Filter/Filter/Filter"
import Header from "./components/Header/Header"
import Navigation from "./components/common/Navigation/Navigation"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { logos } from "./constants/header"
import ProductList from "./pages/ProductList/ProductList"
import Footer from "./components/Footer/Footer"

export const ProductListContext = createContext(Function);
function App() {
  const [isReset, setIsReset] = useState(true)
  return (
    <ProductListContext.Provider value={setIsReset}>
      <Navigation />
      <Header url={logos.src} />
      <Filter />
      <Routes>
        <Route path="/" element={<ProductList isReset={isReset} setIsReset={setIsReset} />}/>
        <Route path="/detail" element={<ProductDetails />}/>
      </Routes>
      <Footer />
    </ProductListContext.Provider>
  )
}

export default App
