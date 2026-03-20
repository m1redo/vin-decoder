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

      const filledResults = (data.Results || []).filter(
        (item) => item.Value && item.Value.trim() !== ""
      );

      setResults(filledResults);

      const firstResult = data.Results && data.Results.length ? data.Results[0] : null;

      const infoText = [
        data.Message,
        firstResult?.AdditionalErrorText,
        firstResult?.ErrorText && firstResult.ErrorText !== "0"
          ? firstResult.ErrorText
          : ""
      ]
        .filter(Boolean)
        .join(" ");

      setMessage(infoText);

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
          <h3 className="section-title">Information</h3>
          <p className="message message-info">{message}</p>
        </section>
      )}

      <DecodeResults results={results} />
    </section>
  );
}