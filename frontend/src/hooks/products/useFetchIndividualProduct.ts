import { useState, useEffect, ChangeEvent } from "react";
import { getProductInfo } from "../../helpers/fetchProducInfo";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/types";

export function useFetchIndividualProduct(id: string | undefined) {
  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState<Product | undefined>();
  const [inputsValues, setInputsValues] = useState({
    title: "",
    short_description: "",
    stock: 0,
    price: "0",
  });

  useEffect(() => {
    //Gets product data
    getProductInfo(id, navigate, setProductInfo);
  }, []);

  //Sets the product's data in inputs values
  useEffect(() => {
    if (productInfo) {
      setInputsValues({
        title: productInfo.title,
        short_description: productInfo.short_description ?? "",
        stock: productInfo.stock,
        price: productInfo.price,
      });
    }
  }, [productInfo]);

  //Mangage inputs changes
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputsValues({
      ...inputsValues,
      [event.target.name]: event.target.value,
    });
  };

  return { inputsValues, handleChange };
}
