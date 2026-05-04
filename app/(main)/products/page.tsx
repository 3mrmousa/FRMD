// app/products/page.tsx

import ProductAccordion from "@/app/components/products/ProductAccordion";

export default function ProductsPage() {
  return (
    <main className="min-h-screen px-8 pt-30 pb-20 z-10">
      <ProductAccordion />
    </main>
  );
}
