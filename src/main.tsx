import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Router from "./routes/sections.tsx";
import Loading from "./pages/loading.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}></Suspense>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
