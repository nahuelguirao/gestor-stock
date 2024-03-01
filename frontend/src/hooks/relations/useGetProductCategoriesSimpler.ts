import { useEffect, useState } from "react";

export function useGetProductsCategoriesSimpler(id: string | undefined) {
  const [productCategories, setProductCategories] = useState([]);
  const getProductsCategories = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/product-categories/${id}/get-categories`
      );

      const data = await res.json();

      setProductCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductsCategories();
  }, []);

  return { productCategories };
}
