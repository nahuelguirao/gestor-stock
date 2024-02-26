export function DescriptionInput() {
  return (
    <div className="inputContainer">
      <label htmlFor="description">Description:</label>
      <textarea
        className="input"
        placeholder="Product short description..."
        name="short_description"
        id="description"
      />
    </div>
  );
}
