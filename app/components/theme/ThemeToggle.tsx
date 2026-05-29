"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
      className="cursor-pointer rounded-lg group text-lg hover:bg-black dark:hover:bg-white border-black dark:border-white px-4 py-1 duration-300 transition-all"
    >
      {isDark ? (
        <FontAwesomeIcon className="text-white group-hover:text-black group-hover:animate-swing" icon={faSun} />
      ) : (
        <FontAwesomeIcon className="text-black group-hover:text-white group-hover:animate-swing" icon={faMoon} />
      )}
    </button>
  );
}
