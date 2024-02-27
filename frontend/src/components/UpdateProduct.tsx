import { useFetchIndividualProduct } from "../hooks/useFetchIndividualProduct";
import { useParams } from "react-router-dom";
import { Button } from "./Inputs/Button";
import { useEditProducts } from "../hooks/useEditProduct";

export function UpdateProduct() {
  const { id } = useParams();

  const { inputsValues, handleChange } = useFetchIndividualProduct(id);

  const handleSubmit = useEditProducts(id, inputsValues);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Product #{id}</h1>
      <div className="inputContainer">
        <label htmlFor="title">Title:</label>
        <input
          className="input"
          type="text"
          placeholder="Iphone 18, Keyboard..."
          name="title"
          id="title"
          min={0}
          required
          value={inputsValues.title}
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="description">Description:</label>
        <textarea
          className="input"
          placeholder="Product short description..."
          name="short_description"
          id="description"
          value={inputsValues.short_description}
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="stock">Stock:</label>
        <input
          className="input"
          type="number"
          placeholder="10, 20..."
          name="stock"
          id="stock"
          min={0}
          required
          value={inputsValues.stock}
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="price">Price:</label>
        <input
          className="input"
          type="number"
          placeholder="150, 10.5, 20..."
          name="price"
          id="price"
          required
          value={inputsValues.price}
          onChange={handleChange}
        />
      </div>
      <Button text="Update product" />
    </form>
  );
}
