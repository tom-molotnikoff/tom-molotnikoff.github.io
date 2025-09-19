import { useIsMobile } from "@/hooks/use-mobile";
import {
  TypographyH1,
  TypographyH2,
  TypographyMuted,
} from "@/components/typography";
import ImageCarousel from "@/components/ui/image-carousel";
import { catImages16by9, catImages9by16 } from "@/pages/home/cat-images";

function TextWithCatCarousel() {
  const isMobile = useIsMobile();

  const description =
    "The internet was made for pictures of cats, there shouldn't be anything wrong with adding a few more";
  const names = "Bean and Soup";
  const title = "The folks";

  if (isMobile) {
    return (
      <div className="flex-1 flex flex-col items-center text-center">
        <TypographyH1>{title}</TypographyH1>
        <TypographyH2>{names}</TypographyH2>
        <ImageCarousel
          interval={3000}
          images={catImages9by16}
          opacity={1}
          aspectRatio="9/16"
        />
        <TypographyMuted>{description}</TypographyMuted>
      </div>
    );
  }

  return (
    <div className="flex flex-1 items-center justify-center gap-5">
      <div className="flex flex-1 flex-col justify-center items-start text-left">
        <TypographyH1>{title}</TypographyH1>
        <TypographyH2>{names}</TypographyH2>
        <TypographyMuted>{description}</TypographyMuted>
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
  );
}

export default TextWithCatCarousel;
