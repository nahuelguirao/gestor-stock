import { useAddProduct } from "../hooks/useAddProduct";
import { TitleInput } from "./Inputs/TitleInput";
import { DescriptionInput } from "./Inputs/DescriptionInput";
import { StockInput } from "./Inputs/StockInput";
import { PriceInput } from "./Inputs/PriceInput";
import { Button } from "./Inputs/Button";
import "../styles/addProduct.css";

export function AddProduct() {
  const handleAddProduct = useAddProduct();

  return (
    <form onSubmit={handleAddProduct}>
      <h1>Add Product</h1>
      <TitleInput />
      <DescriptionInput />
      <StockInput />
      <PriceInput />
      <Button text="Add Product" />
    </form>
  );
}
