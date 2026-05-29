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
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  collection: "Drop 01" | "Drop 02" | "Ongoing";
  category: "Shirts" | "Sweatshirts";
  image: StaticImageData;
  stars: number;
};

const products: Product[] = [
  {
    id: "01",
    name: "Concrete",
    price: 340,
    collection: "Drop 01",
    category: "Sweatshirts",
    image: sweetShirt6,
    stars: 4,
  },
  {
    id: "02",
    name: "Tension",
    price: 390,
    collection: "Drop 02",
    category: "Sweatshirts",
    image: sweetShirt7,
    stars: 5,
  },
  {
    id: "03",
    name: "Remnant",
    price: 210,
    collection: "Ongoing",
    category: "Sweatshirts",
    image: sweetShirt8,
    stars: 4,
  },
  {
    id: "04",
    name: "Archive",
    price: 280,
    collection: "Drop 01",
    category: "Sweatshirts",
    image: sweetShirt9,
    stars: 3,
  },
  {
    id: "05",
    name: "Concrete",
    price: 340,
    collection: "Drop 01",
    category: "Sweatshirts",
    image: sweetShirt10,
    stars: 4,
  },
  {
    id: "06",
    name: "Tension",
    price: 390,
    collection: "Drop 02",
    category: "Shirts",
    image: sweetShirt1,
    stars: 4,
  },
  {
    id: "07",
    name: "Remnant",
    price: 210,
    collection: "Ongoing",
    category: "Shirts",
    image: sweetShirt2,
    stars: 5,
  },
  {
    id: "08",
    name: "Archive",
    price: 280,
    collection: "Drop 01",
    category: "Shirts",
    image: sweetShirt3,
    stars: 5,
  },
  {
    id: "09",
    name: "Archive",
    price: 280,
    collection: "Drop 01",
    category: "Shirts",
    image: sweetShirt4,
    stars: 4,
  },
  {
    id: "10",
    name: "Archive",
    price: 280,
    collection: "Drop 01",
    category: "Shirts",
    image: sweetShirt5,
    stars: 4,
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
      className={`group relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-white/15 ${className}`}
    >
      <Link href={`/products/${product.id}`}>
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

        <div className="absolute bottom-4 left-4">
          <Rating
            name="text-feedback"
            value={product.stars}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
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
            <p className="font-semibold text-white/80">{formatPrice(product.price)}</p>
          </div>
        </div>
      </Link>

      <div
        className={`absolute bottom-4 right-4 flex items-center gap-3 
          transition-opacity duration-300 ${
            compact ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
      >
        {/* Cart */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-6 h-6 hover:text-blue-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M16 19a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2z"
          />
        </svg>

        {/* Wishlist */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-6 h-6 hover:text-red-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M20.8 4.6c-1.7-1.7-4.4-1.7-6.1 0L12 7.3 9.3 4.6C7.6 2.9 4.9 2.9 3.2 4.6s-1.7 4.4 0 6.1L12 19.5l8.8-8.8c1.7-1.7 1.7-4.4 0-6.1z"
          />
        </svg>
      </div>
    </article>
  );
}

export default function ProductAccordion() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);

  const stars = [5, 4, 3, 2, 1];
  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [],
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0 && selectedStars.length === 0)
      return products;

    return products.filter((product) => {
      const starsFilter =
        selectedStars.length === 0 || selectedStars.includes(product.stars);
      const categoriesFilter =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      return starsFilter && categoriesFilter;
    });
  }, [selectedCategories, selectedStars]);

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
          onChangeCategories={setSelectedCategories}
          stars={stars}
          selectedStars={selectedStars}
          onChangeStars={setSelectedStars}
        />
      </div>

      <main className="lg:col-span-4">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">
              Products
            </h2>
            <p className="text-sm text-black/60 dark:text-white/60">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5">
            <p className="text-black/60 dark:text-white/60">
              No products match these filters.
            </p>
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
