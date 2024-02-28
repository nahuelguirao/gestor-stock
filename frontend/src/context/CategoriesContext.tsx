import { ReactNode, createContext } from "react";
import { Category, CategoryActions } from "../types/types";
import { useFetchCategories } from "../hooks/categories/useFetchCategories";

//CONTEXT
interface ContextProps {
  categoriesState: Category[];
  dispatch: (action: CategoryActions) => void;
  isLoading: boolean;
  error: null | string;
}

export const CategoriesContext = createContext<ContextProps>({
  categoriesState: [],
  dispatch: () => {},
  isLoading: false,
  error: null,
});

//PROVIDER
interface ProviderProps {
  children: ReactNode;
}

export const CategoriesContextProvider = ({ children }: ProviderProps) => {
  const { categoriesState, dispatch, isLoading, error } = useFetchCategories();

  return (
    <CategoriesContext.Provider
      value={{ categoriesState, dispatch, isLoading, error }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
