import { useState, useEffect, useContext } from "react";
import { useDeleteProduct } from "./useDeleteProduct";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { getProductInfo } from "../../helpers/fetchProducInfo";
import { Product } from "../../types/types";

export function useProductDetails(id: string | undefined) {
  const navigate = useNavigate();

  //States
  const [productInfo, setProductInfo] = useState<Product | null>();
  const [isLoading, setIsLoading] = useState(false);

  //Async function to call 'getProductInfo'
  const callInfo = async () => {
    setIsLoading(true);
    const data = await getProductInfo(id, navigate);
    setProductInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    callInfo();
  }, []);

  //Gets handleDelete
  const { dispatch } = useContext(ProductsContext);
  const { handleDelete } = useDeleteProduct(
    dispatch,
    productInfo && productInfo.id
  );

  return { isLoading, productInfo, handleDelete };
}
