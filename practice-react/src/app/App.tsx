import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import { DataProvider } from "@context/DataContext";
import Header from "@components/common/Header/Header";
import Categories from "@components/Category/Categories";
import CardProductOffer from "@components/CardProduct/CardProductOffer/CardProductOffer";
import CardProductSelling from "@components/CardProduct/CardProductSelling/CardProductSelling";
import CardProductPopular from "@components/CardProduct/CardProductPopular/CardProductPopular";
import SignUpSection from "@components/SignUpSection/SignUpSection";
import Footer from "@components/common/Footer/Footer";
import ProductList from "@pages/ProductList/ProductList";
import ProductDetail from "@pages/ProductDetail/ProductDetail";

const App: React.FC = memo(() => {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <DataProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Categories />
                <CardProductOffer />
                <CardProductSelling />
                <CardProductPopular />
                <SignUpSection />
              </>
            }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path={`/products/:id`} element={<ProductDetail />} />
        </Routes>
      </DataProvider>
      <Footer />
    </SWRConfig>
  );
});

export default App;
