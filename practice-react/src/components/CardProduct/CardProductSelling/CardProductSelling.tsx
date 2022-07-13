import React, { memo, useContext } from "react";
import Text from "@components/common/Text/Text";
import CardProductList from "../CardProductList";
import { DataContext } from "@context/DataContext";

const CardProductSelling: React.FC = memo(() => {
  const { products } = useContext(DataContext);
  const productBestSelling = products?.filter((product) => product.bestSelling === true);

  return (
    <div data-testid="card-product-selling" className="cardProductSellingList">
      <div className="cardProductSelling__title">
        <Text text="Best Selling Products" type="large" />
      </div>
      <div className="card__item--selling">
        <CardProductList
          type="selling"
          content="selling"
          visibleCounter={true}
          productList={productBestSelling}
        />
      </div>
    </div>
  );
});

export default CardProductSelling;
