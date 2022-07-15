import React, { memo, useContext } from "react";
import { DataContext } from "@context/DataContext";
import { useParams } from "react-router-dom";
import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import background from "@assets/images/backgrounds/gray.png";
import Text from "@components/common/Text/Text";
import Price from "@components/common/Price/Price";
import Counter from "@components/common/Counter/Counter";
import Button from "@components/common/Button/Button";
import ProductList from "@components/ProductList/ProductList";
import "./productDetail.css";

const ProductDetail: React.FC = memo(() => {
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const dataElement = products?.find((item) => item.productId === id);
  const productMore = products.filter((product) =>
    dataElement?.categoryId.includes(product.categoryId)
  );

  return (
    <div data-testid="product-detail" className="productDetail">
      <NavigationBar
        mode={{
          dark: true,
        }}
      />
      <figure>
        <img
          className="productDetail__image"
          src={dataElement?.images.src}
          alt={dataElement?.images.alt}
        />
        <img
          className="productDetail__background"
          src={background}
          alt="This is background"
        />
      </figure>
      <div className="productDetail__info">
        <Text text={dataElement?.productName} size="large" />
        <p className="productDetail__price">Price</p>
        <Price
          value={dataElement?.originalPrice.value}
          type="original"
          currency={dataElement?.originalPrice.currency}
        />
        <p className="productDetail__description"></p>
        <p className="productDetail__quantity">Quantity</p>
        <div className="productDetail__counter">
          <Counter counter={dataElement?.productQuantity} />
        </div>
        <div className="productDetail__btn">
          <Button text="Add to cart" type="large" />
        </div>
      </div>
      <div className="productDetail__more">
        <div className="productDetail__title">
          <Text text="Products you may like" decoration="dark" />
        </div>
        <div className="productDetail__productMore">
          <ProductList
            type="medium-box"
            content="quantity"
            visibleCounter={true}
            productList={productMore}
          />
        </div>
      </div>
    </div>
  );
});

export default ProductDetail;
