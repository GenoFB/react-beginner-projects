import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      console.log(boardToCheck[a])
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  //revisamos si hay un empase, si no hay mas espacios vacios
  return newBoard.every((square) => square !== null)
}