import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CircleTransitionProvider } from "@/context/CircleTransitionContext";
import App from "@/App";
import "@/index.css";

const queryClient = new QueryClient();

// import.meta.env.BASE_URL es el "base" de vite.config.ts ("/" en dev,
// "/miprofesional/" en build) — sin pasarlo acá, el router ignora esa
// base y arma las rutas desde la raíz del dominio (rompe en GitHub
// Pages, que sirve en /miprofesional/). basename no lleva barra final.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter basename={basename}>
            <CircleTransitionProvider>
              <App />
            </CircleTransitionProvider>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
