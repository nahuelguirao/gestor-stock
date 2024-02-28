import { RxCross1 } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";
import { Category } from "../../types/types";
import { useDeleteCategory } from "../../hooks/categories/useDeleteCategory";

export function CategoryCard({ c }: { c: Category }) {
  const { handleDelete } = useDeleteCategory();

  return (
    <div className="categoryContainer">
      <p>{c.name}</p>
      <FaPencilAlt className="tableIcon updateProduct" />
      <RxCross1
        className="tableIcon deleteProduct"
        onClick={() => handleDelete(c.id)}
      />
    </div>
  );
}
