import { memo, useContext, useEffect } from "react";
import { PRODUCTS_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import { Product } from "@common-types/product";
import { DataContext } from "@context/DataContext";
import Header from "@components/common/Header/Header";
import Categories from "@components/Category/Categories";
import CardProductOffer from "@components/CardProduct/CardProductOffer/CardProductOffer";
import CardProductSelling from "@components/CardProduct/CardProductSelling/CardProductSelling";
import CardProductPopular from "@components/CardProduct/CardProductPopular/CardProductPopular";
import SignUpSection from "@components/SignUpSection/SignUpSection";
import useSWR from "swr";

const Home: React.FC = memo(() => {
  const { setProducts } = useContext(DataContext);
  const { data } = useSWR(PRODUCTS_URL, getData<Product[]>);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <>
      <Header />
      <Categories />
      <CardProductOffer />
      <CardProductSelling />
      <CardProductPopular />
      <SignUpSection />
    </>
  );
});

export default Home;
