export default function SearchBar() {
  return (
    <div className="w-250 flex items-center justify-center shrink">
      <input
        type="text"
        placeholder="Search"
        className="w-4/5 border border-border bg-background rounded-xl p-2 
        placeholder:text-muted-foreground text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
      />
    </div>
  );
}
