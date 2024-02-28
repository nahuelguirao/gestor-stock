import { RxCross1 } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";
import { Category } from "../../types/types";

export function CategoryCard({ c }: { c: Category }) {
  return (
    <div className="categoryContainer">
      <p>{c.name}</p>
      <FaPencilAlt className="tableIcon updateProduct" />
      <RxCross1 className="tableIcon deleteProduct" />
    </div>
  );
}
