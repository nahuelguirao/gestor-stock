import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { Category, CategoryActions } from "../types/types";
import { useFetchCategories } from "../hooks/categories/useFetchCategories";

//CONTEXT
interface ContextProps {
  categoriesState: Category[];
  dispatch: (action: CategoryActions) => void;
  setRefetch: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  error: null | string;
}

export const CategoriesContext = createContext<ContextProps>({
  categoriesState: [],
  dispatch: () => {},
  setRefetch: () => {},
  isLoading: false,
  error: null,
});

//PROVIDER
interface ProviderProps {
  children: ReactNode;
}

export const CategoriesContextProvider = ({ children }: ProviderProps) => {
  const { categoriesState, dispatch, setRefetch, isLoading, error } =
    useFetchCategories();

  return (
    <CategoriesContext.Provider
      value={{ categoriesState, dispatch, setRefetch, isLoading, error }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
