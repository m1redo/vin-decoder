import { Link } from "react-router-dom";

export default function VariableDetails({ item }) {
  if (!item) {
    return (
      <section className="card">
        <h2 className="page-title">Variable not found</h2>
        <Link className="back-link" to="/variables">
          Back to variables
        </Link>
      </section>
    );
  }

  return (
    <section className="card">
      <h2 className="page-title">{item.Name}</h2>

      <p>
        <strong>ID:</strong> {item.ID}
      </p>

      <div
        className="variable-description"
        dangerouslySetInnerHTML={{ __html: item.Description }}
      />

      <Link className="back-link" to="/variables">
        Back to variables
      </Link>
    </section>
  );
}