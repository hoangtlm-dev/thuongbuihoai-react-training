import { memo, useContext, useEffect } from "react";
import { PRODUCTS_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import { Product } from "@common-types/product";
import { DataContext } from "@context/DataContext";
import Header from "@components/common/Header/Header";
import Categories from "@components/CategoryCardList/CategoryCardList";
import SignUpSection from "@components/SignUpSection/SignUpSection";
import useSWR from "swr";
import ProductOffer from "@sections/ProductOffer/ProductOffer";
import ProductSelling from "@sections/ProductSelling/ProductSelling";
import ProductPopular from "@sections/ProductPopular/ProductPopular";

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
      <ProductOffer />
      <ProductSelling />
      <ProductPopular />
      <SignUpSection />
    </>
  );
});

export default Home;
