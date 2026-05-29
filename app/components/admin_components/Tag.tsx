export default function Tag({ tag, color }: { tag: string; color: string }) {
  return (
    <span
      className={`text-sm font-medium tracking-widest uppercase text-${color}-800
    p-2 bg-${color}-300 dark:text-${color}-200 dark:bg-${color}-800 rounded-full`}
    >
      {tag}
    </span>
  );
}
