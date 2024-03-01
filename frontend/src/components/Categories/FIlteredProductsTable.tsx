import { Product } from "../../types/types";
import { Loading } from "../ProductsTable/Loading";
import { TableBody } from "../ProductsTable/TableBody";
import { TableHeader } from "../ProductsTable/TableHeader";

interface props {
  filtering: boolean;
  filteredProducts: Product[];
  firstFilter: boolean;
}

export function FilteredProductsTable({
  filtering,
  filteredProducts,
  firstFilter,
}: props) {
  return (
    <section className="filteredProductsTable">
      {filtering && <Loading />}
      {!filtering && filteredProducts.length >= 1 && (
        <table>
          <TableHeader />
          <TableBody products={filteredProducts} />
        </table>
      )}
      {!firstFilter && !filtering && filteredProducts.length == 0 && (
        <div className="centerContainer">
          <p>No products in this category!</p>
        </div>
      )}
    </section>
  );
}
