import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { useDeleteProduct } from "../../hooks/products/useDeleteProduct";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/types";
import { RxCross1 } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";

interface props {
  product: Product;
}

export function ProductRow({ product }: props) {
  const navigate = useNavigate();

  const { dispatch } = useContext(ProductsContext);
  const { handleDelete } = useDeleteProduct(dispatch, product.id);

  //Navigates to update product
  const updateProduct = () => navigate(`/update-product/${product.id}`);

  //Navigates to product details
  const detailProduct = () => navigate(`/product-details/${product.id}`);

  return (
    <tr>
      <td onClick={updateProduct}>
        <FaPencilAlt className="tableIcon updateProduct" />
      </td>
      <td className="productTitle" onClick={detailProduct}>
        {product.title}
      </td>
      <td>{product.stock}</td>
      <td className="productPrice">${product.price}</td>
      <td>
        <RxCross1 className="tableIcon deleteProduct" onClick={handleDelete} />
      </td>
    </tr>
  );
}
