import { useEffect, useState } from "react";
import VinForm from "../components/vin-form";
import DecodeResults from "../components/decode-results";
import VinHistory from "../components/vin-history";
import { decodeVin } from "../api/nhtsa-api";
import { getVinHistory, saveVinToHistory } from "../utils/storage";

export default function HomePage() {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getVinHistory());
  }, []);

  async function handleDecode(vin) {
    try {
      setLoading(true);
      setApiError("");
      setMessage("");
      setResults([]);

      const data = await decodeVin(vin);

      const filledResults = data.Results.filter(
        (item) => item.Value && item.Value.trim() !== ""
      );

      setResults(filledResults);
      setMessage(data.Message || "");

      const updatedHistory = saveVinToHistory(vin);
      setHistory(updatedHistory);
    } catch (error) {
      setApiError("Failed to decode VIN. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h2 className="page-title">Decode your vehicle</h2>

      <VinForm onSubmit={handleDecode} loading={loading} />

      <VinHistory items={history} onSelect={handleDecode} />

      {apiError && <p className="message message-error">{apiError}</p>}

      {message && (
        <section className="card">
          <h3 className="section-title">API Message</h3>
          <p className="message message-info">{message}</p>
        </section>
      )}

      <DecodeResults results={results} />
    </section>
  );
}