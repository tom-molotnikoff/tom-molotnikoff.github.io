import HeaderContainer from "./header/HeaderContainer";
import { Outlet } from "react-router";
import { useIsMobile } from "../hooks/use-mobile";
import HeaderWithSidebar from "./sidebar/HeaderWithSidebar";

// This provides the sidebar for small screens and header for larger screens
// The Outlet component is where the routed pages will be rendered.
// CustomSidebarHeader provides its own outlet
function Layout() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <HeaderWithSidebar />
      ) : (
        <>
          <HeaderContainer />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
}

export default Layout;
