import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";
import App from "./App.tsx";
import theme from "./theme";
import "./i18n/i18n.ts";
import { AuthReducerProvider } from "./contexts/AuthReducerContext.tsx";
import { store } from "./store/authStoreRedux.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthReducerProvider>
         <Provider store={store}>
            <App />
         </Provider>
      </AuthReducerProvider>
    </ThemeProvider>
  </StrictMode>
);
