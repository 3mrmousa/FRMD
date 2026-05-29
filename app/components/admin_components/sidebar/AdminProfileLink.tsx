import Link from "next/link";

export default function AdminProfileLink() {
  return (
    <Link
      href={"/admin/profile"}
      className="flex group items-start pl-5 py-2 hover:bg-background transition-colors w-full duration-300"
    >
      <p
        className="w-10 h-10 rounded-full bg-muted-foreground border border-border-subtle
      text-primary-foreground flex items-center justify-center font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
      >
        A
      </p>
      <div className="flex flex-col justify-center ml-2">
        <p className="text-md font-bold font-sans w-ful text-primary-foreground group-hover:text-foreground cursor-pointer transition-colors duration-300">
          Admin
        </p>
        <p className="text-sm font-light tracking-wide font-sans text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          Main Admin
        </p>
      </div>
    </Link>
  );
}
