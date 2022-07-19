import React, { useContext } from "react";
import { DataContext } from "@context/DataContext";
import Text from "@components/common/Text/Text";
import ProductList from "@components/ProductList/ProductList";

const ProductOffer: React.FC = () => {
  const { products } = useContext(DataContext);
  const productOffer = products?.filter((product) => product.offer);

  return (
    <div data-testid="card-product-offer" className="cardOffersList">
      <div className="cardOffersList__title">
        <Text text="Offers" size="large" />
      </div>
      <div className="card__item--offers">
        <ProductList
          type="normal"
          content="discount"
          productList={productOffer}
          visibleQuantity={true}
          visibleDiscountPrice={true}
        />
      </div>
    </div>
  );
};

export default ProductOffer;
