import { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import { DataProvider } from "@context/DataContext";
import Footer from "@components/common/Footer/Footer";
import LoadingPage from "@components/common/LoadingPage/LoadingPage";
// Lazy-loaded
const Shop = lazy(() => import("@pages/Shop/Shop"));
const Home = lazy(() => import("@pages/Home/Home"));
const ProductDetail = lazy(() => import("@pages/ProductDetail/ProductDetail"));

const App: React.FC = memo(() => {
  return (
    // The context SWRConfig can provide global configurations (options) for all SWR hooks.
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <DataProvider>
        {/* Suspense: Show a <LoadingPage /> while the product list is loading */}
        <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/products/category/:id`} element={<Shop />} />
          <Route path="/products" element={<Shop />} />
          <Route path={`/products/:id`} element={<ProductDetail />} />
        </Routes>
        </Suspense>
      </DataProvider>
      <Footer />
    </SWRConfig>
  );
});

export default App;
