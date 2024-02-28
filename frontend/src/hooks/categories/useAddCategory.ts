import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../context/CategoriesContext";
import toast from "react-hot-toast";

export function useAddCategory() {
  const navigate = useNavigate();
  const { categoriesState, setRefetch } = useContext(CategoriesContext);
  const [nameValue, setNameValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const categoryExist = categoriesState.some(
      (category) => category.name.toLowerCase() === nameValue.toLowerCase()
    );

    //Validations
    if (nameValue.length > 100) {
      toast.error("Name must be less than 100 characters.");
    }

    if (categoryExist) {
      toast.error("ERROR! Category already exists.");
      return;
    }

    const waitingToast = toast.loading("Adding Category");

    try {
      const res = await fetch("http://localhost:3000/categories/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nameValue }),
      });

      if (res.ok) {
        toast.dismiss(waitingToast);
        setRefetch((prev) => !prev); //Refetch categories call
        navigate("/categories");
        toast.success("Category added!");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(waitingToast);
      toast.error("Error adding category");
    }
  };

  return { handleChange, nameValue, handleSubmit };
}
