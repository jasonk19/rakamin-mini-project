import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const url = process.env.REACT_APP_API_URL + `products?page=1&limit=10`;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    const getProduct = async () => {
      setProducts({
        loading: true,
        data: null,
        error: false,
      });
      try {
        const response = await axios.get(url);
        setProducts({
          loading: false,
          data: response.data,
          error: false,
        });
      } catch (error) {
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      }
    };
    getProduct();
  }, [url]);

  let content = null;

  if (products.error) {
    content = <p>There was an error, please refresh or try again later</p>;
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      {content}
    </div>
  );
};

export default Home;
