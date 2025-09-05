import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./blog-mdx.css";
import App from "./App";

// This is the entry point of the React application.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
