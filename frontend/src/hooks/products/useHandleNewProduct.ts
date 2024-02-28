import { useState, ChangeEvent } from "react";

export function useHandleNewProduct() {
  const [inputsValues, setInputsValues] = useState({
    title: "",
    short_description: "",
    stock: 0,
    price: "0",
  });

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
