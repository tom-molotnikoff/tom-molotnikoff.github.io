import { useEffect, useState } from "react";
import { Card, CardContent } from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./carousel";

type ImageCarouselProps = {
  interval: number;
  images: string[];
  opacity: number;
  aspectRatio: "16/9" | "9/16";
};

function ImageCarousel({
  interval,
  images,
  opacity,
  aspectRatio,
}: ImageCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!carouselApi) return;
    if (isHovered) return;

    const timer = setInterval(() => {
      carouselApi.scrollNext();
    }, interval);

    return () => clearInterval(timer);
  }, [interval, isHovered, images.length, carouselApi]);

  const aspectClass =
    aspectRatio === "16/9"
      ? "aspect-[16/9]"
      : aspectRatio === "9/16"
      ? "aspect-[9/16]"
      : "";

  return (
    <Card
      className={`h-full min-h-110 max-h-[calc(100vh-300px)] w-auto mx-auto my-8 max-w-[900px] ${aspectClass} border-none shadow-xl bg-transparent p-0 flex items-center justify-center group transition-all`}
      onMouseEnter={() => setIsHovered(true)}
      style={{ opacity: opacity ?? 1 }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 w-full h-full relative">
        <Carousel
          className="w-full h-full"
          opts={{ loop: true }}
          setApi={setCarouselApi}
        >
          <CarouselContent>
            {images.map((img, idx) => (
              <CarouselItem key={img} className="w-full h-full">
                <img
                  src={img}
                  alt={`image ${idx + 1}`}
                  className={`object-cover w-full h-full transition-transform duration-700 ease-in-out ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  );
}

export default ImageCarousel;
