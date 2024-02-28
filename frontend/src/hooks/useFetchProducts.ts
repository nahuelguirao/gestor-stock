import { useState, useEffect, useReducer } from "react";
import { fetchProducts } from "../helpers/fetchAllProducts";
import { productsReducer } from "../reducer/productsReducer";
import { Actions } from "../types/types";

export function useFetchProducts(refetch: boolean) {
  //States
  const [actualProducts, dispatch] = useReducer(productsReducer, []);
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
      const action: Actions = {
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

  return { actualProducts, dispatch, error, isLoading, setError, setIsLoading };
}
