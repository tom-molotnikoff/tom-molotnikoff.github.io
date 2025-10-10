import { useIsMobile } from "@/hooks/use-mobile";

function PageContainer({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const className = isMobile
    ? "flex flex-col items-center p-5 gap-y-10"
    : "flex flex-col items-center p-5 gap-y-10 pt-20";

  return <div className={className}>{children}</div>;
}

export default PageContainer;
