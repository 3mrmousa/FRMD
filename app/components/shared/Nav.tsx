"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import logo from "../../../public/main/logoSvg.svg";
import Image from "next/image";
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import ThemeToggle from "../theme/ThemeToggle";
import Logo from "./Logo";

export default function Nav() {
  const [navModal, setNavModal] = useState(false);

  const pathname = usePathname();
  const hideSearch = pathname === "/login" || pathname === "/register";

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setNavModal(false);
      }
    }

    if (navModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [navModal]);

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className="fixed top-0 hidden md:flex z-50 items-center w-full 
       px-5 py-2 gap-3 bg-background border-b border-border shadow-sm transition-colors duration-200"
      >
        <div className="shrink-0 cursor-pointer mr-auto">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={80}
              className="hover:animate-swing"
            />
            {/* <Logo /> */}
          </Link>
        </div>

        {!hideSearch && <SearchBar />}

        <Link
          href="/products"
          className="text-sm font-medium tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors duration-200"
        >
          Products
        </Link>

        <Link
          href="/contact"
          className="text-sm font-medium tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors duration-200"
        >
          Contact
        </Link>

        <div className="w-px h-5 bg-border mx-1" />

        <Link
          href="/login"
          className="text-sm font-semibold tracking-widest uppercase border border-border px-4 py-1.5 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-md"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="text-sm font-semibold tracking-widest uppercase bg-primary text-primary-foreground border border-primary px-4 py-1.5 hover:opacity-90 transition-opacity duration-200 rounded-md"
        >
          Register
        </Link>

        <ThemeToggle />
      </nav>

      {/* Mobile Nav */}
      <nav
        className="md:hidden fixed py-8 z-50 top-0 left-0 right-0 flex 
      justify-between items-center h-[52px] px-4 bg-background border-b border-border transition-colors duration-200 shadow-sm"
      >
        <div className="shrink-0 cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="Logo" width={60} height={60} />
          </Link>
        </div>

        {!hideSearch && <SearchBar />}

        <button
          onClick={() => setNavModal((prev) => !prev)}
          className="cursor-pointer bg-primary text-primary-foreground p-1.5 hover:opacity-80 transition-opacity duration-200 rounded-md"
        >
          <MenuIcon fontSize="small" />
        </button>
      </nav>

      {/* Mobile Modal */}
      {navModal && (
        <div className="fixed inset-0 z-[9999] backdrop-blur-md bg-background/80 flex items-center justify-center transition-all duration-300">
          <button
            className="absolute cursor-pointer top-8 right-8 text-5xl text-foreground hover:text-muted-foreground transition-colors duration-200"
            onClick={() => setNavModal(false)}
          >
            ×
          </button>

          <div className="bg-background border border-border shadow-2xl rounded-2xl p-12" ref={modalRef}>
            <ul className="flex flex-col gap-6 text-center">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-foreground font-medium tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors duration-200"
                  onClick={() => setNavModal(false)}
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground font-medium tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors duration-200"
                  onClick={() => setNavModal(false)}
                >
                  Contact
                </Link>
              </li>

              <div className="w-full h-px bg-border" />

              <li>
                <Link
                  href="/login"
                  className="text-sm font-semibold tracking-[0.15em] uppercase border border-border px-10 py-2.5 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 inline-block rounded-md"
                  onClick={() => setNavModal(false)}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="text-sm font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground border border-primary px-10 py-2.5 hover:opacity-90 transition-opacity duration-200 inline-block rounded-md"
                  onClick={() => setNavModal(false)}
                >
                  Register
                </Link>
              </li>

              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
