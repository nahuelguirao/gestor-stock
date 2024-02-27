import { useNavigate } from "react-router-dom";
import { Product } from "../../types/types";

interface props {
  product: Product;
  index: number;
}

export function ProductRow({ product, index }: props) {
  const navigate = useNavigate();

  //Navigates to specifif page
  const updateProduct = () => {
    navigate(`/update-product/${product.id}`);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="productTitle" onClick={updateProduct}>
        {product.title}
      </td>
      <td>{product.stock}</td>
      <td>${product.price}</td>
    </tr>
  );
}
