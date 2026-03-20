import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import VariablesPage from "./pages/variables-page";
import VariablePage from "./pages/variable-page";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/variables" element={<VariablesPage />} />
      <Route path="/variables/:variableId" element={<VariablePage />} />
    </Routes>
  );
}