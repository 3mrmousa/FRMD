import Link from "next/link";

const categories = [
  { name: "Tops", icon: "dry_cleaning" },
  { name: "Bottoms", icon: "styler" },
  { name: "Outerwear", icon: "checkroom" },
  { name: "Footwear", icon: "footprint" },
];

export default function ShopByCategory() {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex items-center justify-between w-full">
        <p className="text-muted-foreground flex-1 text-md font-semibold tracking-[0.18em] uppercase mx-6">
          SHOP BY CATEGORY
        </p>
        <Link
          href="/products"
          className="text-foreground text-sm font-semibold tracking-[0.18em] uppercase mx-6"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:flex justify-around w-full mt-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/products?category=${category.name}`}
            className="flex flex-col items-start gap-3 border border-border
            px-4 py-1.5 text-foreground hover:bg-primary hover:text-primary-foreground
            transition-colors duration-200
            w-full group"
          >
            <span className="material-symbols-sharp text-muted-foreground group-hover:text-primary-foreground text-[2rem]! md:text-[3rem]! transition-colors duration-200">
              {category.icon.toLowerCase()}
            </span>
            <p className="md:text-2xl tracking-widest uppercase">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
      <hr className="w-full border-border" />
    </div>
  );
}
