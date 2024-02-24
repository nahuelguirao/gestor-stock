import { useState, useEffect } from "react";
import { fetchProducts } from "../helpers/dataFetchs";
import { Product } from "../types/types";

export function useFetchProducts() {
  //Products, error and loading states
  const [products, setProducts] = useState<Product[] | null>(null);
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

      setProducts(resultProducts);
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
  }, []);

  return { products, setProducts, error, isLoading };
}
