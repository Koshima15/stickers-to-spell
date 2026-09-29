import React from "react";

const Result = ({ result }) => {
  return (
    <div className="rounded-2xl border border-[#dfcfc2] bg-[#fffaf5] p-6 shadow-sm">

      <h2 className="mb-3 text-xl font-bold text-[#4a372f]">
        Result
      </h2>

      {result !== null ? (
        <div>

          <p className="mb-5 text-lg font-semibold text-[#b88c72]">
            Minimum Cost: {result.totalCost}
          </p>

          <h3 className="mb-3 font-semibold text-[#4a372f]">
            Stickers Used
          </h3>

          <div className="space-y-3">
            {result.usedStickers.map((sticker, index) => (
              <div
                key={index}
                className="rounded-xl bg-[#efe2d7] p-4"
              >
                <p>
                  <span className="font-semibold">
                    Word:
                  </span>{" "}
                  {sticker.word}
                </p>

                <p>
                  <span className="font-semibold">
                    Cost:
                  </span>{" "}
                  {sticker.cost}
                </p>

                <p>
                  <span className="font-semibold">
                    Category:
                  </span>{" "}
                  {sticker.category}
                </p>
              </div>
            ))}
          </div>

        </div>
      ) : (
        <p className="text-sm text-[#8b7568]">
          Result will appear here.
        </p>
      )}

    </div>
  );
};

export default Result;