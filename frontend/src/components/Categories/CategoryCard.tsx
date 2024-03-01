import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";
import { Category } from "../../types/types";

interface props {
  filterByCategory: (cId: number) => void;
  c: Category;
  handleDelete: (cId: number) => void;
}

export function CategoryCard({ filterByCategory, c, handleDelete }: props) {
  const navigate = useNavigate();

  return (
    <div className="categoryContainer">
      <p
        className="categoryContainerName"
        onClick={() => filterByCategory(c.id)}
      >
        {c.name}
      </p>
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
