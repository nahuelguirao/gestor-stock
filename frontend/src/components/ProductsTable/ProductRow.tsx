import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/types";
import { RxCross1 } from "react-icons/rx";
import { ProductsContext } from "../../context/ProductsContext";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";

interface props {
  product: Product;
}

export function ProductRow({ product }: props) {
  const navigate = useNavigate();

  const { dispatch } = useContext(ProductsContext);

  const { handleDelete } = useDeleteProduct(dispatch, product.id);

  //Navigates to specifif page
  const updateProduct = () => {
    navigate(`/update-product/${product.id}`);
  };

  return (
    <tr>
      <td>
        <RxCross1 className="deleteProduct" onClick={handleDelete} />
      </td>
      <td className="productTitle" onClick={updateProduct}>
        {product.title}
      </td>
      <td>{product.stock}</td>
      <td>${product.price}</td>
    </tr>
  );
}
