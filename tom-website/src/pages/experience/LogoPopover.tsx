import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { Logo } from "./LogoGrid";
import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/components/typography";

interface LogoPopoverProps {
  logo: Logo;
  idx: number;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
  visibleCount: number;
}

function LogoPopover({
  logo,
  idx,
  openIndex,
  setOpenIndex,
  visibleCount,
}: LogoPopoverProps) {
  return (
    <div
      key={logo.name}
      className={`flex items-center justify-center transition-opacity duration-300 group ${
        idx < visibleCount ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={logoCardClass}>
        <Popover
          key={logo.name}
          open={openIndex === idx}
          onOpenChange={(open) => setOpenIndex(open ? idx : null)}
        >
          <PopoverTrigger asChild>
            <div className={centeredContainerClass}>
              <img
                src={`/logos/${logo.file}`}
                alt={logo.name}
                className={logoImageClass}
              />
              <TypographyMuted>{logo.name}</TypographyMuted>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <TypographyH3>{logo.name}</TypographyH3>
            <TypographySmall>{logo.description}</TypographySmall>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

const logoCardClass =
  "flex items-center justify-center h-32 w-32 rounded-md transition-transform duration-200 group-hover:scale-110 group-hover:shadow-lg dark:bg-white/5";
const logoImageClass = "p-1 h-23 w-23 object-contain";
const centeredContainerClass = "flex flex-1 flex-col items-center text-center";

export default LogoPopover;
