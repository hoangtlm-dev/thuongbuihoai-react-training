import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SelectByCategory from "./components/Selects/SelectByCategory/SelectByCategory";
import Header from "./components/Header/Header";
import url from "./assets/images/appleIceCream.jpg";
import Navigation from "./components/Navigation/Navigation";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { USERS } from "./constants/header";
import ProductList from "./pages/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import useProduct from "./hooks/useProduct";

export const ProductListContext = createContext({});
const App: React.FC = () => {
  const [filterInput, setFilterInput] = useState("");
  const products = useProduct(filterInput);

  return (
    <>
      <Navigation setFilterInput={setFilterInput} />
      <Header username={USERS.username} image={url} />
      <SelectByCategory setFilterInput={setFilterInput} />
      <Routes>
        <Route path="/" element={<ProductList products={products} />}/>
        <Route path="/detail" element={<ProductDetails />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
