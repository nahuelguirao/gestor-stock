import toast from "react-hot-toast";

export function useDeleteProduct(dispatch: any, id: number) {
  const handleDelete = async () => {
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
      } else {
        toast.dismiss(waitingToast);
        toast.error("Error deleting product");
      }
    } catch (error) {
      toast.dismiss(waitingToast);
      console.error(error);
      toast.error("Error deleting product.");
    }
  };

  return { handleDelete };
}
