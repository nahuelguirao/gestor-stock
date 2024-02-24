import { Dispatch, SetStateAction, createContext, ReactNode } from "react";
import { Product } from "../types/types";
import { useFetchProducts } from "../hooks/useFetchProducts";

//CREATE CONTEXT
interface productsContextProps {
  products: Product[] | null;
  setProducts: Dispatch<SetStateAction<Product[] | null>>;
  error: string | null;
  isLoading: boolean;
}

export const ProductsContext = createContext<productsContextProps>({
  products: null,
  setProducts: () => {},
  error: null,
  isLoading: false,
});

//PROVIDER
interface providerProps {
  children: ReactNode;
}

export const ProductsContextProvider = ({ children }: providerProps) => {
  const { products, setProducts, error, isLoading } = useFetchProducts();

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, error, isLoading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
