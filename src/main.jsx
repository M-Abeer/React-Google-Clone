import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ResultContextProvider from "./Context/ResultContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ResultContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResultContextProvider>
  </>
);
