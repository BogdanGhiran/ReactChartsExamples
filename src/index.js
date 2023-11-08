import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PieChartRisks from "./PieChartRisks";
import BarChart from "./BarChartMonths";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h4> Gigel </h4>
    <div style={{ display: "inline-block" }}>
      <PieChartRisks />
    </div>
    <div style={{ display: "inline-block" }}>
      <BarChart />
    </div>
  </StrictMode>
);
