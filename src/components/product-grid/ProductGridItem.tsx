"use client";

import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayName, setDisplayName] = useState(product.images[0]);
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayName}`}
          alt={product.title}
          width={500}
          height={500}
          className="w-full object-cover rounded"
          onMouseEnter={() => setDisplayName(product.images[1])}
          onMouseLeave={() => setDisplayName(product.images[0])}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-500" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
};
