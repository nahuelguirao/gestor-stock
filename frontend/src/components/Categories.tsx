import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { Loading } from "./ProductsTable/Loading";
import { ErrorContainer } from "./ProductsTable/Error";
import { CategoryCard } from "./Categories/CategoryCard";
import { Link } from "react-router-dom";
import "../styles/categories.css";

export function Categories() {
  const { categoriesState, isLoading, error } = useContext(CategoriesContext);

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
            <CategoryCard key={c.id} c={c} />
          ))}
        </section>
      )}
    </main>
  );
}
