import React, { useState } from "react";

const StickerForm = ({ addSticker }) => {
  const [word, setWord] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!word.trim()) {
      alert("Please enter a sticker word.");
      return;
    }

    if (!cost || Number(cost) <= 0) {
      alert("Sticker cost must be greater than 0.");
      return;
    }

    if (!category.trim()) {
      alert("Please enter a category.");
      return;
    }

    const newSticker = {
      word: word.trim(),
      cost: Number(cost),
      category: category.trim(),
    };

    addSticker(newSticker);

    setWord("");
    setCost("");
    setCategory("");
  };

  return (
    <div className="mb-6 rounded-2xl border border-[#dfcfc2] bg-[#fffaf5] p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold text-[#4a372f]">
        Add Sticker
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="grid gap-4 md:grid-cols-3">

          <input
            type="text"
            value={word}
            onChange={(e) => {
              const value = e.target.value;

              if (/^[a-zA-Z]*$/.test(value)) {
                setWord(value);
              }
            }}
            placeholder="Sticker word"
            className="rounded-xl border border-[#dfcfc2] bg-[#f7f1eb] px-4 py-3 text-[#4a372f] outline-none focus:border-[#b88c72]"
          />

          <input
            type="number"
            min="0"
            step="0.01"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="Cost"
            className="rounded-xl border border-[#dfcfc2] bg-[#f7f1eb] px-4 py-3 text-[#4a372f] outline-none focus:border-[#b88c72]"
          />

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="rounded-xl border border-[#dfcfc2] bg-[#f7f1eb] px-4 py-3 text-[#4a372f] outline-none focus:border-[#b88c72]"
          />

        </div>

        <button
          type="submit"
          className="mt-5 rounded-xl bg-[#b88c72] px-6 py-3 font-semibold text-white transition hover:bg-[#9f745c]"
        >
          Add Sticker
        </button>

      </form>
    </div>
  );
};

export default StickerForm;