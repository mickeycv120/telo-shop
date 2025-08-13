import { ProductGrid, Title } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title
        title={"Tienda"}
        subtitle={"La mejor tienda de productos"}
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
