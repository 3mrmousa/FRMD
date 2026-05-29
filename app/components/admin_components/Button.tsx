import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success"
    | "warning"
    | "info";
  size?: "xs" | "sm" | "md" | "lg";
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-bebas tracking-wider transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-zinc-200",
    secondary:
      "bg-zinc-200 text-black hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700",
    outline:
      "border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
    ghost:
      "text-black hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900",
    danger:
      "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:text-white dark:hover:bg-red-700",
    success:
      "bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:text-white dark:hover:bg-green-700",
    warning:
      "bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-600 dark:text-white dark:hover:bg-yellow-700",
    info: "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700",
  };

  const sizes = {
    xs: "px-2 py-1 text-xs cursor-pointer",
    sm: "px-3 py-1.5 text-sm cursor-pointer",
    md: "px-4 py-2 text-base cursor-pointer",
    lg: "px-6 py-3 text-lg cursor-pointer",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} font-inter`}
      {...props}
    >
      {children}
    </button>
  );
}
