import { Product } from "../../types/types";

interface props {
  product: Product;
  index: number;
}

export function ProductRow({ product, index }: props) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.stock}</td>
      <td>${product.price}</td>
    </tr>
  );
}
