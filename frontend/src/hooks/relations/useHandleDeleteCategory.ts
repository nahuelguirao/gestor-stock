import toast from "react-hot-toast";
import { BASE_URL } from "../../helpers/BASE_URL";

export function useHanldeDeleteCategory(
  setRefetch: any,
  productId: string | undefined
) {
  const handleDeleteCategory = async (categoryId: number) => {
    const waitingToast = toast.loading("Deleting category...");
    try {
      const res = await fetch(
        `${BASE_URL}/product-categories/${productId}/delete-category/${categoryId}`,
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
