import { Link } from "react-router";
import RootNavigation from "./navigation/RootNavigation";
import { ModeToggle } from "@/components/mode-toggle";

function HeaderContainer() {
  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-background border-b border-border">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-foreground">
              Tom Molotnikoff
            </Link>
          </div>
          {/* Right side: Navigation */}
          <div className="flex flex-1 items-right justify-end space-x-4">
            <RootNavigation />
            <div className="flex flex-1 max-w-30 items-center justify-end space-x-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContainer;
