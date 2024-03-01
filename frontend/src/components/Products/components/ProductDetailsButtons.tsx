import { useNavigate } from "react-router-dom";
import { Button } from "../../Inputs/Button";
import { Product } from "../../../types/types";

interface props {
  productInfo: Product;
  handleDelete: () => void;
}

export function ProductDetailsButtons({ productInfo, handleDelete }: props) {
  const navigate = useNavigate();
  return (
    <div className="productDetailsButtons">
      <div
        onClick={() =>
          navigate(`/add-category-for/${productInfo.title}/${productInfo.id}`)
        }
      >
        <Button text="Manage Categories" />
      </div>
      <div onClick={() => navigate(`/update-product/${productInfo.id}`)}>
        <Button text="Edit Product" />
      </div>
      <div onClick={handleDelete}>
        <Button text="Delete Product" />
      </div>
    </div>
  );
}
