import { ChangeEvent } from "react";

interface props {
  value: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function DescriptionInput({ value, handleChange }: props) {
  return (
    <div className="inputContainer">
      <label htmlFor="description">Description:</label>
      <textarea
        className="input"
        placeholder="Product short description..."
        name="short_description"
        id="description"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
