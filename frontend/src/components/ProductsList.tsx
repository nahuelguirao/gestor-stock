import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { TableHeader } from "./ProductsTable/TableHeader";
import { TableBody } from "./ProductsTable/TableBody";
import "../styles/productsTable.css";
import { Loading } from "./Loading";
import { ErrorContainer } from "./ProductsTable/Error";

export function ProductsList() {
  const { isLoading, error, products } = useContext(ProductsContext);

  return (
    <main>
      <div className="productsHeader">
        <h1>Products</h1>
        <span className="addProductSpan">+Add product </span>
      </div>
      <section>
        {/* While loading */}
        {isLoading && <Loading />}
        {/* Error */}
        {!isLoading && error && <ErrorContainer error={error} />}
        {/* Data mapped */}
        {!isLoading && products && (
          <table>
            <TableHeader />
            <TableBody products={products} />
          </table>
        )}
      </section>
    </main>
  );
}
