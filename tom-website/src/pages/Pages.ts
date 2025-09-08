import Home from "@/pages/home/Home";
import Experience from "@/pages/experience/Experience";
import Contact from "./contact/Contact";
import Blog from "./blog/Blog";
import {
  Home as HomeIcon,
  IdCardLanyard,
  Send,
  NotebookPen,
} from "lucide-react";
// Define the layout of the pages. This is used in the router and the navbar.
// The order matters.
// The name must be unique, the href is used to route, the print_name is used in the navbar,
// and the component is used to render the page.
// This must be updated when a new page is added.
// Make sure to also create the page component in the pages folder.
export const pages: {
  name: string;
  react_router_path: string;
  print_name: string;
  root_href: string;
  icon: React.ComponentType;
  component: React.ComponentType;
}[] = [
  {
    name: "home",
    react_router_path: "/",
    root_href: "/",
    print_name: "Home",
    icon: HomeIcon,
    component: Home,
  },
  {
    name: "experience",
    react_router_path: "/experience",
    root_href: "/experience",
    print_name: "Experience",
    icon: IdCardLanyard,
    component: Experience,
  },
  {
    name: "contact",
    react_router_path: "/contact",
    root_href: "/contact",
    print_name: "Contact",
    icon: Send,
    component: Contact,
  },
  {
    name: "blog",
    root_href: "/blog",
    react_router_path: "/blog/*",
    print_name: "Blog",
    icon: NotebookPen,
    component: Blog,
  },
];
