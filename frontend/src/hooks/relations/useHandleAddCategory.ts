import { useState } from "react";
import toast from "react-hot-toast";

export function useHandleAddCategory() {
  const [refetch, setRefetch] = useState(false);

  const handleAddCategory = async (
    categoryId: number,
    productId: string | undefined
  ) => {
    const loadingToast = toast.loading("Adding category...");
    try {
      const res = await fetch(
        `http://localhost:3000/product-categories/${productId}/add-category/${categoryId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        toast.dismiss(loadingToast);
        toast.success("Category added!");
      }

      if (!res.ok) {
        toast.dismiss(loadingToast);
        toast.error("Category already added.");
      }

      setRefetch(!refetch);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Error adding category.");
      console.error(error);
    }
  };

  return { handleAddCategory, refetch, setRefetch };
}
