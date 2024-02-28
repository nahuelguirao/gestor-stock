import { ChangeEvent } from "react";

interface props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  nameValue: string;
}

export function NameInput({ handleChange, nameValue }: props) {
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        className="input"
        type="text"
        id="name"
        title="name"
        placeholder="Gaming, mobile..."
        onChange={handleChange}
        value={nameValue}
      />
    </>
  );
}
