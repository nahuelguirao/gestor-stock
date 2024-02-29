import { RxCross1 } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";
import { Category } from "../../types/types";
import { useDeleteCategory } from "../../hooks/categories/useDeleteCategory";
import { useNavigate } from "react-router-dom";

export function CategoryCard({ c }: { c: Category }) {
  const { handleDelete } = useDeleteCategory();
  const navigate = useNavigate();

  return (
    <div className="categoryContainer">
      <p className="categoryContainerName">{c.name}</p>
      <FaPencilAlt
        className="tableIcon updateProduct"
        onClick={() => navigate(`/update-category/${c.id}`)}
      />
      <RxCross1
        className="tableIcon deleteProduct"
        onClick={() => handleDelete(c.id)}
      />
    </div>
  );
}
