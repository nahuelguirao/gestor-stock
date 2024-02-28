import { FormEvent, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useEditProducts(id: string | undefined, inputsValues: any) {
  const { setRefetch } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Validations
    const { title, short_description, price, stock } = inputsValues;
    if (title.length >= 100) {
      toast.error("Title must be less than 100 characters.");
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

    //Waiting alert...
    const waitingToast = toast.loading("Updating product...");

    //Tries update
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          short_description,
          stock,
          price,
        }),
      });

      if (res.ok) {
        toast.dismiss(waitingToast);
        setRefetch((prev: boolean) => !prev);
        toast.success("Product updated!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(waitingToast);
      toast.error("Error updating product.");
    }
  };

  return handleSubmit;
}
