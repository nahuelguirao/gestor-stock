import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { ProductsContext } from "../context/ProductsContext";
import { getProductInfo } from "../helpers/fetchProducInfo";
import { Product } from "../types/types";
import { Loading } from "./ProductsTable/Loading";
import { Button } from "./Inputs/Button";
import "../styles/productsDetails.css";

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  //States
  const [productInfo, setProductInfo] = useState<Product | null>();
  const [isLoading, setIsLoading] = useState(false);

  //Async function to call 'getProductInfo'
  const callInfo = async () => {
    setIsLoading(true);
    const data = await getProductInfo(id, navigate);
    setProductInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    callInfo();
  }, []);

  //Gets handleDelete
  const { dispatch } = useContext(ProductsContext);
  const { handleDelete } = useDeleteProduct(
    dispatch,
    productInfo && productInfo.id
  );

  return (
    <main className="productDetails">
      {isLoading && <Loading />}
      {!isLoading && productInfo && (
        <div className="productDetailsContainer">
          <h1>{productInfo.title}</h1>
          <hr />
          <div className="producDetailsContainerExtraData">
            <p>
              <span className="productDetailsContainerSpan">Price </span>: $
              {productInfo.price}
            </p>
            <p>
              <span className="productDetailsContainerSpan">Actual stock </span>{" "}
              : {productInfo.stock}
            </p>
          </div>
          <p className="productDetailDescription">
            <span className="productDetailsContainerSpan">Description </span>:{" "}
            {productInfo.short_description.length == 0
              ? "This product has no description."
              : productInfo.short_description}
          </p>
          <div className="prodcutDetailsCategories">
            <h3>Categories</h3>
            {/* MAP CATEGORIES */}
          </div>
          <div className="productDetailsButtons">
            <div onClick={() => navigate(`/update-product/${productInfo.id}`)}>
              <Button text="Edit Product" />
            </div>
            <div onClick={handleDelete}>
              <Button text="Delete Product" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
