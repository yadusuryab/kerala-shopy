"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
export function FeaturesSection() {
  const features = [
    {
      title: "Style & Comfort with KeralaShopy",
      description:
        "Discover the perfect blend of style and comfort with our carefully curated footwear collection. Premium quality at unbeatable prices.",
      skeleton: "",
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-secondary-800",
    },
    {
      title: "A Proudly Malayali Brand",
      description:
        "Based in Kerala, we bring you trendy footwear designed for every occasion and budget.",
      skeleton: "",
      className: "border-b col-span-1 lg:col-span-2 dark:border-secondary-800",
    },
    {
      title: "Affordable & Stylish Footwear",
      description:
        "Quality footwear at budget-friendly prices. Place your order via DM 📩 or call ☎️ 96560 60874.",
      skeleton: "",
      className: "col-span-1 lg:col-span-3 border-b lg:border-r",
    },
    {
      title: "Nationwide Cash on Delivery",
      description:
        "Order from anywhere in India with our secure and hassle-free Cash on Delivery service.",
      skeleton: <SkeletonFour />,
      className:
        "col-span-1 lg:col-span-3 lg:border-none dark:border-secondary-800",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Style. Comfort. KeralaShopy.
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-secondary-500 text-center font-normal dark:text-secondary-300">
          KeralaShopy is a Kerala-based footwear store offering stylish and
          comfortable shoes at budget-friendly prices. We provide Cash on
          Delivery across India with a hassle-free shopping experience. Contact
          us for orders via DM or call 96560 60874.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-secondary-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-secondary-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
