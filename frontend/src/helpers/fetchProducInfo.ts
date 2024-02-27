import { Product } from "../types/types";

export const getProductInfo = async (
  id: string | undefined,
  setProductInfo: (data: Product) => void,
  toast: any,
  navigate: (path: string) => void
) => {
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`);
    const data = await res.json();
    setProductInfo(data);

    if (!res.ok) {
      toast.error("Product not found");
      navigate("/");
    }
  } catch (error) {
    console.error(error);
  }
};
