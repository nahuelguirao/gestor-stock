import { ChangeEvent } from "react";

interface props {
  value: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function TitleInput({ value, handleChange }: props) {
  return (
    <div className="inputContainer">
      <label htmlFor="title">Title:</label>
      <input
        className="input"
        type="text"
        placeholder="Iphone 18, Keyboard..."
        name="title"
        id="title"
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
