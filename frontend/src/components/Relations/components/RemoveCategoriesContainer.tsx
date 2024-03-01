import { Category } from "../../../types/types";
import { RxCross1 } from "react-icons/rx";

interface props {
  alreadyCategories: Category[];
  handleDeleteCategory: (id: number) => void;
}

export function RemoveCategoriesContainer({
  alreadyCategories,
  handleDeleteCategory,
}: props) {
  return (
    <>
      {alreadyCategories.length == 0 ? (
        <div className="centerContainer">
          <p>This product doesn't have a category yet.</p>
        </div>
      ) : (
        <div className="containerAddCategoryTo">
          {alreadyCategories.map((c: Category) => (
            <div className="addCategoryTo" key={c.name}>
              <p className="addCategoryToParagraph">{c.name}</p>
              <RxCross1
                className="tableIcon deleteProduct"
                onClick={() => handleDeleteCategory(c.id)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
