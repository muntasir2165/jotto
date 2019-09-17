import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD"
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action.
 * @function guessWord
 * @param {String} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessWord, secretWord);

    dispatch({
      type: actionTypes.guessWord,
      payload: { guessWord, letterMatchCount }
    });

    if (guessWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};
