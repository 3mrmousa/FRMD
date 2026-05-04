"use client";

import { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Filter from "./Filter";

import sweetShirt1 from "@/public/sweet-shirts/ws1.png";
import sweetShirt2 from "@/public/sweet-shirts/ws2.png";
import sweetShirt3 from "@/public/sweet-shirts/ws3.png";
import sweetShirt4 from "@/public/sweet-shirts/ws4.png";
import sweetShirt5 from "@/public/sweet-shirts/ws5.png";

import sweetShirt6 from "@/public/sweet-shirts/bs1.png";
import sweetShirt7 from "@/public/sweet-shirts/bs2.png";
import sweetShirt8 from "@/public/sweet-shirts/bs3.png";
import sweetShirt9 from "@/public/sweet-shirts/bs4.png";
import sweetShirt10 from "@/public/sweet-shirts/bs5.png";

type Product = {
  id: string;
  name: string;
  price: number;
  collection: "Drop 01" | "Drop 02" | "Ongoing";
  category: "Shirts" | "Sweatshirts";
  image: StaticImageData;
};

const products: Product[] = [
  {
    id: "01",
    name: "Concrete",
    price: 340,
    collection: "Drop 01",
    category: "Sweatshirts",
    image: sweetShirt6,
  },
  {
    id: "02",
    name: "Tension",
    price: 390,
    collection: "Drop 02",
    category: "Sweatshirts",
    image: sweetShirt7,
  },
  {
    id: "03",
    name: "Remnant",
    price: 210,
    collection: "Ongoing",
    category: "Sweatshirts",
    image: sweetShirt8,
  },
  {
    id: "04",
    name: "Archive",
    price: 280,
    collection: "Drop 01",
    category: "Sweatshirts",
    image: sweetShirt9,
  },
  {
    id: "05",
    name: "Concrete",
    price: 340,
    collection: "Drop 01",
    category: "Sweatshirts",
    image: sweetShirt10,
  },
  {
    id: "06",
    name: "Tension",
    price: 390,
    collection: "Drop 02",
    category: "Shirts",
    image: sweetShirt1,
  },
  {
    id: "07",
    name: "Remnant",
    price: 210,
    collection: "Ongoing",
    category: "Shirts",
    image: sweetShirt2,
  },
  {
    id: "08",
    name: "Archive",
    price: 280,
    collection: "Drop 01",
    category: "Shirts",
    image: sweetShirt3,
  },
  {
    id: "09",
    name: "Archive",
    price: 280,
    collection: "Drop 01",
    category: "Shirts",
    image: sweetShirt4,
  },
  {
    id: "10",
    name: "Archive",
    price: 280,
    collection: "Drop 01",
    category: "Shirts",
    image: sweetShirt5,
  },
];

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function formatPrice(price: number) {
  return `$${price.toLocaleString()}`;
}

function ProductCard({
  product,
  className = "",
  compact = false,
}: {
  product: Product;
  className?: string;
  compact?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-neutral-100 ${className}`}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        placeholder="blur"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 30vw"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute left-4 text-black top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] backdrop-blur-sm">
        {product.category}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/70">
          {product.id} · {product.collection}
        </p>

        <div
          className={`transition-opacity duration-300 ${
            compact ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <h3
            className={`mt-1 font-bold tracking-tight text-white ${
              compact ? "text-lg" : "text-2xl"
            }`}
          >
            {product.name}
          </h3>
          <p className="text-sm text-white/80">{formatPrice(product.price)}</p>
        </div>
      </div>
    </article>
  );
}

export default function ProductAccordion() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [],
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) return products;

    return products.filter((product) =>
      selectedCategories.includes(product.category),
    );
  }, [selectedCategories]);

  const desktopRows = useMemo(
    () => chunkArray(filteredProducts, 3),
    [filteredProducts],
  );

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-5 mb-10">
      <div className=" lg:block lg:sticky lg:top-25 lg:self-start">
        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          onChange={setSelectedCategories}
        />
      </div>

      <main className="lg:col-span-4">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Products
            </h2>
            <p className="text-sm text-black/60">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-black/15 bg-black/5">
            <p className="text-black/60">No products match these filters.</p>
          </div>
        ) : (
          <>
            <div className="hidden md:flex flex-col gap-3">
              {desktopRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex h-80 gap-3 overflow-hidden rounded-2xl"
                >
                  {row.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      className="h-full w-full cursor-pointer flex-1 transition-all duration-500 md:hover:flex-[1.25]"
                    />
                  ))}

                  {row.length < 3 &&
                    Array.from({ length: 3 - row.length }).map((_, index) => (
                      <div
                        key={`empty-${rowIndex}-${index}`}
                        className="flex-1 rounded-2xl"
                      />
                    ))}
                </div>
              ))}
            </div>

            {/* Mobile grid */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  compact
                  className="aspect-3/4"
                />
              ))}
            </div>
          </>
        )}
      </main>
    </section>
  );
}
