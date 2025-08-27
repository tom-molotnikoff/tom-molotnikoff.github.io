import { BrowserRouter, Routes, Route } from "react-router";
import { pages } from "./pages/Pages.ts";
import Layout from "./navigation/Layout.tsx";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider.tsx";

// The main application component. This sets up the router and defines the routes
// based on the pages defined in pages/Pages.ts.
// The Layout component wraps all pages, providing either a sidebar or header
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {pages.map((page) => (
              <Route
                key={page.name}
                path={page.href}
                element={React.createElement(page.component)}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
