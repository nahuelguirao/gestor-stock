import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { TableHeader } from "./ProductsTable/TableHeader";
import { TableBody } from "./ProductsTable/TableBody";
import { Loading } from "./ProductsTable/Loading";
import { ErrorContainer } from "./ProductsTable/Error";
import { Link } from "react-router-dom";
import "../styles/productsTable.css";

export function ProductsList() {
  const { products, isLoading, error } = useContext(ProductsContext);

  return (
    <main>
      <div className="productsHeader">
        <h1>Products</h1>
        <Link to={"/add-product"}>
          <span className="addProductSpan">+Add product </span>
        </Link>
      </div>
      <section>
        {/* While loading */}
        {isLoading && <Loading />}
        {/* Error */}
        {!isLoading && error && <ErrorContainer error={error} />}
        {/* Data mapped */}
        {!isLoading && products && products.length >= 1 && (
          <table>
            <TableHeader />
            <TableBody products={products} />
          </table>
        )}
        {!isLoading && !error && products && products.length == 0 && (
          <div className="centerContainer">
            <p>No products. Add one!</p>
          </div>
        )}
      </section>
    </main>
  );
}
