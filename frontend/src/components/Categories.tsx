import { useContext } from "react";
import { useDeleteCategory } from "../hooks/categories/useDeleteCategory";
import { useFilterByCategory } from "../hooks/relations/useFIlterByCategory";
import { CategoriesContext } from "../context/CategoriesContext";
import { FilteredProductsTable } from "./Categories/FIlteredProductsTable";
import { CategoryCard } from "./Categories/CategoryCard";
import { Loading } from "./ProductsTable/Loading";
import { ErrorContainer } from "./ProductsTable/Error";
import { Link } from "react-router-dom";
import "../styles/categories.css";

export function Categories() {
  const { handleDelete } = useDeleteCategory();
  const { categoriesState, isLoading, error } = useContext(CategoriesContext);

  const { firstFilter, filtering, filterByCategory, filteredProducts } =
    useFilterByCategory();

  return (
    <main className="categoriesMain">
      <div className="productsHeader">
        <h1>Categories</h1>
        <Link to={"/add-category"} className="categoriesLinkAdd">
          +Add category
        </Link>
        <p className="pInfo">
          Touch a category name to filter products in that category!
        </p>
      </div>
      <hr />
      {isLoading && <Loading />}
      {!isLoading && error && <ErrorContainer error={error} />}
      {!isLoading && !error && categoriesState.length == 0 && (
        <div className="centerContainer">
          <p>No categories, add one!</p>
        </div>
      )}
      {!isLoading && !error && categoriesState.length > 0 && (
        <section className="categoriesContainer">
          {categoriesState.map((c) => (
            <CategoryCard
              key={c.id}
              c={c}
              handleDelete={handleDelete}
              filterByCategory={filterByCategory}
            />
          ))}
        </section>
      )}
      <FilteredProductsTable
        firstFilter={firstFilter}
        filtering={filtering}
        filteredProducts={filteredProducts}
      />
    </main>
  );
}
