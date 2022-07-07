import { memo } from "react";
import Header from "@components/common/Header/Header";
import Categories from "@components/Category/Categories";
import CardProductList from "@components/CardProduct/CardProductList/CardProductList";
import CardProductSelling from "@components/CardProduct/CardProductSelling/CardProductSelling";

const App: React.FC = memo(() => {
  return (
    <>
      <Header />
      <Categories />
      <CardProductList />
      <CardProductSelling />
    </>
  );
});

export default App;
