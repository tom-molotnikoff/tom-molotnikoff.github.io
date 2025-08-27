import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import Experience from "@/pages/experience/Experience";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Hobbies from "./hobbies/Hobbies";
import Contact from "./contact/Contact";
import Notes from "./notes/Notes";

// Define the layout of the pages. This is used in the router and the navbar.
// The order matters.
// The name must be unique, the href is used to route, the print_name is used in the navbar,
// and the component is used to render the page.
// This must be updated when a new page is added.
// Make sure to also create the page component in the pages folder.
export const pages: {
  name: string; href: string; print_name: string; component: React.ComponentType 
}[] = [
  { name: "home", href: "/", print_name: "Home", component: Home },
  { name: "about", href: "/about", print_name: "About", component: About },
  { name: "experience", href: "/experience", print_name: "Experience", component: Experience },
  { name: "skills", href: "/skills", print_name: "Skills", component: Skills},
  { name: "projects", href: "/projects", print_name: "Projects", component: Projects },
  { name: "hobbies", href: "/hobbies", print_name: "Hobbies", component: Hobbies},
  { name: "contact", href: "/contact", print_name: "Contact", component: Contact},
  { name: "notes", href: "/notes", print_name: "Notes", component: Notes },
]