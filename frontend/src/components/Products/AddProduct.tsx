import { useAddProduct } from "../../hooks/products/useAddProduct";
import { useHandleNewProduct } from "../../hooks/products/useHandleNewProduct";
import { TitleInput } from "../Inputs/TitleInput";
import { DescriptionInput } from "../Inputs/DescriptionInput";
import { StockInput } from "../Inputs/StockInput";
import { PriceInput } from "../Inputs/PriceInput";
import { Button } from "../Inputs/Button";
import "../../styles/addProduct.css";

export function AddProduct() {
  const { inputsValues, handleChange } = useHandleNewProduct();
  const { handleAddProduct } = useAddProduct(inputsValues);

  return (
    <form onSubmit={handleAddProduct}>
      <h1>Add Product</h1>
      <TitleInput value={inputsValues.title} handleChange={handleChange} />
      <DescriptionInput
        value={inputsValues.short_description}
        handleChange={handleChange}
      />
      <StockInput value={inputsValues.stock} handleChange={handleChange} />
      <PriceInput value={inputsValues.price} handleChange={handleChange} />
      <Button text="Add Product" />
    </form>
  );
}
