"use client";

import bg from "@/public/filterBG.png";

type FilterProps = {
  categories: string[];
  selectedCategories: string[];
  onChange: (categories: string[]) => void;
};

export default function Filter({
  categories,
  selectedCategories,
  onChange,
}: FilterProps) {
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onChange(selectedCategories.filter((item) => item !== category));
      return;
    }

    onChange([...selectedCategories, category]);
  };

  const clearAll = () => onChange([]);

  return (
    <aside
      className="overflow-hidden rounded-2xl border border-black/10 bg-cover bg-center shadow-xl"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="rounded-2xl bg-white/80 p-6 backdrop-blur-md">
        <div className="mb-6 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Filters
            </h2>
            <p className="text-sm text-black/60">
              {selectedCategories.length === 0
                ? "Showing all products"
                : `${selectedCategories.length} selected`}
            </p>
          </div>

          <button
            onClick={clearAll}
            disabled={selectedCategories.length === 0}
            className="rounded-full border border-black/15 px-3 py-1.5 text-sm text-black transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Clear
          </button>
        </div>

        <fieldset className="space-y-3">
          <legend className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
            Product Categories
          </legend>

          {categories.map((category) => {
            const checked = selectedCategories.includes(category);

            return (
              <label
                key={category}
                className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition ${
                  checked
                    ? "border-black bg-black text-white"
                    : "border-black/10 bg-white/70 text-black hover:border-black/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleCategory(category)}
                    className="h-4 w-4 accent-black"
                  />
                  <span className="text-base">{category}</span>
                </div>

                {checked && (
                  <span className="text-xs uppercase tracking-[0.18em] opacity-70">
                    Active
                  </span>
                )}
              </label>
            );
          })}
        </fieldset>
      </div>
    </aside>
  );
}
