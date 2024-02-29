import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useFetchIndividualCategory(id: string | undefined) {
  const navigate = useNavigate();

  const [newValue, setNewValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewValue(e.target.value);

  const getIndividualCategory = async () => {
    try {
      const res = await fetch(`http://localhost:3000/categories/${id}`);
      const data = await res.json();

      if (!res.ok) {
        toast.error("Category not found.");
        navigate("/categories");
      }

      setNewValue(data.name);
    } catch (error) {
      navigate("/categories");
      console.error(error);
    }
  };

  useEffect(() => {
    getIndividualCategory();
  }, []);

  return { newValue, handleChange };
}
