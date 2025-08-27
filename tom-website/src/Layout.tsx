import { ThemeProvider } from "./components/theme-provider";
import HeaderContainer from "./header/HeaderContainer";
import { Outlet } from "react-router";

// This wraps the entire application, providing the theme and header.
// The Outlet component is where the routed pages will be rendered.
function Layout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <HeaderContainer />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default Layout;
