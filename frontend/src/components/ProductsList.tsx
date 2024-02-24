import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { TableHeader } from "./ProductsTable/TableHeader";
import { TableBody } from "./ProductsTable/TableBody";
import "../styles/productsTable.css";

export function ProductsList() {
  const { isLoading, error, products } = useContext(ProductsContext);

  return (
    <main>
      <h1>Stock Manager</h1>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && products && (
          <table>
            <h2>Products</h2>
            <TableHeader />
            <TableBody products={products} />
          </table>
        )}
      </section>
    </main>
  );
}
