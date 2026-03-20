export default function VinHistory({ items, onSelect }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="card">
      <h3 className="section-title">Last decoded VINs</h3>

      <ul className="history-list">
        {items.map((vin) => (
          <li key={vin}>
            <button
              className="history-button"
              type="button"
              onClick={() => onSelect(vin)}
            >
              {vin}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}