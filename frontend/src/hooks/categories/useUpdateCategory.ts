import { useContext, FormEvent } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BASE_URL } from "../../helpers/BASE_URL";

export function useUpdateCategory(newValue: string, id: string | undefined) {
  const navigate = useNavigate();
  const { setRefetch } = useContext(CategoriesContext);

  const updateCategory = async () => {
    if (newValue.length > 100) {
      toast.error("New name must be less than 100 characters.");
      return;
    }

    const waitingToast = toast.loading("Updating category...");
    try {
      const res = await fetch(`${BASE_URL}/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newValue }),
      });

      if (res.ok) {
        toast.dismiss(waitingToast);
        toast.success("Category updated!");
        setRefetch((prev) => !prev);
        navigate("/categories");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(waitingToast);
      toast.error("Error updating category.");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateCategory();
  };

  return { handleSubmit };
}
