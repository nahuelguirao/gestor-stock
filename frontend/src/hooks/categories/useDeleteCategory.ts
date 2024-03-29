import toast from "react-hot-toast";
import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import { confirmDelete } from "../../helpers/confirmDelete";
import { BASE_URL } from "../../helpers/BASE_URL";

export function useDeleteCategory() {
  const { dispatch } = useContext(CategoriesContext);

  const handleDelete = async (id: number) => {
    //Confirm delete alert
    const { isConfirmed } = await confirmDelete();

    if (isConfirmed) {
      const waitingToast = toast.loading("Deleting category...");

      try {
        const res = await fetch(`${BASE_URL}/categories/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          toast.dismiss(waitingToast);
          dispatch({ type: "DELETE CATEGORY", payload: id });
          toast.success("Category deleted!");
        }
      } catch (error) {
        toast.dismiss(waitingToast);
        console.error(error);
        toast.error("Error deleting category.");
      }
    }
  };

  return { handleDelete };
}
