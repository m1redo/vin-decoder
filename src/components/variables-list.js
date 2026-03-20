import { Link } from "react-router-dom";

export default function VariablesList({ items }) {
  if (!items.length) {
    return <p className="empty-text">No variables found.</p>;
  }

  return (
    <section className="card">
      <h3 className="section-title">Vehicle Variables</h3>

      <ul className="variables-list">
        {items.map((item) => (
          <li className="variable-item" key={item.ID}>
            <div className="variable-name">{item.Name}</div>

            <Link
              to={`/variables/${item.ID}`}
              state={{ variable: item }}
            >
              View details
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}