import { useAddCategory } from "../../hooks/categories/useAddCategory";
import { Button } from "../Inputs/Button";
import { NameInput } from "../Inputs/NameInput";

export function AddCategory() {
  const { handleChange, nameValue, handleSubmit } = useAddCategory();

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add category</h1>
      <div className="inputContainer">
        <NameInput handleChange={handleChange} nameValue={nameValue} />
        <Button text="Create category" />
      </div>
    </form>
  );
}
