import React from "react";

const TargetInput = ({ target, setTarget }) => {
  return (
    <div className="mb-6 rounded-2xl border border-[#dfcfc2] bg-[#fffaf5] p-6 shadow-sm">
      <label className="mb-2 block text-sm font-semibold text-[#4a372f]">
        Target Word
      </label>

      <input
        type="text"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Enter target word"
        className="w-full rounded-xl border border-[#dfcfc2] bg-[#f7f1eb] px-4 py-3 text-[#4a372f] outline-none transition focus:border-[#b88c72] focus:ring-2 focus:ring-[#b88c72]/20"
      />

      {target.length > 100000 && (
        <p className="mt-2 text-sm text-red-600">
          Target cannot contain more than 100,000 characters.
        </p>
      )}
    </div>
  );
};

export default TargetInput;