import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosGet = (url) => {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    const getProduct = async () => {
      setRequest({
        loading: true,
        data: null,
        error: false,
      });
      try {
        const response = await axios.get(url);
        setRequest({
          loading: false,
          data: response.data,
          error: false,
        });
      } catch (error) {
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      }
    };
    getProduct();
  }, [url]);

  return request;
};

export default useAxiosGet;
