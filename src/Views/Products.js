import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import useAxiosGet from "../Hooks/HttpRequest";

const Products = () => {
  const url = process.env.REACT_APP_API_URL + `products?page=1&limit=10`;

  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = <p>There was an error, please refresh or try again later</p>;
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = (
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-3">
        {products.data.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
        ;
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      {content}
    </div>
  );
};

export default Products;
