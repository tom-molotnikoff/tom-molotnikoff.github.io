import Introduction from "@/components/ui/introduction-text";
import TextWithCatCarousel from "@/components/ui/text-with-cat-carousel";
import { useIsMobile } from "@/hooks/use-mobile";

function Home() {
  const isMobile = useIsMobile();
  const desktopAdditionalPadding = isMobile ? "py-0" : "mt-10";

  return (
    <div
      className={`pt-5 px-10 flex flex-col items-center min-h-screen gap-y-10 ${desktopAdditionalPadding}`}
    >
      <div className="w-full max-w-6xl">
        <Introduction />
      </div>
      <div className="w-full max-w-6xl">
        <TextWithCatCarousel />
      </div>
    </div>
  );
}

export default Home;
