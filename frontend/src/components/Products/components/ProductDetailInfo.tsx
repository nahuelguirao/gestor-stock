import { Product, Category } from "../../../types/types";

interface props {
  productInfo: Product;
  productCategories: Category[];
}

export function ProductDetailInfo({ productInfo, productCategories }: props) {
  return (
    <>
      <h1>{productInfo.title}</h1>
      <hr />
      <div className="producDetailsContainerExtraData">
        <p>
          <span className="productDetailsContainerSpan">Price </span>: $
          {productInfo.price}
        </p>
        <p>
          <span className="productDetailsContainerSpan">Actual stock </span> :{" "}
          {productInfo.stock}
        </p>
      </div>
      <p className="productDetailDescription">
        <span className="productDetailsContainerSpan">Description </span>:{" "}
        {productInfo.short_description.length == 0
          ? "This product has no description."
          : productInfo.short_description}
      </p>
      <div className="prodcutDetailsCategories">
        <h3>It's Categories</h3>
        {productCategories.length == 0 && (
          <p>-This product has no categories.</p>
        )}
        {productCategories.map((c: Category) => (
          <p key={c.name}>-{c.name}</p>
        ))}
      </div>
    </>
  );
}
