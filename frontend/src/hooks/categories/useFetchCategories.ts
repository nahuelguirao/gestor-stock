import { useReducer, useEffect, useState } from "react";
import { categoriesReducer } from "../../reducer/categoriesReducer";

export function useFetchCategories() {
  //States
  const [categoriesState, dispatch] = useReducer(categoriesReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  //Fetch Categories
  const fetchCategories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:3000/categories/");
      const data = await res.json();

      dispatch({ type: "SET CATEGORIES", payload: data });
    } catch (error) {
      console.error(error);
      setError("Error getting categories.");
    } finally {
      setIsLoading(false);
    }
  };

  //Calls fetching
  useEffect(() => {
    fetchCategories();
  }, []);

  return { categoriesState, dispatch, isLoading, error };
}
