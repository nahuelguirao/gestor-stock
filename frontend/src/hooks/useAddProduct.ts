import { ProductsContext } from "../context/ProductsContext";
import { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useAddProduct() {
  const navigate = useNavigate();
  const { dispatch } = useContext(ProductsContext);

  const handleAddProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Creates a newProduct object from entries
    const formData = new FormData(e.currentTarget);
    const newProduct = Object.fromEntries(formData);

    const action = {
      type: "ADD PRODUCT",
      payload: { ...newProduct, id: crypto.randomUUID() },
    };

    const LoadingToast = toast.loading("Adding product...");
    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        dispatch(action);
        toast.dismiss(LoadingToast);
        toast.success("Product added!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(LoadingToast);
      toast.error("Error adding product, try again.");
    }
  };

  return handleAddProduct;
}
