import React, { memo, useContext } from "react";
import { DataContext } from "@context/DataContext";
import Text from "@components/common/Text/Text";
import CardProductList from "@components/ProductList/ProductList";

const ProductSelling: React.FC = memo(() => {
  const { products } = useContext(DataContext);
  const productBestSelling = products?.filter((product) => product.bestSelling === true);

  return (
    <div data-testid="card-product-selling" className="cardProductSellingList">
      <div className="cardProductSelling__title">
        <Text text="Best Selling Products" size="large" />
      </div>
      <div className="card__item--selling">
        <CardProductList
          type="medium"
          content="quantity"
          visibleCounter={true}
          productList={productBestSelling}
        />
      </div>
    </div>
  );
});

export default ProductSelling;
