/**
 * @method getLetterMatchCount
 * @param {String} guessedWord - Guessed word.
 * @param {String} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessedWord and secretWord.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
