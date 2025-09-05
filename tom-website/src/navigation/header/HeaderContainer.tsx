import { Link } from "react-router";
import RootNavigation from "@/navigation/header/header-navigation/RootNavigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function HeaderContainer() {
  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-background border-b border-border shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-x-5 flex-shrink-0">
            <Avatar>
              <AvatarImage src="/avatar/me.jpg" alt="Tom Molotnikoff Avatar" />
            </Avatar>
            <Link to="/" className="text-xl font-bold text-foreground">
              tom_molotnikoff.me
            </Link>
          </div>
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
