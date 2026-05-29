"use client";

import bg from "@/public/main/filterBG.png";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

type FilterProps = {
  categories: string[];
  selectedCategories: string[];
  onChangeCategories: (categories: string[]) => void;
  stars: number[];
  selectedStars: number[];
  onChangeStars: (stars: number[]) => void;
};

export default function Filter({
  categories,
  selectedCategories,
  onChangeCategories,
  stars,
  selectedStars,
  onChangeStars,
}: FilterProps) {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onChangeCategories(
        selectedCategories.filter((item) => item !== category),
      );
      return;
    }

    onChangeCategories([...selectedCategories, category]);
  };

  const toggleStar = (star: number) => {
    if (selectedStars.includes(star)) {
      onChangeStars(selectedStars.filter((item) => item !== star));
      return;
    }

    onChangeStars([...selectedStars, star]);
  };

  const clearAll = () => {
    onChangeCategories([]);
    onChangeStars([]);
  };

  return (
    <aside
      className="overflow-hidden rounded-2xl border border-black/10 dark:border-zinc-500 bg-cover bg-center shadow-xl"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="rounded-2xl bg-white dark:bg-black p-6 backdrop-blur-md">
        <div className="flex flex-col items-start justify-between gap-3">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">
              Filters
            </h2>
            <button
              onClick={clearAll}
              disabled={
                selectedCategories.length === 0 && selectedStars.length === 0
              }
              className="rounded-full border border-black/15 dark:border-white/15 px-3 py-1.5 text-sm text-black dark:text-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
            >
              Clear
            </button>
          </div>

          <p className="text-sm text-black/60 dark:text-white/60">
            {selectedCategories.length === 0 && selectedStars.length === 0
              ? "Showing all products"
              : `${selectedCategories.length + selectedStars.length} selected`}
          </p>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full cursor-pointer mx-auto rounded-xl border border-black/15 dark:border-white/15 px-3 py-1.5 text-sm text-black dark:text-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black flex items-center justify-center"
          >
            {showFilters ? "Hide" : "View"} Filters
          </button>
        </div>

        <div
          className={`mt-6 ${
            showFilters
              ? "max-h-[200px] opacity-100 overflow-y-scroll no-scrollbar"
              : "max-h-0 opacity-0 overflow-y-hidden"
          } duration-500 ease-in-out transition-all no-scrollbar`}
        >
          <fieldset className="space-y-3">
            <legend className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-black/50 dark:text-white/50">
              Product Categories
            </legend>

            {categories.map((category) => {
              const checked = selectedCategories.includes(category);

              return (
                <label
                  key={category}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition ${
                    checked
                      ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                      : "border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-800/70 text-black dark:text-white hover:border-black/30 dark:hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleCategory(category)}
                      className="h-4 w-4 accent-black dark:accent-white"
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

          <fieldset className="space-y-3 mt-5">
            <legend className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-black/50 dark:text-white/50">
              Product Ratings
            </legend>

            <div className="flex flex-col items-center gap-2">
              {stars.map((star) => {
                const checked = selectedStars.includes(star);
                return (
                  <label
                    key={star}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition ${
                      checked
                        ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                        : "border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-800/70 text-black dark:text-white hover:border-black/30 dark:hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleStar(star)}
                        className="h-4 w-4 accent-black dark:accent-white"
                      />
                      <Rating
                        name="text-feedback"
                        value={star}
                        readOnly
                        precision={1}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>
      </div>
    </aside>
  );
}
