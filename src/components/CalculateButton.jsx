import React from "react";

const CalculateButton = ({ onCalculate }) => {
  return (
    <div className="mb-6 text-center">
      <button
        onClick={onCalculate}
        className="rounded-xl bg-[#b88c72] px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-[#9f745c]"
      >
        Calculate Minimum Cost
      </button>
    </div>
  );
};

export default CalculateButton;