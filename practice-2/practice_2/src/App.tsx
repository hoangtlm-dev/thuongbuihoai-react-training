import { createContext, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Filter from "./components/Filter/Filter/Filter"
import Header from "./components/Header/Header"
import Navigation from "./components/common/Navigation/Navigation"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { logos } from "./constants/header"
import ProductList from "./pages/ProductList/ProductList"
import Footer from "./components/Footer/Footer"
import fetchProduct from "./hooks/fetchProduct"

export const ProductListContext = createContext({});
function App() {
  const [isReset, setIsReset] = useState<Boolean>(true)
  const [filterInput, setFilterInput] = useState("")

  const products = fetchProduct(isReset, setIsReset, filterInput)

  return (
    <ProductListContext.Provider value={setIsReset}>
      <Navigation isReset={isReset} setIsReset={setIsReset} setFilterInput={setFilterInput} />
      <Header url={logos.src} />
      <Filter isReset={isReset} setIsReset={setIsReset} setFilterInput={setFilterInput} />
      <Routes>
        <Route path="/" element={<ProductList products={products} isReset={isReset} setIsReset={setIsReset} />}/>
        <Route path="/detail" element={<ProductDetails />}/>
      </Routes>
      <Footer />
    </ProductListContext.Provider>
  )
}

export default App
