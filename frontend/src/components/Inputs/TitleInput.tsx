export function TitleInput() {
  return (
    <div className="inputContainer">
      <label htmlFor="title">Title:</label>
      <input
        className="input"
        type="text"
        placeholder="Iphone 18, Keyboard..."
        name="title"
        id="title"
        min={0}
        required
      />
    </div>
  );
}
