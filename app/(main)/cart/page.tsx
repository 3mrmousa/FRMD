import Image from "next/image";
import Link from "next/link";
import sweatShirt2 from "@/public/sweet-shirts/ws2.png";

export function CardItem() {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 border-b border-border gap-6 sm:gap-4 group">
      <div className="flex items-center gap-5">
        <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden bg-muted shrink-0 border border-border/50">
          <Image
            src={sweatShirt2}
            alt="Compass Graphic Sweatshirt"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-base sm:text-lg font-bold text-foreground line-clamp-2">
            Compass Graphic Sweatshirt
          </h2>
          <p className="text-xs sm:text-sm font-medium tracking-widest text-muted-foreground mt-1 uppercase">
            Sweatshirt
          </p>
          <p className="text-sm sm:text-base font-bold text-foreground mt-2">$220.00</p>
        </div>
      </div>
      
      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto mt-2 sm:mt-0 gap-4 sm:gap-6">
        <div className="flex items-center border border-border rounded-full bg-background overflow-hidden">
          <button className="px-4 py-1.5 hover:bg-muted transition-colors text-foreground focus:outline-none active:bg-muted/80">
            -
          </button>
          <span className="w-8 text-center text-sm font-semibold text-foreground">
            1
          </span>
          <button className="px-4 py-1.5 hover:bg-muted transition-colors text-foreground focus:outline-none active:bg-muted/80">
            +
          </button>
        </div>
        <button className="text-sm font-medium tracking-wider text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors">
          Remove
        </button>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <main className="container mx-auto px-5 lg:px-10 pt-30 pb-20 min-h-screen">
      <div className="mb-10">
        <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tighter text-foreground mb-3">
          Your Cart
        </h1>
        <p className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
          3 items
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Cart Items List */}
        <div className="flex-1 w-full flex flex-col">
          <div className="border-t border-border">
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px] xl:w-[480px] shrink-0 lg:sticky lg:top-30">
          <div className="bg-muted/30 border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">Order Summary</h2>
            
            <div className="flex flex-col gap-4 text-sm sm:text-base">
              <div className="flex justify-between items-center text-foreground">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">$660.00</span>
              </div>
              <div className="flex justify-between items-center text-foreground">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold">Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-center text-foreground">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-semibold">$33.00</span>
              </div>
            </div>

            <div className="h-px w-full bg-border my-6" />

            <div className="flex justify-between items-end mb-8 text-foreground">
              <span className="text-lg font-bold">Total</span>
              <span className="text-3xl font-bold tracking-tighter">$693.00</span>
            </div>

            <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-wide transition hover:opacity-90 active:scale-[0.99] focus:ring-2 focus:ring-primary/20 outline-none">
              Checkout Now
            </button>
            
            <Link 
              href="/products" 
              className="mt-4 flex w-full items-center justify-center py-4 rounded-xl border border-border bg-background text-foreground font-semibold tracking-wide transition hover:bg-muted active:scale-[0.99]"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
