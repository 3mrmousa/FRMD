export default function Header({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 border-b-2 border-gray-100 pb-5">
      <div className="min-w-0">
        <h1 className="text-xl sm:text-2xl md:text-4xl tracking-widest font-bebas truncate">
          {title}
        </h1>
        <p className="text-gray-500 text-xs font-inter tracking-wide">
          {subtitle}
        </p>
      </div>

      <div>{children}</div>
    </div>
  );
}
