export default function DecodeResults({ results }) {
  return (
    <section className="card">
      <h3 className="section-title">Decode Results</h3>

      {!results.length ? (
        <p className="empty-text">
          Enter a VIN code to see decoded vehicle information.
        </p>
      ) : (
        <ul className="results-list">
          {results.map((item, index) => (
            <li className="results-item" key={`${item.Variable}-${index}`}>
              <span className="result-name">{item.Variable}:</span> {item.Value}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}