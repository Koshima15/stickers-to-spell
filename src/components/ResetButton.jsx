import React from "react";

const ResetButton = ({ onReset }) => {
  return (
    <div className="mb-6 text-center">
      <button
        onClick={onReset}
        className="rounded-xl border border-[#b88c72] px-8 py-3 font-semibold text-[#b88c72] transition hover:bg-[#efe2d7]"
      >
        Reset
      </button>
    </div>
  );
};

export default ResetButton;