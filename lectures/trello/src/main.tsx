import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";
import App from "./App.tsx";
import theme from "./theme";
import "./i18n/i18n.ts";
import { AuthReducerProvider } from "./contexts/AuthReducerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthReducerProvider>
        <App />
      </AuthReducerProvider>
    </ThemeProvider>
  </StrictMode>
);
