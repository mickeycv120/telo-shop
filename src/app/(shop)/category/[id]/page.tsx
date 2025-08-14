"use client";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

const CartPage = ({ params }: Props) => {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);
  /* if (id === "kids") {
    notFound();
  } */

  const labels: Record<Category, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  return (
    <div>
      <Title
        title={`Artículos ${labels[id]}`}
        subtitle={"La mejor tienda de productos"}
        className="mb-2"
      />
      <ProductGrid products={products} />
    </div>
  );
};

export default CartPage;
