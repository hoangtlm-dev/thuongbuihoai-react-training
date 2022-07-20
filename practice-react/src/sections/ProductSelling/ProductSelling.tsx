import React, { memo, useContext } from "react";
import { DataContext } from "@context/DataContext";
import Text from "@components/common/Text/Text";
import CardProductList from "@components/ProductList/ProductList";

const ProductSelling: React.FC = memo(() => {
  const { products } = useContext(DataContext);
  const productBestSelling = products?.filter((product) => product.bestSelling);

  return (
    <div data-testid="card-product-selling" className="card-product-selling-list">
      <div className="card-product-selling-title">
        <Text text="Best Selling Products" size="large" decoration="" />
      </div>
      <div className="card-item-selling">
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
