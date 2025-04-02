import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanityClient";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site-config";

import { getShoeById } from "@/lib/vehicleQueries";
import ProductCarousel from "@/components/product/product-carousel";

import SHeading from "@/components/utils/section-heading";
import AddToCartButton from "@/components/cart/cart-buttons/add-to-cart";

interface ProductProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getShoeById(resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  const { name, price, images } = product;
  const ogImage = urlFor(images[0]?.asset.url).url();
  const ogDescription = `Check out the ${name} priced at ₹${price.toLocaleString()}. Available now!`;

  return {
    title: `${name} - Product Details`,
    description: ogDescription,
    openGraph: {
      title: `${name} - Product Details`,
      description: ogDescription,
      images: [{ url: ogImage, alt: name, width: 800, height: 600 }],
    },
  };
}

export default async function ProductPage({ params }: any) {
  const resolvedParams = await params;
  const product: any = await getShoeById(resolvedParams.id);

  if (!product) return notFound();

  const {
    name,
    category,
    material,
    waterResistance,
    movementType,
    caseSize,
    images,
    description,
    price,
    offerPrice,
    soldOut,
  } = product;
  const message = `Hi, I am interested in the ${name}.
  - Price: ₹${offerPrice ? offerPrice.toLocaleString() : price.toLocaleString()}
  - Category: ${category?.name}
  - Material: ${material}
  - Water Resistance: ${waterResistance}
  - Movement Type: ${movementType}
  - Case Size: ${caseSize}
  
  Check it out here: ${process.env.NEXT_PUBLIC_BASE_URL}/p/${
    resolvedParams.id
  }`;

  return (
    <div className="md:mx-28 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Carousel */}
        <ProductCarousel images={images} productName={name} />

        {/* Product Details */}
        <div className="space-y-4">
          <div>
            <p className="uppercase text-md font-semibold text-muted-foreground">
              {category?.name || site.name}
            </p>
            <h2 className="text-lg md:text-2xl font-bold uppercase">{name}</h2>
          </div>

          <div className="flex gap-4 items-center">
            <Badge className="rounded-md">
              {category?.name?.toUpperCase()}
            </Badge>
            <Badge className="rounded-md" variant={"secondary"}>
              Case Size: {caseSize}
            </Badge>
          </div>

          {/* Price Section */}
          <div className="col-span-2">
            {offerPrice ? (
              <div className="flex items-center gap-4">
                <p className="font-bold text-xl">
                  ₹{new Intl.NumberFormat("en-IN").format(offerPrice)}
                </p>
                <p className="text-lg font-extrabold text-muted-foreground line-through">
                  ₹{new Intl.NumberFormat("en-IN").format(price)}
                </p>
                <span className="text-sm font-bold text-green-600 ml-2">
                  {Math.round(((price - offerPrice) / price) * 100)}% OFF
                </span>
              </div>
            ) : (
              <p className="font-bold text-xl">
                ₹{new Intl.NumberFormat("en-IN").format(price)}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div>
            <AddToCartButton product={product} variant="buy-now" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`https://wa.me/+91${site.phone}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
            >
              <Button className="w-full rounded-sm   " variant={'outline'} size={'sm'}>
                <MessageCircle /> Order Now
              </Button>
            </Link>

            {/* Conditionally render "Sold Out" button or AddToCartButton */}
            {soldOut ? (
              <Button className="w-full rounded-sm" disabled size={'sm'}>
                Sold Out
              </Button>
            ) : (
              <AddToCartButton product={product} />
            )}
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="col-span-2">
              <SHeading
                title="About This Product"
                description={description}
                nolink={true}
              />
            </div>
            <div>
              <p className="font-semibold text-muted-foreground">Material</p>
              <p>{material || "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-muted-foreground">
                Water Resistance
              </p>
              <p>{waterResistance || "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-muted-foreground">
                Movement Type
              </p>
              <p>{movementType || "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-muted-foreground">Case Size</p>
              <p>{caseSize || "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-muted-foreground">Price</p>
              <p>
                {offerPrice ? (
                  <>
                    ₹{new Intl.NumberFormat("en-IN").format(offerPrice)}{" "}
                    <span className="text-muted-foreground line-through">
                      ₹{new Intl.NumberFormat("en-IN").format(price)}
                    </span>
                  </>
                ) : (
                  `₹${new Intl.NumberFormat("en-IN").format(price)}`
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
