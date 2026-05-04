import Link from "next/link";
import HeroBgImage from "../public/HeroBgImage.png";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div
        className="relative min-h-screen w-full flex items-center justify-center text-3xl font-bold text-primary"
        style={{
          backgroundImage: `url(${HeroBgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute top-30 left-1/2 -translate-x-1/2 
        flex flex-col items-center justify-center w-xs md:w-2xl md:mt-20 lg:mt-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black font-serif">
            You weren't built to blend in.
          </h1>
        </div>
      </div>
    </div>
  );
}
