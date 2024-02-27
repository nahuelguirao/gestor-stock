import { useState, useEffect } from "react";
import { fetchProducts } from "../helpers/fetchAllProducts";

export function useFetchProducts(
  dispatch: (action: any) => void,
  refetch: boolean
) {
  //States
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Function to call fetchProducts and manage states
  const getProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetchProducts();

      if (!res.ok) {
        throw new Error("Error fetching products");
      }

      const resultProducts = await res.json();

      //Declarates and execute 'SET PRODUCTS' in the reducer
      const action = {
        type: "SET PRODUCTS",
        payload: resultProducts,
      };

      dispatch(action);
    } catch (error) {
      console.error(error);
      setError("Error Fetching Products");
    } finally {
      setIsLoading(false);
    }
  };

  //Calls once GetProducts
  useEffect(() => {
    getProducts();
  }, [refetch]);

  return { error, isLoading, setError, setIsLoading };
}
