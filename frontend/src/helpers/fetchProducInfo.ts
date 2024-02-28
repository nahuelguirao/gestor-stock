import { Product } from "../types/types";
import toast from "react-hot-toast";

export const getProductInfo = async (
  id: string | undefined,
  navigate: (path: string) => void,
  setProductInfo?: (data: Product) => void
) => {
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`);
    const data = await res.json();
    setProductInfo && setProductInfo(data);

    if (!res.ok) {
      toast.error("Product not found");
      navigate("/");
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
