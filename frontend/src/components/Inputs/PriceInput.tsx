import { ChangeEvent } from "react";

interface props {
  value: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function PriceInput({ value, handleChange }: props) {
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
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
