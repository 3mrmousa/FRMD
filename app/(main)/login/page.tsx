import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/main/logo.png";

export default function Login() {
  return (
    <section className="mt-15 flex min-h-screen w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8 lg:mt-30">
      <div className="relative w-full max-w-md rounded-3xl bg-background border border-border px-5 pb-8 pt-20 text-foreground shadow-2xl sm:px-8">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background border border-border p-4 shadow-md">
          <Image
            src={logo}
            alt="Logo"
            width={90}
            height={90}
            className="h-auto w-17.5 sm:w-22.5"
            priority
          />
        </div>

        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Login
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Welcome back. Please sign in to your account.
          </p>
        </div>

        <form className="space-y-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="font-serif text-lg font-semibold sm:text-xl"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              placeholder="Enter your username"
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-serif text-lg font-semibold sm:text-xl"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-3 text-base font-bold text-primary-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/20 active:scale-[0.99]"
          >
            Login
          </button>
        </form>

        <div className="my-6 h-px w-full bg-border" />

        <div className="flex flex-col items-center justify-center gap-3 text-sm sm:text-base">
          <Link
            href="/register"
            className="font-semibold text-foreground hover:text-muted-foreground transition-colors"
          >
            Create an account
          </Link>

          <Link
            href="/forgot-password"
            className="font-semibold text-foreground hover:text-muted-foreground transition-colors"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </section>
  );
}
