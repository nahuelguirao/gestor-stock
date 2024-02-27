export function PriceInput() {
  return (
    <div className="inputContainer">
      <label htmlFor="price">Price:</label>
      <input
        className="input"
        type="number"
        placeholder="150, 10.5, 20..."
        name="price"
        id="price"
        required
      />
    </div>
  );
}
