import { useState } from "react";
import { Product } from "../../types/types";
import toast from "react-hot-toast";

export function useFilterByCategory() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [firstFilter, setFirstFilter] = useState(true);
  const [filtering, setFiltering] = useState<boolean>(false);

  const filterByCategory = async (categoryId: number) => {
    const waitingToast = toast.loading("Filtering products...");
    setFiltering(true);
    setFirstFilter(false);
    try {
      const res = await fetch(
        `http://localhost:3000/product-categories/${categoryId}/get-products`
      );

      const data = await res.json();

      if (res.ok) {
        toast.dismiss(waitingToast);
        toast.success("Products filtered!");
        setFilteredProducts(data);
      }
    } catch (error) {
      toast.dismiss(waitingToast);
      console.error(error);
      toast.error("Error filtering products.");
    } finally {
      setFiltering(false);
    }
  };

  return { filteredProducts, firstFilter, filtering, filterByCategory };
}
