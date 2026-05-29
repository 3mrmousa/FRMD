import Image from "next/image";
import Link from "next/link";
import sweetShirt1 from "@/public/sweet-shirts/ws1.png";
import sweetShirt3 from "@/public/sweet-shirts/ws3.png";
import sweetShirt6 from "@/public/sweet-shirts/bs1.png";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

// Mock data for the wishlist
const wishlistItems = [
  {
    id: "01",
    name: "Concrete",
    price: 340,
    category: "Sweatshirts",
    image: sweetShirt6,
    stars: 4,
  },
  {
    id: "06",
    name: "Tension",
    price: 390,
    category: "Shirts",
    image: sweetShirt1,
    stars: 4,
  },
  {
    id: "08",
    name: "Archive",
    price: 280,
    category: "Shirts",
    image: sweetShirt3,
    stars: 5,
  },
];

function WishlistCard({ item }: { item: (typeof wishlistItems)[0] }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow duration-300 hover:shadow-lg">
      {/* Image area */}
      <Link
        href={`/products/${item.id}`}
        className="relative aspect-4/5 overflow-hidden bg-muted"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute left-3 top-3 rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground border border-border/50">
          {item.category}
        </div>

        {/* Remove button */}
        <button className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm hover:bg-red-500 hover:text-white hover:border-red-500 border border-border/50 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 text-muted-foreground hover:scale-110">
          <FontAwesomeIcon icon={faXmark} className="w-3.5 h-3.5" />
        </button>
      </Link>

      {/* Product info */}
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <Link href={`/products/${item.id}`}>
              <h3 className="font-bold text-foreground tracking-tight text-base hover:underline underline-offset-2 transition-all">
                {item.name}
              </h3>
            </Link>
            <Rating
              name="read-only"
              value={item.stars}
              readOnly
              size="small"
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.3 }} fontSize="inherit" />
              }
            />
          </div>
          <p className="font-bold text-foreground text-base whitespace-nowrap">
            ${item.price.toLocaleString()}.00
          </p>
        </div>

        <button className="mt-1 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]">
          <FontAwesomeIcon icon={faCartShopping} className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default function WishlistPage() {
  return (
    <main className="container mx-auto px-5 lg:px-10 pt-30 pb-20 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="material-symbols-sharp text-[2.5rem]! text-foreground">
              favorite
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tighter text-foreground">
              Wishlist
            </h1>
          </div>
          <p className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""}{" "}
            saved
          </p>
        </div>

        <button className="w-full md:w-auto px-6 py-3 rounded-xl border border-border bg-background text-foreground font-semibold tracking-wide transition hover:bg-muted active:scale-[0.99] text-sm flex items-center justify-center gap-2">
          <span className="material-symbols-sharp text-[18px]!">
            delete_sweep
          </span>
          Clear Wishlist
        </button>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {wishlistItems.map((item) => (
            <WishlistCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[50vh] border border-dashed border-border rounded-3xl bg-muted/30">
          <span className="material-symbols-sharp text-[4rem]! text-muted-foreground mb-4">
            heart_broken
          </span>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-muted-foreground text-center max-w-sm mb-6 text-sm">
            Looks like you haven&apos;t added anything to your wishlist yet.
            Start exploring to find pieces you love.
          </p>
          <Link
            href="/products"
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold tracking-wide transition hover:opacity-90 flex items-center gap-2"
          >
            <span className="material-symbols-sharp text-[18px]!">
              explore
            </span>
            Explore Products
          </Link>
        </div>
      )}
    </main>
  );
}