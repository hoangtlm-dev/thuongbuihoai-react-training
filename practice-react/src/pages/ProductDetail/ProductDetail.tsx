import React, { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { useParams } from "react-router-dom";
import { Text, Button, Price, Counter, NavigationBar } from "@components/common/index";
import background from "@assets/images/backgrounds/gray.png";
import ProductList from "@components/ProductList/ProductList";
import "./productDetail.css";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const dataElement = products?.find((item) => item.productId === id);
  const productMore = products.filter((product) =>
    dataElement?.categoryId.includes(product.categoryId)
  );

  return (
    <div data-testid="product-detail" className="product-detail">
      <NavigationBar mode="dark" />
      <figure>
        <img
          className="product-detail-image"
          src={dataElement?.images.src}
          alt={dataElement?.images.alt}
        />
        <img
          className="product-detail-background"
          src={background}
          alt="This is background"
        />
      </figure>
      <div className="product-detail-info">
        <Text text={dataElement?.productName} size="large" decoration="" />
        <p className="product-detail-price">Price</p>
        <Price
          value={dataElement?.originalPrice.value}
          type="original"
          currency={dataElement?.originalPrice.currency}
        />
        <p className="product-detail-description"></p>
        <p className="product-detail-quantity">Quantity</p>
        <div className="product-detail-counter">
          <Counter counter={dataElement?.productQuantity} />
        </div>
        <div className="product-detail-btn">
          <Button text="Add to cart" type="large" />
        </div>
      </div>
      <div className="product-detail-more">
        <div className="product-detail-title">
          <Text text="Products you may like" decoration="dark" size="" />
        </div>
        <div className="product-detail-product-more">
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
};

export default ProductDetail;
