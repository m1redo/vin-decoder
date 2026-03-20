import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getVehicleVariables } from "../api/nhtsa-api";
import VariableDetails from "../components/variable-details";

export default function VariablePage() {
  const { variableId } = useParams();
  const location = useLocation();

  const [variable, setVariable] = useState(location.state?.variable || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchVariable() {
      try {
        setLoading(true);
        setError("");

        const data = await getVehicleVariables();

        const foundVariable = (data.Results || []).find(
          (item) => String(item.ID) === String(variableId)
        );

        setVariable(foundVariable || null);
      } catch (err) {
        setError("Failed to load variable details.");
      } finally {
        setLoading(false);
      }
    }

    if (!variable) {
      fetchVariable();
    }
  }, [variableId, variable]);

  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  if (error) {
    return <p className="message message-error">{error}</p>;
  }

  return <VariableDetails item={variable} />;
}