import { useFetchIndividualProduct } from "../hooks/useFetchIndividualProduct";
import { useParams } from "react-router-dom";
import { Button } from "./Inputs/Button";
import { useEditProducts } from "../hooks/useEditProduct";
import { TitleInput } from "./Inputs/TitleInput";
import { DescriptionInput } from "./Inputs/DescriptionInput";
import { StockInput } from "./Inputs/StockInput";
import { PriceInput } from "./Inputs/PriceInput";

export function UpdateProduct() {
  const { id } = useParams();

  const { inputsValues, handleChange } = useFetchIndividualProduct(id);

  const handleSubmit = useEditProducts(id, inputsValues);

  return (
    <form onSubmit={handleSubmit}>
      <div className="updateTitleContainer">
        <h1>Edit Product </h1>
        <p>Product #{id}</p>
      </div>
      <TitleInput value={inputsValues.title} handleChange={handleChange} />
      <DescriptionInput
        value={inputsValues.short_description}
        handleChange={handleChange}
      />
      <StockInput value={inputsValues.stock} handleChange={handleChange} />
      <PriceInput value={inputsValues.price} handleChange={handleChange} />
      <Button text="Update product" />
    </form>
  );
}
