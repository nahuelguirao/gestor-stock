import { useHandleAddCategory } from "../../hooks/relations/useHandleAddCategory";
import { useGetProductsCategoriesFilter } from "../../hooks/relations/useGetProductCategoriesFilter";
import { useParams } from "react-router-dom";

import "../../styles/addCategoryTo.css";

import { Loading } from "../ProductsTable/Loading";
import { useHanldeDeleteCategory } from "../../hooks/relations/useHandleDeleteCategory";
import { RemoveCategoriesContainer } from "./components/RemoveCategoriesContainer";
import { AddCategoriesContainer } from "./components/AddCategoriesContainer";

export function CategoryToProduct() {
  const { productId, productTitle } = useParams();

  //Add category
  const { handleAddCategory, refetch, setRefetch } = useHandleAddCategory();

  //Gets products category and filtered categories
  const { alreadyCategories, availableCategories, isLoading } =
    useGetProductsCategoriesFilter(refetch, productId);

  //Delete category
  const { handleDeleteCategory } = useHanldeDeleteCategory(
    setRefetch,
    productId
  );

  return (
    <main className="mainAddCategoryTo">
      <h1>
        Manage categories for
        <span className="addCategoryToSpan">"{productTitle}"</span>
      </h1>
      <section>
        <h3>Available categories to add</h3>
        {isLoading && availableCategories.length > 0 && <Loading />}
        {!isLoading && (
          <AddCategoriesContainer
            handleAddCategory={handleAddCategory}
            availableCategories={availableCategories}
            productId={productId}
          />
        )}
      </section>
      <section>
        <h3>Remove '{productTitle}' categories</h3>
        {isLoading && alreadyCategories.length > 0 && <Loading />}
        {!isLoading && (
          <RemoveCategoriesContainer
            alreadyCategories={alreadyCategories}
            handleDeleteCategory={handleDeleteCategory}
          />
        )}
      </section>
    </main>
  );
}
