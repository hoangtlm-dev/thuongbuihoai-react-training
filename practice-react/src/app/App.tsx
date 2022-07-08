import { memo } from "react";
import Header from "@components/common/Header/Header";
import Categories from "@components/Category/Categories";
import CardProductList from "@components/CardProduct/CardProductOffer/CardProductOffer";
import CardProductSelling from "@components/CardProduct/CardProductSelling/CardProductSelling";
import CardPopular from "@components/CardProduct/CardPopular/CardPopular";
import SignUpSection from "@components/SignUpSection/SignUpSection";
import Footer from "@components/common/Footer/Footer";

const App: React.FC = memo(() => {
  return (
    <>
      <Header />
      <Categories />
      <CardProductList />
      <CardProductSelling />
      <CardPopular />
      <SignUpSection />
      <Footer />
    </>
  );
});

export default App;
