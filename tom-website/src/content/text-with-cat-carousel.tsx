import { useIsMobile } from "@/hooks/use-mobile";
import {
  TypographyH1,
  TypographyH2,
  TypographyMuted,
} from "@/components/typography";
import ImageCarousel from "@/components/ui/image-carousel";
import { catImages16by9, catImages9by16 } from "@/assets/cat-images";

function TextWithCatCarousel() {
  const isMobile = useIsMobile();

  if (isMobile) {
    // Mobile layout: text above, carousel below, scrollable
    return (
      <div className="min-h-screen overflow-auto flex-1 flex flex-col items-center text-center bg-background">
        <TypographyH1>The folks</TypographyH1>
        <TypographyH2>Bean and Soup.</TypographyH2>
        <ImageCarousel
          interval={3000}
          images={catImages9by16}
          opacity={1}
          aspectRatio="9/16"
        />
        <TypographyMuted>
          The internet was made for pictures of cats, there shouldn't be
          anything wrong with adding a few more
        </TypographyMuted>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-background px-8">
      <div className="flex w-full max-w-6xl gap-5 items-center">
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <TypographyH1>The folks</TypographyH1>
          <TypographyH2>Bean and Soup.</TypographyH2>
          <TypographyMuted>
            The internet was made for pictures of cats, there shouldn't be
            anything wrong with adding a few more
          </TypographyMuted>
        </div>
        <div className="flex-1 flex justify-end">
          <ImageCarousel
            interval={3000}
            images={catImages16by9}
            opacity={1}
            aspectRatio="16/9"
          />
        </div>
      </div>
    </div>
  );
}

export default TextWithCatCarousel;
