import { SidebarProvider } from "@/components/ui/sidebar";
import { Link, Outlet } from "react-router";
import SidebarImpl from "./SidebarImpl";
import SidebarBurgerTrigger from "./SidebarBurgerTrigger";
import { ModeToggle } from "@/components/mode-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function HeaderWithSidebar() {
  const isMobile = useIsMobile();
  return (
    <SidebarProvider>
      <SidebarImpl />
      <main>
        <div
          className={`sticky top-0 left-0 z-50 rainbow-border-bottom ${
            isMobile ? "min-w-screen" : ""
          }`}
        >
          <div className="rainbow-inner-bottom">
            <div className="px-5">
              <div className="flex items-center justify-between space-x-5 h-16">
                {/* Left side: Logo */}
                <div className="grow items-center flex space-x-5">
                  <SidebarBurgerTrigger />
                  <Avatar>
                    <AvatarImage
                      src="/avatar/me.jpg"
                      alt="Tom Molotnikoff Avatar"
                    />
                  </Avatar>
                  <Link to="/" className="text-xl font-bold text-foreground">
                    tom_molo.me
                  </Link>
                </div>
                {/* Right side: Navigation */}
                <div className="flex flex-1 items-right justify-end space-x-4">
                  <div className="flex flex-1 max-w-30 items-center justify-end space-x-2">
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default HeaderWithSidebar;
