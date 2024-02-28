import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export function useDeleteProduct(dispatch: any, id: number | undefined | null) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    //Dynamic alert to confirm deleting
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      background: "#202020",
      color: "#eee",
    });

    if (confirmResult.isConfirmed) {
      const action = {
        type: "DELETE PRODUCT",
        payload: id,
      };

      const waitingToast = toast.loading("Deleting product...");

      try {
        const res = await fetch(`http://localhost:3000/products/${id}`, {
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
