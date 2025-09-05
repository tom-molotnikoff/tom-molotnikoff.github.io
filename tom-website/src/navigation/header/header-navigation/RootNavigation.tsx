import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { pages } from "@/pages/Pages";
import { NavLink } from "react-router";

function RootNavigation() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {pages.map(
          (page: { root_href: string; print_name: string; name: string }) => (
            <NavigationMenuItem key={page.name}>
              <NavigationMenuLink asChild>
                <NavLink className="text-sidebar-primary" to={page.root_href}>
                  {page.print_name}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
export default RootNavigation;
