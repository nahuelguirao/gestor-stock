import { Product } from "../../types/types";
import { ProductRow } from "./ProductRow";

export function TableBody({ products }: { products: Product[] }) {
  return (
    <tbody>
      {products.map((product, index) => (
        <ProductRow product={product} index={index} key={product.id} />
      ))}
    </tbody>
  );
}
