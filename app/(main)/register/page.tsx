import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function Register() {
  return (
    <section className="mt-25 flex min-h-screen w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-xl rounded-3xl bg-white px-5 pb-8 pt-20 text-black shadow-2xl sm:px-8">
        {/* Logo */}
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

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-primary sm:text-4xl">
            Register
          </h1>
          <p className="mt-2 text-sm text-black/60 sm:text-base">
            Create your account and join us.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="firstName"
                className="font-serif text-lg font-semibold sm:text-xl"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                placeholder="Enter first name"
                className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-black outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastName"
                className="font-serif text-lg font-semibold sm:text-xl"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                placeholder="Enter last name"
                className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-black outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="font-serif text-lg font-semibold sm:text-xl"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              placeholder="Choose a username"
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-black outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-serif text-lg font-semibold sm:text-xl"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-black outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-serif text-lg font-semibold sm:text-xl"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                placeholder="Create password"
                className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-black outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="font-serif text-lg font-semibold sm:text-xl"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
                placeholder="Confirm password"
                className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-black outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm text-black/70 sm:text-base">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 accent-black"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="font-semibold text-primary">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-semibold text-primary">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-black px-4 py-3 text-base font-bold text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black/20 active:scale-[0.99]"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-gray-300" />

        {/* Footer Links */}
        <div className="flex flex-col items-center justify-center gap-3 text-sm sm:text-base">
          <p className="text-black/60">Already have an account?</p>
          <Link
            href="/login"
            className="font-semibold text-primary transition hover:opacity-80"
          >
            Login here
          </Link>
        </div>
      </div>
    </section>
  );
}
