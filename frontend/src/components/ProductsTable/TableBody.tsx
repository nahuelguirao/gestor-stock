import { Product } from "../../types/types";
import { ProductRow } from "./ProductRow";

export function TableBody({ products }: { products: Product[] }) {
  return (
    <tbody>
      {products.map((product) => (
        <ProductRow product={product} key={product.id} />
      ))}
    </tbody>
  );
}
