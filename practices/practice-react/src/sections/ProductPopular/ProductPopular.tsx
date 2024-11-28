import React, { memo, useContext } from "react";
import { DataContext } from "@context/DataContext";
import Text from "@components/common/Text/Text";
import ProductList from "@components/ProductList/ProductList";

const ProductPopular: React.FC = memo(() => {
  const { products } = useContext(DataContext);
  const productPopular = products?.filter((product) => product.popular);

  return (
    <div data-testid="card-product-popular" className="card-popular-list">
      <div className="card-popular-title">
        <Text text="Popular Products" decoration="dark" />
      </div>
      <div className="card-item-popular">
        <ProductList
          type="medium-box"
          content="quantity"
          visibleCounter={true}
          productList={productPopular}
        />
      </div>
    </div>
  );
});

export default ProductPopular;
