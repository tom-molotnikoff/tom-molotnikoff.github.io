import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { pages } from "@/pages/Pages";
import { Bug } from "lucide-react";
import { NavLink } from "react-router";

function RootNavigation() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-x-5">
        {pages.map(
          (page: {
            root_href: string;
            print_name: string;
            name: string;
            icon: React.ComponentType;
          }) => (
            <NavigationMenuItem
              className="scale-up-fancy-on-hover-xl"
              key={page.name}
            >
              <NavigationMenuLink asChild>
                <NavLink
                  className="flex flex-1 flex-row items-center"
                  to={page.root_href}
                  data-testid={`nav-${page.name.toLowerCase()}`}
                >
                  <page.icon />
                  {page.print_name}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
        <NavigationMenuItem className="scale-up-fancy-on-hover-xl">
          <NavigationMenuLink asChild>
            <a
              className="flex flex-1 flex-row items-center"
              href="https://github.com/tom-molotnikoff/tom-molotnikoff.github.io/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Bug />
              Report an issue
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
export default RootNavigation;
