import { useParams } from "react-router";
import Loader from "../Components/Loader";
import useAxiosGet from "../Hooks/HttpRequest";

const Product = () => {
  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL + `products/${id}`;

  let product = useAxiosGet(url);

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
