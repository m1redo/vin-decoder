import { useState } from "react";

export default function VinForm({ onSubmit, loading }) {
  const [vin, setVin] = useState("");
  const [error, setError] = useState("");

  function validate(value) {
    if (!value) {
      return "VIN is required";
    }

    if (!/^[A-HJ-NPR-Z0-9]+$/i.test(value)) {
      return "VIN contains invalid characters";
    }

    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();

    const normalizedVin = vin.trim().toUpperCase();
    const validationError = validate(normalizedVin);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    onSubmit(normalizedVin);
  }

  function handleChange(e) {
    setVin(e.target.value.toUpperCase());
  }

  return (
    <section className="card">
      <h3 className="section-title">Decode VIN</h3>

      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="vin">
          Enter VIN code
        </label>

        <div className="form-row">
          <input
            id="vin"
            className="input"
            type="text"
            placeholder="For example: 1HGCM82633A472591"
            value={vin}
            onChange={handleChange}
            maxLength="17"
          />

          <button className="button" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Decode"}
          </button>
        </div>

        {error && <p className="message message-error">{error}</p>}
      </form>
    </section>
  );
}