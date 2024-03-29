import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { confirmDelete } from "../../helpers/confirmDelete";
import { BASE_URL } from "../../helpers/BASE_URL";

export function useDeleteProduct(dispatch: any, id: number | undefined | null) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const { isConfirmed } = await confirmDelete();

    if (isConfirmed) {
      const action = {
        type: "DELETE PRODUCT",
        payload: id,
      };

      const waitingToast = toast.loading("Deleting product...");

      try {
        const res = await fetch(`${BASE_URL}/products/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          toast.dismiss(waitingToast);
          dispatch(action);
          toast.success("Product deleted!");
          navigate("/");
        }
      } catch (error) {
        toast.dismiss(waitingToast);
        console.error(error);
        toast.error("Error deleting product.");
      }
    }
  };

  return { handleDelete };
}
