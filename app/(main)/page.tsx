import HeroBgImageDark from "../public/main/darkModeBg.png";
import HeroBgImageLight from "../public/main/lightModeBg.png";
import Ticker from "../components/homePage/Ticker";
import ShopByCategory from "../components/homePage/ShopByCategory";
import NewArrivals from "../components/homePage/NewArrivals";
import CTA from "../components/homePage/CTA";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div
        className="relative
  bg-[url(/main/lightModeBg.png)]
  dark:bg-[url(/main/darkModeBg.png)]
        min-h-screen w-full flex items-center justify-center text-3xl font-bold text-primary"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "100% 40%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute top-30 left-1/2 -translate-x-1/2 
        flex flex-col items-center w-xs md:w-2xl md:mt-20 lg:mt-0 text-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-[0.15em] uppercase hover:underline transition-all">
            Spring / Summer 2026 — New Drop
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-foreground font-serif">
            You weren't built to blend in
          </h1>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-primary py-2.5">
        <Ticker />
      </div>
      <div className="w-full overflow-hidden bg-background pt-2.5">
        <ShopByCategory />
      </div>
      <div className="w-full overflow-hidden bg-background pt-2.5">
        <NewArrivals />
      </div>
      <div className="w-full overflow-hidden bg-background">
        <CTA />
      </div>
    </div>
  );
}
