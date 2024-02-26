export function StockInput() {
  return (
    <div className="inputContainer">
      <label htmlFor="stock">Stock:</label>
      <input
        className="input"
        type="number"
        placeholder="10, 20..."
        name="stock"
        id="stock"
      />
    </div>
  );
}
