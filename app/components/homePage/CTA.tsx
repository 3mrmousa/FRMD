import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-primary h-70 px-5 flex flex-col md:flex-row items-center
     justify-evenly md:justify-between">
      <div>
        <p
          className="text-primary-foreground text-2xl md:text-4xl 
        font-bold tracking-[0.18em] uppercase w-1/2 mx-auto text-center
        md:w-full md:text-left"
        >
          The new drop <span className="text-primary-foreground/50">is live.</span>
        </p>
      </div>

      <div>
        <Link
          href="/products"
          className="text-primary-foreground bg-primary border-2 border-primary-foreground text-sm 
        font-semibold tracking-[0.18em] uppercase p-4 md:px-10 md:py-5 rounded-2xl
        hover:bg-primary-foreground hover:text-primary transition-all duration-200 cursor-pointer"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
