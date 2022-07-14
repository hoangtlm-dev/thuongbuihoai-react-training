import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import { DataProvider } from "@context/DataContext";
import Footer from "@components/common/Footer/Footer";
import ProductDetail from "@pages/ProductDetail/ProductDetail";
import Home from "@pages/Home/Home";
import Shop from "@pages/Shop/Shop";

const App: React.FC = memo(() => {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/products/category/:id`} element={<Shop />} />
          <Route path="/products" element={<Shop />} />
          <Route path={`/products/:id`} element={<ProductDetail />} />
        </Routes>
      </DataProvider>
      <Footer />
    </SWRConfig>
  );
});

export default App;
