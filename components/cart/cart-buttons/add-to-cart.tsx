"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

interface AddToCartButtonProps {
  product: {
    _id: string;
    name: string;
    category: {
      name: string;
      slug: string;
    };
    material: string;
    waterResistance: string;
    movementType: string;
    caseSize: string;
    images: { asset: { url: string } }[];
    description: string;
    price: number;
    offerPrice?: number;
  };
  variant?: "add-to-cart" | "buy-now";
}

export default function AddToCartButton({ product, variant = "add-to-cart" }: AddToCartButtonProps) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setIsInCart(cart.some((item: any) => item._id === product._id));
  }, [product._id]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (!isInCart) {
      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setIsInCart(true);
    }
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Add to cart if not already there
    if (!cart.some((item: any) => item._id === product._id)) {
      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    
    // Redirect to checkout
    window.location.href = "/checkout";
  };

  if (variant === "buy-now") {
    return (
      <Button onClick={handleBuyNow} className="w-full" size={'sm'}>
        <Zap className="mr-2 h-4 w-4" /> Buy Now On COD
      </Button>
    );
  }

  return isInCart ? (
    <Link href="/my-cart">
      <Button variant="outline" className="w-full" size={'sm'}>
        <CheckCircle className="mr-2 h-4 w-4" /> View in Cart
      </Button>
    </Link>
  ) : (
    <Button onClick={handleAddToCart} className="w-full" size={'sm'}>
      <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
    </Button>
  );
}