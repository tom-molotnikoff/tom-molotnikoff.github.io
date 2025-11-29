import { TypographyH2 } from "@/components/typography";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { pages } from "@/pages/Pages";
import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Bug, GitFork } from "lucide-react";

function SidebarImpl() {
  const { setOpenMobile } = useSidebar();
  const location = useLocation();

  useEffect(() => {
    setOpenMobile(false);
    console.log("Location changed, closing sidebar");
  }, [location, setOpenMobile]);

  return (
    <Sidebar>
      <SidebarHeader>
        <TypographyH2>tom_molo.me</TypographyH2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((page) => (
                <SidebarMenuItem className="mb-2" key={page.name}>
                  <SidebarMenuButton asChild>
                    <Link to={page.root_href}>
                      <page.icon />
                      {page.print_name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>Feedback</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="https://github.com/tom-molotnikoff/tom-molotnikoff.github.io/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bug />
                    Report an issue
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="https://github.com/tom-molotnikoff/tom-molotnikoff.github.io/fork"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitFork />
                    Fork this repo
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SidebarImpl;
