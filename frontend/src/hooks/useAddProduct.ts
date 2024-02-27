import { ProductsContext } from "../context/ProductsContext";
import { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useAddProduct() {
  const navigate = useNavigate();
  const { dispatch, setRefetch } = useContext(ProductsContext);

  const handleAddProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Creates a newProduct object from entries
    const formData = new FormData(e.currentTarget);
    const newProduct = Object.fromEntries(formData);

    //Gets inputs value
    const title = formData.get("title");
    const stock = formData.get("stock");
    const price = formData.get("price");

    //Validations
    if (typeof price === "string" && typeof stock === "string") {
      const priceNumber = parseInt(price, 10);
      const stockNumber = parseInt(stock, 10);

      if (
        isNaN(priceNumber) ||
        isNaN(stockNumber) ||
        priceNumber <= 0 ||
        stockNumber < 0
      ) {
        toast.error("Stock and price must be positive numbers.");
        return;
      }

      if (stock.length > 5 || price.length >= 10) {
        toast.error("Stock or price too long.");
        return;
      }
    }

    if (typeof title === "string") {
      if (title.length >= 100) {
        toast.error("Title length must be fewer than 100 characters.");
        return;
      }
    }

    //Prepare action for the reducer
    const action = {
      type: "ADD PRODUCT",
      payload: newProduct,
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
        setRefetch((prevState: boolean) => !prevState);
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
