import { memo } from "react";
import Header from "@components/common/Header/Header";
import Categories from "@components/Category/Categories";

const App: React.FC = memo(() => {
  return (
    <>
      <Header />
      <Categories />
    </>
  );
});

export default App;
