import React from "react";

const CategoryLimit = ({ k, setK }) => {
  return (
    <div className="mb-6 rounded-2xl border border-[#dfcfc2] bg-[#fffaf5] p-6 shadow-sm">

      <label className="mb-2 block text-sm font-semibold text-[#4a372f]">
        Category Limit (K)
      </label>

      <input
        type="number"
        min="1"
        value={k}
        onChange={(e) => {
          const value = Number(e.target.value);

          if (value >= 1 || e.target.value === "") {
            setK(value);
          }
        }}
        placeholder="Enter K"
        className="w-full rounded-xl border border-[#dfcfc2] bg-[#f7f1eb] px-4 py-3 text-[#4a372f] outline-none focus:border-[#b88c72] focus:ring-2 focus:ring-[#b88c72]/20"
      />

      <p className="mt-2 text-sm text-[#8b7568]">
        Maximum number of stickers allowed from each category.
      </p>

    </div>
  );
};

export default CategoryLimit;