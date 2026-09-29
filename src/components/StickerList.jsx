import React from "react";

const StickerList = ({ stickers, deleteSticker }) => {
  return (
    <div className="mb-6 rounded-2xl border border-[#dfcfc2] bg-[#fffaf5] p-6 shadow-sm">

      <h2 className="mb-4 text-xl font-bold text-[#4a372f]">
        Stickers
      </h2>

      {stickers.length === 0 ? (
        <p className="text-sm text-[#8b7568]">
          No stickers added yet.
        </p>
      ) : (
        stickers.map((sticker, index) => (
          <div
            key={index}
            className="mb-3 flex items-center justify-between rounded-xl bg-[#efe2d7] p-4"
          >

            <div>
              <p>
                <span className="font-semibold">Word:</span>{" "}
                {sticker.word}
              </p>

              <p>
                <span className="font-semibold">Cost:</span>{" "}
                {sticker.cost}
              </p>

              <p>
                <span className="font-semibold">Category:</span>{" "}
                {sticker.category}
              </p>
            </div>

            <button
              onClick={() => deleteSticker(index)}
              className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              Delete
            </button>

          </div>
        ))
      )}

    </div>
  );
};

export default StickerList;