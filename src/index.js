import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/bs-custom.css";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Toaster } from "sonner";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="col-3">
      <Toaster
        richColors={true}
        position="top-right"
        toastOptions={{
          style: {
            maxWidth: "250px",
            right: "0px",
          },
        }}
      />
    </div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
