import { Product } from "../types/types";
import toast from "react-hot-toast";
import { BASE_URL } from "./BASE_URL";

export const getProductInfo = async (
  id: string | undefined,
  navigate: (path: string) => void,
  setProductInfo?: (data: Product) => void
) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
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
