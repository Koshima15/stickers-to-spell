const getLetterCount = (word) => {
  const count = {};

  for (const letter of word) {
    count[letter] = (count[letter] || 0) + 1;
  }

  return count;
};

const getUsefulLetters = (remainingTarget, stickerCount) => {
  let usefulLetters = 0;

  for (const letter in remainingTarget) {
    if (stickerCount[letter]) {
      usefulLetters += Math.min(
        remainingTarget[letter],
        stickerCount[letter]
      );
    }
  }

  return usefulLetters;
};

const applySticker = (remainingTarget, stickerCount) => {
  const updatedTarget = { ...remainingTarget };

  for (const letter in stickerCount) {
    if (updatedTarget[letter]) {
      updatedTarget[letter] = Math.max(
        0,
        updatedTarget[letter] - stickerCount[letter]
      );
    }
  }

  return updatedTarget;
};

const isTargetComplete = (remainingTarget) => {
  for (const letter in remainingTarget) {
    if (remainingTarget[letter] > 0) {
      return false;
    }
  }

  return true;
};

const canUseSticker = (categoryUsage, category, k) => {
  const currentUsage = categoryUsage[category] || 0;

  return currentUsage < k;
};

const stickerAlgorithm = (target, stickers, k) => {
  const remainingTarget = getLetterCount(target);

  let totalCost = 0;
  const usedStickers = [];
  const categoryUsage = {};

  const preparedStickers = stickers.map((sticker) => ({
    ...sticker,
    letterCount: getLetterCount(sticker.word),
  }));

  let currentTarget = remainingTarget;

  while (!isTargetComplete(currentTarget)) {
    let bestSticker = null;
    let bestEfficiency = 0;

    for (const sticker of preparedStickers) {
      if (
        !canUseSticker(
          categoryUsage,
          sticker.category,
          k
        )
      ) {
        continue;
      }

      const usefulLetters = getUsefulLetters(
        currentTarget,
        sticker.letterCount
      );

      if (usefulLetters === 0) {
        continue;
      }

      const efficiency =
        usefulLetters / sticker.cost;

      if (efficiency > bestEfficiency) {
        bestEfficiency = efficiency;
        bestSticker = sticker;
      }
    }

    if (!bestSticker) {
      return null;
    }

    currentTarget = applySticker(
      currentTarget,
      bestSticker.letterCount
    );

    totalCost += bestSticker.cost;
usedStickers.push({
  word: bestSticker.word,
  cost: bestSticker.cost,
  category: bestSticker.category,
});
    categoryUsage[bestSticker.category] =
      (categoryUsage[bestSticker.category] || 0) + 1;
  }

return {
  totalCost,
  usedStickers,
};
};

export default stickerAlgorithm;