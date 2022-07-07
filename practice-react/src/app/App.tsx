import { memo } from "react";
import Header from "@components/common/Header/Header";
import Categories from "@components/Category/Categories";
import CardProductList from "@components/CardProduct/CardProductList/CardProductList";

const App: React.FC = memo(() => {
  return (
    <>
      <Header />
      <Categories />
      <CardProductList />
    </>
  );
});

export default App;
