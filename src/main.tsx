import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import "./i18n";
import Router from "./routes/sections.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
