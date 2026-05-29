import Link from "next/link";

const shopLinks = [
  { name: "Products", url: "/products" },
  { name: "New Arrivals", url: "/products?sort=newest" },
  { name: "Best Sellers", url: "/products?sort=popular" },
];

const infoLinks = [
  { name: "Contact", url: "/contact" },
  { name: "Privacy Policy", url: "/privacy" },
  { name: "Returns & Exchanges", url: "/returns" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border text-foreground">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {/* Brand column */}
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-bebas tracking-[0.3em] uppercase">
            FRMD
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Built for those who refuse to blend in. Premium streetwear crafted
            in Cairo.
          </p>
        </div>

        {/* Shop links */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Shop
          </p>
          <ul className="flex flex-col gap-2">
            {shopLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info links */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Info
          </p>
          <ul className="flex flex-col gap-2">
            {infoLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            &copy; {new Date().getFullYear()} FRMD. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span className="material-symbols-sharp text-[20px]!">
                photo_camera
              </span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span className="material-symbols-sharp text-[20px]!">tag</span>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span className="material-symbols-sharp text-[20px]!">
                music_note
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
