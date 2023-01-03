import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Loader from "../Components/Loader";

const Product = () => {
  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL + `products/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    const getProduct = async () => {
      setProduct({
        loading: true,
        data: null,
        error: false,
      });
      try {
        const response = await axios.get(url);
        setProduct({
          loading: false,
          data: response.data,
          error: false,
        });
      } catch (error) {
        setProduct({
          loading: false,
          data: null,
          error: true,
        });
      }
    };
    getProduct();
  }, [url]);

  let content = null;

  if (product.error) {
    content = <p>There was an error, please refresh or try again later</p>;
  }

  if (product.loading) {
    content = <Loader />;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].url} alt={product.data.name} />
        </div>
        <p className="text-xl font-bold mb-3">$ {product.data.price}</p>
        <p>{product.data.description}</p>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Product;
