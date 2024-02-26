import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { productsReducer } from "../reducer/productsReducer";
import { Product } from "../types/types";

//CREATE CONTEXT
interface productsContextProps {
  products: Product[] | null;
  error: string | null;
  isLoading: boolean;
  dispatch: (action: any) => void;
  setError: Dispatch<string | null>;
  setIsLoading: Dispatch<boolean>;
}

export const ProductsContext = createContext<productsContextProps>({
  products: null,
  error: null,
  isLoading: false,
  dispatch: () => {},
  setError: () => {},
  setIsLoading: () => {},
});

//PROVIDER
interface providerProps {
  children: ReactNode;
}

export const ProductsContextProvider = ({ children }: providerProps) => {
  //Products REDUCER
  const [actualProducts, dispatch] = useReducer(productsReducer, []);

  //Error and loading from initial products fetch
  const { error, isLoading, setError, setIsLoading } =
    useFetchProducts(dispatch);

  return (
    <ProductsContext.Provider
      value={{
        products: actualProducts,
        error,
        isLoading,
        dispatch,
        setError,
        setIsLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
