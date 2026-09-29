import React, { useState } from "react";

import TargetInput from "./components/TargetInput";
import CategoryLimit from "./components/CategoryLimit";
import StickerForm from "./components/StickerForm";
import StickerList from "./components/StickerList";
import CalculateButton from "./components/CalculateButton";
import Result from "./components/Result";
import ResetButton from "./components/ResetButton";
import stickerAlgorithm from "./utils/stickerAlgorithm";

const App = () => {
  const [target, setTarget] = useState("");
  const [stickers, setStickers] = useState([]);
  const [k, setK] = useState(1);
  const [result, setResult] = useState(null);
const handleReset = () => {
  setTarget("");
  setStickers([]);
  setK(1);
  setResult(null);
};
  const addSticker = (sticker) => {
    setStickers((prevStickers) => [
      ...prevStickers,
      sticker,
    ]);
  };
const deleteSticker = (index) => {
  setStickers((prevStickers) =>
    prevStickers.filter((_, i) => i !== index)
  );
};
  const handleCalculate = () => {
  if (!target.trim()) {
    alert("Please enter a target word.");
    return;
  }

  if (target.length > 100000) {
    alert("Target cannot contain more than 100,000 characters.");
    return;
  }

  if (!Number.isInteger(k) || k < 1) {
    alert("K must be at least 1.");
    return;
  }

  if (stickers.length === 0) {
    alert("Please add at least one sticker.");
    return;
  }

  const calculationResult = stickerAlgorithm(
    target,
    stickers,
    k
  );

  if (calculationResult === null) {
    setResult(null);

    alert(
      "Target cannot be formed with the available stickers."
    );

    return;
  }

  setResult(calculationResult);
};
  return (
    <div className="min-h-screen bg-[#f7f1eb] px-4 py-10">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-10 text-center text-4xl font-bold text-[#4a372f]">
          Stickers To Spell Words
        </h1>

        <TargetInput
          target={target}
          setTarget={setTarget}
        />

        <CategoryLimit
          k={k}
          setK={setK}
        />

        <StickerForm
          addSticker={addSticker}
        />

        <StickerList
  stickers={stickers}
  deleteSticker={deleteSticker}
/>

        <CalculateButton
          onCalculate={handleCalculate}
        />
<ResetButton
  onReset={handleReset}
/>
        <Result
          result={result}
        />

      </div>
    </div>
  );
};

export default App;