import { useAddProduct } from "../hooks/useAddProduct";
import { TitleInput } from "./Inputs/TitleInput";
import { DescriptionInput } from "./Inputs/DescriptionInput";
import { StockInput } from "./Inputs/StockInput";
import { PriceInput } from "./Inputs/PriceInput";
import { AddProductButton } from "./Inputs/AddProductButton";
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
      <AddProductButton />
    </form>
  );
}
