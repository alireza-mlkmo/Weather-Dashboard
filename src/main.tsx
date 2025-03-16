import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { ThemeProvider } from "./Contexts/ThemeContext.tsx";
import {  CityWeatherProvider } from "./Contexts/CityWeatherContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
        <CityWeatherProvider>
          <App />
        </CityWeatherProvider>
    </ThemeProvider>
  </StrictMode>
);
