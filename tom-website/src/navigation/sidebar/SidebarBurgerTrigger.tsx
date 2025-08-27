import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

function SidebarBurgerTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="outline"
      onClick={toggleSidebar}
      className="w-8 h-8 p-2"
      aria-label="Toggle sidebar"
    >
      <div className="flex-1 flex flex-col justify-center items-center">
        <span className="block w-5 h-0.5 bg-[var(--foreground)] rounded mb-1"></span>
        <span className="block w-5 h-0.5 bg-[var(--foreground)] rounded mb-1"></span>
        <span className="block w-5 h-0.5 bg-[var(--foreground)] rounded"></span>
      </div>
    </Button>
  );
}

export default SidebarBurgerTrigger;
