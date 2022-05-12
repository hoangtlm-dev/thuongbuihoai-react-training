import Header from "@/components/Header/Header";
import url from "@/assets/images/appleIceCream.jpg";
import { USERS } from "@/constants/header";
import Footer from "@/components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import SelectByCategory from "./components/Selects/SelectByCategory/SelectByCategory";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MainContext from "./context/LoadingContext";

const App: React.FC = () => {
  return (
    <>
      <Header username={USERS.username} image={url} />
      <MainContext>
        <Navigation />
        <SelectByCategory />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Routes>
      </MainContext>
      <Footer />
    </>
  );
}

export default App;
