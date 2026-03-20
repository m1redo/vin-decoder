const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";

export async function decodeVin(vin) {
  const response = await fetch(
    `${BASE_URL}/decodevin/${vin}?format=json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch VIN data");
  }

  const data = await response.json();
  return data;
}

export async function getVehicleVariables() {
  const response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch variables");
  }

  const data = await response.json();
  return data;
}