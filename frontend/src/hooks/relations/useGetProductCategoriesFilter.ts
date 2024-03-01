import { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import { Category } from "../../types/types";
import { BASE_URL } from "../../helpers/BASE_URL";

export function useGetProductsCategoriesFilter(
  refetch: boolean,
  productId: string | undefined
) {
  const { categoriesState } = useContext(CategoriesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [alreadyCategories, setAlreadyCategories] = useState([]);
  const [availableCategories, setAvailableCategories] = useState<Category[]>(
    []
  );

  const getProductCategories = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${BASE_URL}/product-categories/${productId}/get-categories`
      );

      const data = await res.json();
      setAlreadyCategories(data);

      const filteredCategories = categoriesState.filter(
        (category) =>
          !data.some(
            (alreadyCategory: Category) =>
              alreadyCategory.name === category.name
          )
      );
      setAvailableCategories(filteredCategories);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductCategories();
  }, [refetch]);

  return { alreadyCategories, availableCategories, isLoading };
}
