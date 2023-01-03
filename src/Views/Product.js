import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL + `products/${id}`;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(url);
      setProduct(response.data);
    };
    getProduct();
  });

  let content = null;

  if (product) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
        <div>
          <img src={product.images[0].url} alt={product.name} />
        </div>
        <p className="text-xl font-bold mb-3">$ {product.price}</p>
        <p>{product.description}</p>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Product;
