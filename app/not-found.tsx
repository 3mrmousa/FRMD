import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 pt-30 pb-20 text-center">
      <h1 className="font-serif text-8xl font-bold tracking-tighter text-foreground sm:text-9xl">
        404
      </h1>
      <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        OOPS! PAGE NOT FOUND
      </h2>
      <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
        We couldn’t find the page you were looking for. Maybe it got lost in the
        streets? Check your map or head back to the main road.
      </p>
      
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
        >
          Go back home
        </Link>
        <Link
          href="/products"
          className="rounded-xl border border-border px-6 py-3 text-sm font-bold text-foreground transition hover:bg-muted"
        >
          Shop products
        </Link>
      </div>
    </main>
  );
}
