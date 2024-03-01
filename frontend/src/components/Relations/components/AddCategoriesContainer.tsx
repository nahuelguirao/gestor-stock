import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { Category } from "../../../types/types";

interface props {
  availableCategories: Category[];
  handleAddCategory: (cId: number, pId: string | undefined) => void;
  productId: undefined | string;
}

export function AddCategoriesContainer({
  availableCategories,
  handleAddCategory,
  productId,
}: props) {
  return (
    <>
      {availableCategories.length == 0 ? (
        <div className="centerContainer">
          <Link to={"/add-category"}>
            No categories availables! Click me to add one.
          </Link>
        </div>
      ) : (
        <div className="containerAddCategoryTo">
          {availableCategories.map((c: Category) => (
            <div className="addCategoryTo">
              <p className="addCategoryToParagraph">{c.name}</p>
              <CiCirclePlus
                className="addCategoryIcon"
                onClick={() => handleAddCategory(c.id, productId)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
