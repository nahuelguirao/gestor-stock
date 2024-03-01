import { useEffect, useState } from "react";
import { BASE_URL } from "../../helpers/BASE_URL";

export function useGetProductsCategoriesSimpler(id: string | undefined) {
  const [productCategories, setProductCategories] = useState([]);
  const getProductsCategories = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/product-categories/${id}/get-categories`
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
