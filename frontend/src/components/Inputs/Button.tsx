export function Button({ text }: { text: string }) {
  return (
    <button>
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label">{text}</span>
    </button>
  );
}
