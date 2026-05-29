import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/main/logo.png";

export default function Register() {
  return (
    <section className="mt-25 flex min-h-screen w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-xl rounded-3xl bg-background border border-border px-5 pb-8 pt-20 text-foreground shadow-2xl sm:px-8">
        {/* Logo */}
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

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Register
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
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
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-primary/20"
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
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-primary/20"
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
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-primary/20"
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
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-primary/20"
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
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-primary/20"
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
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-border accent-primary"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="font-semibold text-foreground hover:text-muted-foreground transition-colors">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-semibold text-foreground hover:text-muted-foreground transition-colors">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-3 text-base font-bold text-primary-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/20 active:scale-[0.99]"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-border" />

        {/* Footer Links */}
        <div className="flex flex-col items-center justify-center gap-3 text-sm sm:text-base">
          <p className="text-muted-foreground">Already have an account?</p>
          <Link
            href="/login"
            className="font-semibold text-foreground hover:text-muted-foreground transition-colors"
          >
            Login here
          </Link>
        </div>
      </div>
    </section>
  );
}
