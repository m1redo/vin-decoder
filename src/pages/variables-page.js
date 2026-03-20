import { useEffect, useState } from "react";
import { getVehicleVariables } from "../api/nhtsa-api";
import VariablesList from "../components/variables-list";

export default function VariablesPage() {
  const [variables, setVariables] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchVariables() {
      try {
        setLoading(true);
        setError("");

        const data = await getVehicleVariables();
        setVariables(data.Results || []);
      } catch (err) {
        setError("Failed to load variables.");
      } finally {
        setLoading(false);
      }
    }

    fetchVariables();
  }, []);

  return (
    <section>
      <h2 className="page-title">Variables</h2>

      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="message message-error">{error}</p>}
      {!loading && !error && <VariablesList items={variables} />}
    </section>
  );
}