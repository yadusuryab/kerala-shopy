"use client";

import { usePathname } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import { site } from "@/lib/site-config";

function Footer() {
  const pathname = usePathname();
  const isProductPage = pathname.startsWith("/p/");

  if (isProductPage) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 font-semibold">
          <div>
            <h3 className="mb-2 font-semibold">Contact</h3>
            <address className="space-y-2 text-muted-foreground text-sm not-italic">
              <p>{site.address}</p>
              <p>Phone: {site.phone}</p>
              <p>Email: {site.email}</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-2 font-semibold">Social</h3>
            <div className="grid text-muted-foreground">
              <Link href={`https://wa.me/+91${site.phone}?text=Hi`}><p>Whatsapp</p></Link>
              <Link href={`https://instagram.com/${site.instagram}`}><p>Instagram</p></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col text-muted-foreground font-semibold justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm">
            © {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
