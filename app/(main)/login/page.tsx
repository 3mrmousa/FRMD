import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function Login() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8 lg:-25">
      <div className="relative w-full max-w-md rounded-3xl bg-white px-5 pb-8 pt-20 text-black shadow-2xl sm:px-8">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-4 shadow-md">
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
          <h1 className="font-serif text-3xl font-bold text-primary sm:text-4xl">
            Login
          </h1>
          <p className="mt-2 text-sm text-black/60 sm:text-base">
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
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-black outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
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
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-black outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-black px-4 py-3 text-base font-bold text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black/20 active:scale-[0.99]"
          >
            Login
          </button>
        </form>

        <div className="my-6 h-px w-full bg-gray-300" />

        <div className="flex flex-col items-center justify-center gap-3 text-sm sm:text-base">
          <Link
            href="/register"
            className="font-semibold text-primary transition hover:opacity-80"
          >
            Create an account
          </Link>

          <Link
            href="/forgot-password"
            className="font-semibold text-primary transition hover:opacity-80"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </section>
  );
}
