"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../../../public/logoSvg.svg";
import Image from "next/image";
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [navModal, setNavModal] = useState(false);

  const pathname = usePathname();
  const hideSearch = pathname === "/login" || pathname === "/register";

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className="fixed w-5/6 hidden md:flex z-50 top-5 left-1/2 -translate-x-1/2 
      text-black font-serif items-center justify-between bg-black/10 backdrop-blur-lg rounded-xl px-6"
      >
        <div className="logo shrink-0 cursor-pointer origin-top-center duration-500 hover:scale-110 hover:animate-swing">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={100} height={100} />
          </Link>
        </div>

        {!hideSearch && <SearchBar />}

        <ul className="flex gap-6">
          <li>
            <Link
              href="/products"
              className="transition-all rounded-xl border-2 border-black p-1 duration-300 hover:scale-105 hover:bg-black hover:text-white inline-block"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="transition-all rounded-xl border-2 border-black p-1 duration-300 hover:scale-105 hover:bg-black hover:text-white inline-block"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/login"
              className="transition-all bg-black text-white rounded-xl border-2 border-black p-1 duration-300 hover:scale-105 hover:bg-white/1 hover:text-black inline-block"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/register"
              className="transition-all bg-black text-white rounded-xl border-2 border-black p-1 duration-300 hover:scale-105 hover:bg-white/1 hover:text-black inline-block"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden flex justify-between absolute z-50 top-5 left-1/2 -translate-x-1/2 text-black font-serif items-center w-4/5">
        <div className="logo shrink-0 cursor-pointer origin-top-center duration-500 hover:scale-110 hover:animate-swing">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={70} height={70} />
          </Link>
        </div>

        {!hideSearch && <SearchBar />}

        <button
          onClick={() => setNavModal((prev) => !prev)}
          className="transition-all bg-black text-white p-2 rounded-xl duration-300 hover:scale-105 hover:text-black/80"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Modal */}
      {navModal && (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 z-9999 
        backdrop-blur-md bg-black/30 flex items-center justify-center"
        >
          <button
            className="absolute top-10 right-10 text-6xl text-black transition-all duration-300 hover:scale-105 hover:text-black/80"
            onClick={() => setNavModal(!navModal)}
          >
            ×
          </button>

          <div className="bg-white text-black font-serif p-15 rounded-xl shadow-lg">
            <ul className="flex flex-col gap-5 text-2xl text-center">
              <li>
                <Link
                  href="/products"
                  className="transition-all duration-300 hover:scale-105 hover:text-black/80 inline-block"
                  onClick={() => setNavModal(false)}
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-all duration-300 hover:scale-105 hover:text-black/80 inline-block"
                  onClick={() => setNavModal(false)}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="transition-all bg-black text-white px-6 py-2 rounded-xl duration-300 hover:scale-105 hover:text-black/80 inline-block"
                  onClick={() => setNavModal(false)}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="transition-all bg-black text-white px-6 py-2 rounded-xl duration-300 hover:scale-105 hover:text-black/80 inline-block"
                  onClick={() => setNavModal(false)}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
