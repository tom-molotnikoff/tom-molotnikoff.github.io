import { BrowserRouter, Routes, Route } from "react-router";
import { pages } from "./pages/Pages.ts";
import Layout from "./Layout.tsx";
import React from "react";

// The main application component. This sets up the router and defines the routes
// based on the pages defined in pages/Pages.ts.
// The Layout component wraps all pages, providing a theme and header.
function App() {
  return (
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
  );
}
export default App;
