import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Poster from "@/public/h1.webp";
import Poster2 from "@/public/h2.avif";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

const pixel = Pixelify_Sans({ subsets: ["latin"], weight: ["400"] });
export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const slideData = [
    { title: "Buy one get one free.", src: Poster2.src },
    { title: "Buy one get one free.", src: Poster.src },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full relative h-[500px] md:max-h-full bg-black/80"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slideData.map((slide, index) => (
            <CarouselItem key={index}>
              <Link href={"/products"}>
                <div className="relative">
                  <Image
                    width={1080}
                    height={1080}
                    className="w-full h-[500px] opacity-40 object-cover"
                    alt={slide.title}
                    src={slide.src}
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Slide Indicators */}

        <div className="absolute bg-gradient-to-t  from-black p-4 to-transparent text-center w-full bottom-0">
        <div className="w-full mb-5 mx-auto ">
          <h2 className="font-bold text-white text-2xl"> Quality Products</h2>
          <p className="font- text-secondary  mb-5">Best Quality Products at Affordable Price.</p>
          <Link href={"/products"} className="flex justify-center">
            <Button
              variant={"secondary"}
            >
              Shop
            </Button>
          </Link>
        </div>
        <div className=" flex justify-center space-x-2 mt-2">
        {slideData.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-secondary "
                : "bg-gray-400  "
            }`}
          />
        ))}
      </div>
        </div>
      </Carousel>
     
    </>
  );
}
