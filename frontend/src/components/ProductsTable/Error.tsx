export function ErrorContainer({ error }: { error: string }) {
  return (
    <div className="centerContainer">
      <p>{error}</p>
    </div>
  );
}
