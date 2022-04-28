import React, { useEffect, useState } from "react";
import axios from "axios";
import { cardImage } from "../../constants/card";
import Price from "../../components/Price/Price";
import Products from "../../components/ProductItem/Product";
import Title from "../../components/common/Title/Title";
import "./productList.css"
import { useLocation } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const location = useLocation()
  const category = location.state?location.state:""
  const image = location.state?location.state:""

  useEffect(() => {
    async function fetchMyAPI() {
      const result = await axios
      .get("products")
      .then(function (response) {
        console.log(response);
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    fetchMyAPI()
  }, [category])

  return (
    products.map(product =>
      <div className="product__list" key={product.id}>
        <div className="product__item">
          <Products product={product} />
          <div className="product__content">
            <Title className={""} value={product.name} />
            <Price value={product.price} />
          </div>
        </div>
      </div>
    )
  );
}