const EXCLUDED_FIELDS = [
  "Error Code",
  "Error Text",
  "Additional Error Text",
  "Possible Values",
  "Suggested VIN"
];

export default function DecodeResults({ results }) {
  const filteredResults = results.filter(
    (item) =>
      item.Variable &&
      !EXCLUDED_FIELDS.includes(item.Variable)
  );

  return (
    <section className="card">
      <h3 className="section-title">Decode Results</h3>

      {!filteredResults.length ? (
        <p className="empty-text">
          Enter a VIN code to see decoded vehicle information.
        </p>
      ) : (
        <ul className="results-list">
          {filteredResults.map((item, index) => (
            <li className="results-item" key={`${item.Variable}-${index}`}>
              <span className="result-name">{item.Variable}:</span>{" "}
              {item.Value}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}