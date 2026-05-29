import Link from "next/link";

const products = [
  { name: "Raw Edge Hoodie", icon: "checkroom", price: "3,200 EGP" },
  { name: "Coach Jacket", icon: "dry_cleaning", price: "1,800 EGP" },
  { name: "Washed Tee — Black", icon: "apparel", price: "1,400 EGP" },
  { name: "Cargo Trouser", icon: "styler", price: "2,100 EGP" },
];

export default function NewArrivals() {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex justify-between w-full">
        <p className="text-muted-foreground flex-1 text-md font-semibold tracking-[0.18em] uppercase mx-6">
          NEW ARRIVALS
        </p>
        <Link
          href="/products"
          className="text-foreground text-sm font-semibold tracking-[0.18em] uppercase mx-6"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border border-border
            px-4 py-1.5 text-foreground hover:bg-primary hover:text-primary-foreground
            transition-colors duration-200 cursor-pointer group"
          >
            {/* <img src={product.image} alt={product.name} className="w-full h-auto" /> */}
            <div className="h-50 w-full flex items-center justify-center bg-muted group-hover:bg-transparent transition-colors duration-200">
              <span className="material-symbols-sharp text-muted-foreground group-hover:text-primary-foreground text-[2rem]! md:text-[3rem]! transition-colors duration-200">
                {product.icon.toLowerCase()}
              </span>
            </div>
            <div className="p-4 flex flex-col">
              <p className="text-sm text-foreground group-hover:text-primary-foreground font-semibold tracking-widest uppercase transition-colors duration-200">
                {product.name}
              </p>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 font-medium tracking-widest uppercase transition-colors duration-200">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className="w-full border-border" />
    </div>
  );
}
