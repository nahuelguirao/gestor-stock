import { useParams } from "react-router-dom";
import { useGetProductsCategoriesSimpler } from "../../hooks/relations/useGetProductCategoriesSimpler";
import { useProductDetails } from "../../hooks/products/useProductDetails";
import { Loading } from "../ProductsTable/Loading";
import { ProductDetailsButtons } from "./components/ProductDetailsButtons";
import { ProductDetailInfo } from "./components/ProductDetailInfo";
import "../../styles/productsDetails.css";

export function ProductDetails() {
  const { id } = useParams();

  const { productCategories } = useGetProductsCategoriesSimpler(id);
  const { isLoading, productInfo, handleDelete } = useProductDetails(id);

  return (
    <main className="productDetails">
      {isLoading && <Loading />}
      {!isLoading && productInfo && (
        <div className="productDetailsContainer">
          <ProductDetailInfo
            productCategories={productCategories}
            productInfo={productInfo}
          />
          <ProductDetailsButtons
            handleDelete={handleDelete}
            productInfo={productInfo}
          />
        </div>
      )}
    </main>
  );
}
