const STORAGE_KEY = "vin-history";

export function getVinHistory() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return [];
  }

  try {
    return JSON.parse(savedData);
  } catch {
    return [];
  }
}

export function saveVinToHistory(vin) {
  const currentHistory = getVinHistory();

  const normalizedVin = vin.toUpperCase();

  const updatedHistory = [
    normalizedVin,
    ...currentHistory.filter((item) => item !== normalizedVin),
  ].slice(0, 3);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));

  return updatedHistory;
}