import {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
  useState,
} from "react";
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
  setRefetch: Dispatch<any>;
}

export const ProductsContext = createContext<productsContextProps>({
  products: null,
  error: null,
  isLoading: false,
  dispatch: () => {},
  setError: () => {},
  setIsLoading: () => {},
  setRefetch: () => {},
});

//PROVIDER
interface providerProps {
  children: ReactNode;
}

export const ProductsContextProvider = ({ children }: providerProps) => {
  //If is needed a refetch
  const [refetch, setRefetch] = useState(false);

  //Products REDUCER
  const [actualProducts, dispatch] = useReducer(productsReducer, []);

  //Error and loading from initial products fetch
  const { error, isLoading, setError, setIsLoading } = useFetchProducts(
    dispatch,
    refetch
  );

  return (
    <ProductsContext.Provider
      value={{
        products: actualProducts,
        error,
        isLoading,
        dispatch,
        setError,
        setIsLoading,
        setRefetch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
