import React, { memo, useContext } from "react";
import { DataContext } from "@context/DataContext";
import Text from "@components/common/Text/Text";
import CardProductList from "../CardProductList";

const CardProductPopular: React.FC = memo(() => {
  const { products } = useContext(DataContext);
  const productPopular = products?.filter((product) => product.popular === true);

  return (
    <div data-testid="card-product-popular" className="cardPopularList">
      <div className="cardPopular__title">
        <Text text="Popular Products" type="large-dark" />
      </div>
      <div className="card__item--popular">
        <CardProductList
          type="popular"
          content="popular"
          visibleCounter={true}
          productList={productPopular}
        />
      </div>
    </div>
  );
});

export default CardProductPopular;
