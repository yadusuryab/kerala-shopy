"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useAnimate } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";

import {
  HighlighterItem,
  HighlightGroup,
  Particles,
} from "@/components/ui/highlighter";
import { site } from "@/lib/site-config";
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import { Phone } from "lucide-react";
import Brand from "../brand/brand";

export function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#javascript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#react-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#typescript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#next-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);
  return (
    <section className="relative  mb-20 mt-6 mx-2 max-w-5xl  ">
    
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
       
            <div className="relative z-10 h-full overflow-hidden rounded-none ">
             
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <Brand className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2" />
                
                 
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6   pb-1 font-bold ">
                        <span className="text-2xl md:text-4xl">
                          Any questions about us?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-400">
                      Feel free to contact us!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link href={`tel:${site.phone}`} target="_blank">
                        <Button>
                          <Phone /> Call now
                        </Button>
                      </Link>
                      <Link
                        href={`https://instagram.com/${site.instagram}`}
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "secondary",
                            size: "icon",
                          })
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <IconBrandInstagram />
                        </span>
                      </Link>
                      <Link
                        href={`https://wa.me/+91${site.phone}`}
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "secondary",
                            size: "icon",
                          })
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <IconBrandWhatsapp />
                        </span>
                      </Link>
                   
                      {/* <Link
                        href={site.google_map}
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "secondary",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <IconBrandGoogleMaps
                           
                          />
                        </span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
        </div>
     
    </section>
  );
}
