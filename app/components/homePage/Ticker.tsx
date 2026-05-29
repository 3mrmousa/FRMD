"use client";

import Marquee from "react-fast-marquee";

const items = [
  "FRMD",
  "New Arrivals",
  "SS 2026",
  "Free Shipping Over 500 EGP",
  "Express Delivery Cairo",
];

export default function Ticker() {
  return (
      <Marquee speed={50} autoFill className="bg-primary py-2.5">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-primary-foreground text-[15px] font-bebas tracking-[0.25em] uppercase mx-6"
          >
            {item}
            <span className="ml-6 opacity-40">·</span>
          </span>
        ))}
      </Marquee>
  );
}
