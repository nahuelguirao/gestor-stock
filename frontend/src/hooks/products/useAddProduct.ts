import { ProductsContext } from "../../context/ProductsContext";
import { useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InputValues } from "../../types/types";
import toast from "react-hot-toast";
import { BASE_URL } from "../../helpers/BASE_URL";

export function useAddProduct(inputsValues: InputValues) {
  const { setRefetch } = useContext(ProductsContext);

  const navigate = useNavigate();

  const handleAddProduct = async (e: FormEvent) => {
    e.preventDefault();

    //Validations
    const { title, short_description, price, stock } = inputsValues;
    if (title.length >= 100) {
      toast.error("Title must be less than 100 characters.");
      return;
    }

    if (title.includes("/")) {
      toast.error("Title can't include '/'");
      return;
    }

    if (price.length > 7 || stock.toString().length > 5) {
      toast.error("Price or stock too long.");
      return;
    }

    if (parseInt(price) <= 0 || stock < 0) {
      toast.error("Price and stock must be positive numbers");
      return;
    }

    const LoadingToast = toast.loading("Adding product...");
    try {
      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, short_description, stock, price }),
      });

      if (res.ok) {
        toast.dismiss(LoadingToast);
        toast.success("Product added!");
        setRefetch((prevState: boolean) => !prevState);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(LoadingToast);
      toast.error("Error adding product, try again.");
    }
  };

  return { handleAddProduct };
}
