import { ChangeEvent } from "react";

interface props {
  value: number;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function StockInput({ value, handleChange }: props) {
  return (
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
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
