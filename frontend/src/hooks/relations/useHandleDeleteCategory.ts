import toast from "react-hot-toast";

export function useHanldeDeleteCategory(
  setRefetch: any,
  productId: string | undefined
) {
  const handleDeleteCategory = async (categoryId: number) => {
    const waitingToast = toast.loading("Deleting category...");
    try {
      const res = await fetch(
        `http://localhost:3000/product-categories/${productId}/delete-category/${categoryId}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setRefetch((prev: boolean) => !prev);
        toast.dismiss(waitingToast);
        toast.success("Category deleted!");
      }
    } catch (error) {
      toast.dismiss(waitingToast);
      toast.error("Error deleting category.");
      console.error(error);
    }
  };

  return { handleDeleteCategory };
}
