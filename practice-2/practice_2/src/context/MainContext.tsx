import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import SelectByCategory from "../components/Selects/SelectByCategory/SelectByCategory";
import useProduct from "../hooks/useProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductList from "../pages/ProductList/ProductList";

export const ProductListContext = createContext({});
const MainContext: React.FC = () => {
  const [isReload, setIsReload] = useState(true)
  const [filterInput, setFilterInput] = useState("");
  const products = useProduct(isReload, setIsReload, filterInput);

  return (
    <ProductListContext.Provider value={setIsReload}>
      <Navigation setFilterInput={setFilterInput} />
      <SelectByCategory setFilterInput={setFilterInput} />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/detail" element={<ProductDetails />} />
      </Routes>
    </ProductListContext.Provider>
  )
}

export default MainContext;
