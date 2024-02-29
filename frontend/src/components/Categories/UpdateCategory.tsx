import { useFetchIndividualCategory } from "../../hooks/categories/useFetchIndividualCategory";
import { useUpdateCategory } from "../../hooks/categories/useUpdateCategory";
import { useParams } from "react-router-dom";
import { Button } from "../Inputs/Button";
import { NameInput } from "../Inputs/NameInput";

export function UpdateCategory() {
  const { id } = useParams();

  const { newValue, handleChange } = useFetchIndividualCategory(id);

  const { handleSubmit } = useUpdateCategory(newValue, id);

  return (
    <form onSubmit={handleSubmit}>
      <div className="updateTitleContainer">
        <h1>Update category</h1>
        <p>Category #{id}</p>
      </div>
      <div className="inputContainer">
        <NameInput handleChange={handleChange} nameValue={newValue} />
        <Button text="Update category" />
      </div>
    </form>
  );
}
