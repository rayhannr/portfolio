import React, { useState, useEffect } from 'react'

import Board from './Board'
import WinningMessage from './WinningMessage'

const O_CLASS = 'o'
const X_CLASS = 'x'
const WINNING_COMBINATIONS = [
  //mendatar
  [0, 1, 2, 3, 4], [1, 2, 3, 4, 5], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7], [4, 5, 6, 7, 8], [9, 10, 11, 12, 13], [10, 11, 12, 13, 14], [11, 12, 13, 14, 15], [12, 13, 14, 15, 16], [13, 14, 15, 16, 17], [18, 19, 20, 21, 22], [19, 20, 21, 22, 23], [20, 21, 22, 23, 24], [21, 22, 23, 24, 25], [22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31], [28, 29, 30, 31, 32], [29, 30, 31, 32, 33], [30, 31, 32, 33, 34], [31, 32, 33, 34, 35], [36, 37, 38, 39, 40], [37, 38, 39, 40, 41], [38, 39, 40, 41, 42], [39, 40, 41, 42, 43], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [46, 47, 48, 49, 50], [47, 48, 49, 50, 51], [48, 49, 50, 51, 52], [49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58], [55, 56, 57, 58, 59], [56, 57, 58, 59, 60], [57, 58, 59, 60, 61], [58, 59, 60, 61, 62], [63, 64, 65, 66, 67], [64, 65, 66, 67, 68], [65, 66, 67, 68, 69], [66, 67, 68, 69, 70], [67, 68, 69, 70, 71], [72, 73, 74, 75, 76], [73, 74, 75, 76, 77], [74, 75, 76, 77, 78], [75, 76, 77, 78, 79], [76, 77, 78, 79, 80],
  //menurun
  [0, 9, 18, 27, 36], [9, 18, 27, 36, 45], [18, 27, 36, 45, 54], [27, 36, 45, 54, 63], [36, 45, 54, 63, 72], [1, 10, 19, 28, 37], [10, 19, 28, 37, 46], [19, 28, 37, 46, 55], [28, 37, 46, 55, 64], [37, 46, 55, 64, 73], [2, 11, 20, 29, 38], [11, 20, 29, 38, 47], [20, 29, 38, 47, 56], [29, 38, 47, 56, 65], [38, 47, 56, 65, 74],
  [3, 12, 21, 30, 39], [12, 21, 30, 39, 48], [21, 30, 39, 48, 57], [30, 39, 48, 57, 66], [39, 48, 57, 66, 75], [4, 13, 22, 31, 40], [13, 22, 31, 40, 49], [22, 31, 40, 49, 58], [31, 40, 49, 58, 67], [40, 49, 58, 67, 76], [5, 14, 23, 32, 41], [14, 23, 32, 41, 50], [23, 32, 41, 50, 59], [32, 41, 50, 59, 68], [41, 50, 59, 68, 77],
  [6, 15, 24, 33, 42], [15, 24, 33, 42, 51], [24, 33, 42, 51, 60], [33, 42, 51, 60, 69], [42, 51, 60, 69, 78], [7, 16, 25, 34, 43], [16, 25, 34, 43, 52], [25, 34, 43, 52, 61], [34, 43, 52, 61, 70], [43, 52, 61, 70, 79], [8, 17, 26, 35, 44], [17, 26, 35, 44, 53], [26, 35, 44, 53, 62], [35, 44, 53, 62, 71], [44, 53, 62, 71, 80],
  //diagonal
  [36, 46, 56, 66, 76], [27, 37, 47, 57, 67], [37, 47, 57, 67, 77], [18, 28, 38, 48, 58], [28, 38, 48, 58, 68], [38, 48, 58, 68, 78], [9, 19, 29, 39, 49], [19, 29, 39, 49, 59], [29, 39, 49, 59, 69], [39, 49, 59, 69, 79], [0, 10, 20, 30, 40], [10, 20, 30, 40, 50], [20, 30, 40, 50, 60], [30, 40, 50, 60, 70], [40, 50, 60, 70, 80],
  [44, 52, 60, 68, 76], [35, 43, 51, 59, 67], [43, 51, 59, 67, 75], [26, 34, 42, 50, 58], [34, 42, 50, 58, 66], [42, 50, 58, 66, 74], [17, 25, 33, 41, 49], [25, 33, 41, 49, 57], [33, 41, 49, 57, 65], [41, 49, 57, 65, 73], [8, 16, 24, 32, 40], [16, 24, 32, 40, 48], [24, 32, 40, 48, 56], [32, 40, 48, 56, 64], [40, 48, 56, 64, 72],
  [1, 11, 21, 31, 41], [11, 21, 31, 41, 51], [21, 31, 41, 51, 61], [31, 41, 51, 61, 71], [2, 12, 22, 32, 42], [12, 22, 32, 42, 52], [22, 32, 42, 52, 62], [3, 13, 23, 33, 43], [13, 23, 33, 43, 53], [4, 14, 24, 34, 44], [7, 15, 23, 31, 39], [15, 23, 31, 39, 47], [23, 31, 39, 47, 55], [31, 39, 47, 55, 63], [6, 14, 22, 30, 38],
  [14, 22, 30, 38, 46], [22, 30, 38, 46, 54], [5, 13, 21, 29, 37], [13, 21, 29, 37, 45], [4, 12, 20, 28, 36]
]

const Game = () => {
  const [cellState, setCellState] = useState([
    { id: 0, cellClass: '' },
    { id: 1, cellClass: '' },
    { id: 2, cellClass: '' },
    { id: 3, cellClass: '' },
    { id: 4, cellClass: '' },
    { id: 5, cellClass: '' },
    { id: 6, cellClass: '' },
    { id: 7, cellClass: '' },
    { id: 8, cellClass: '' },
    { id: 9, cellClass: '' },
    { id: 10, cellClass: '' },
    { id: 11, cellClass: '' },
    { id: 12, cellClass: '' },
    { id: 13, cellClass: '' },
    { id: 14, cellClass: '' },
    { id: 15, cellClass: '' },
    { id: 16, cellClass: '' },
    { id: 17, cellClass: '' },
    { id: 18, cellClass: '' },
    { id: 19, cellClass: '' },
    { id: 20, cellClass: '' },
    { id: 21, cellClass: '' },
    { id: 22, cellClass: '' },
    { id: 23, cellClass: '' },
    { id: 24, cellClass: '' },
    { id: 25, cellClass: '' },
    { id: 26, cellClass: '' },
    { id: 27, cellClass: '' },
    { id: 28, cellClass: '' },
    { id: 29, cellClass: '' },
    { id: 30, cellClass: '' },
    { id: 31, cellClass: '' },
    { id: 32, cellClass: '' },
    { id: 33, cellClass: '' },
    { id: 34, cellClass: '' },
    { id: 35, cellClass: '' },
    { id: 36, cellClass: '' },
    { id: 37, cellClass: '' },
    { id: 38, cellClass: '' },
    { id: 39, cellClass: '' },
    { id: 40, cellClass: '' },
    { id: 41, cellClass: '' },
    { id: 42, cellClass: '' },
    { id: 43, cellClass: '' },
    { id: 44, cellClass: '' },
    { id: 45, cellClass: '' },
    { id: 46, cellClass: '' },
    { id: 47, cellClass: '' },
    { id: 48, cellClass: '' },
    { id: 49, cellClass: '' },
    { id: 50, cellClass: '' },
    { id: 51, cellClass: '' },
    { id: 52, cellClass: '' },
    { id: 53, cellClass: '' },
    { id: 54, cellClass: '' },
    { id: 55, cellClass: '' },
    { id: 56, cellClass: '' },
    { id: 57, cellClass: '' },
    { id: 58, cellClass: '' },
    { id: 59, cellClass: '' },
    { id: 60, cellClass: '' },
    { id: 61, cellClass: '' },
    { id: 62, cellClass: '' },
    { id: 63, cellClass: '' },
    { id: 64, cellClass: '' },
    { id: 65, cellClass: '' },
    { id: 66, cellClass: '' },
    { id: 67, cellClass: '' },
    { id: 68, cellClass: '' },
    { id: 69, cellClass: '' },
    { id: 70, cellClass: '' },
    { id: 71, cellClass: '' },
    { id: 72, cellClass: '' },
    { id: 73, cellClass: '' },
    { id: 74, cellClass: '' },
    { id: 75, cellClass: '' },
    { id: 76, cellClass: '' },
    { id: 77, cellClass: '' },
    { id: 78, cellClass: '' },
    { id: 79, cellClass: '' },
    { id: 80, cellClass: '' }
  ])
  const [circleTurn, setCircleTurn] = useState(false)
  const [showWinningMessage, setShowWinningMessage] = useState(false)
  const [winner, setWinner] = useState()
  const [undoButtonIsTouched, setUndoButtonIsTouched] = useState(false)

  const currentClass = !circleTurn ? O_CLASS : X_CLASS
  const isDraw = cellState.every(cell => cell.cellClass === X_CLASS || cell.cellClass === O_CLASS) && !winner
  const checkWin = WINNING_COMBINATIONS.some(combination => combination.every(index => cellState[index].cellClass === currentClass))

  const oScore = typeof window !== 'undefined' && localStorage.getItem('oScore') || 0
  const xScore = typeof window !== 'undefined' && localStorage.getItem('xScore') || 0
  const previousMove = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('prevCell')) || cellState

  useEffect(() => {
    if (isDraw) setShowWinningMessage(true)
    if (checkWin) {
      setWinner(currentClass)
      setShowWinningMessage(true)
      if (winner === 'x' && typeof window !== 'undefined') {
        localStorage.setItem('xScore', +xScore + 1)
      } else if (winner === 'o' && typeof window !== 'undefined') {
        localStorage.setItem('oScore', +oScore + 1)
      }
    }
  }, [isDraw, checkWin, currentClass, oScore, xScore, winner])

  const handleClick = cellId => {
    const cellIndex = cellState.findIndex(c => c.id === cellId)
    const cell = { ...cellState[cellIndex] }

    if (cell.cellClass === '') {
      const nowClass = circleTurn ? O_CLASS : X_CLASS
      cell.cellClass = nowClass

      const newCellState = [...cellState]
      newCellState[cellIndex] = cell

      setCellState(newCellState)
      setCircleTurn(prev => !prev)
      setUndoButtonIsTouched(false)
      if (typeof window !== 'undefined') {
        localStorage.setItem('prevCell', JSON.stringify(cellState))
      }
    }
  }

  const restartGame = () => {
    setShowWinningMessage(false)
    setCellState(prevCell => prevCell.map(cell => ({ ...cell, cellClass: '' })))
    setWinner(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('prevCell')
    }
  }

  const resetGame = () => {
    restartGame()
    if (typeof window !== 'undefined') {
      localStorage.removeItem('xScore')
      localStorage.removeItem('oScore')
    }
  }

  const undoGame = () => {
    setUndoButtonIsTouched(true)
    if (!cellState.every(cell => cell.cellClass === '') && !undoButtonIsTouched) {
      setCellState(previousMove)
      setCircleTurn(prev => !prev)
    }
  }

  return (
    <div className="relative px-3 py-5">
      <p className="font-medium text-center w-4/5 lg:w-full mx-auto font-architect text-content">Tic-Tac-Toe game you can try it your own.</p>
      <Board
        circleTurn={circleTurn}
        xScore={xScore}
        oScore={oScore}>
        {cellState.map(cell => (
          <div
            key={cell.id}
            id={cell.id}
            className={`cell flex justify-center items-center relative cursor-pointer border border-solid border-content ${cell.cellClass}`}
            onClick={() => handleClick(cell.id)}>
          </div>
        ))}
      </Board>
      <div className="buttons text-center pt-4">
        <button onClick={undoGame} className="bg-content text-background hover:bg-content-hover hover:text-background-hover">Undo</button>
        <button onClick={restartGame} className="bg-content text-background hover:bg-content-hover hover:text-background-hover">Restart</button>
        <button onClick={resetGame} className="bg-content text-background hover:bg-content-hover hover:text-background-hover">Reset</button>
      </div>
      <WinningMessage
        show={showWinningMessage}
        draw={isDraw}
        circleTurn={circleTurn}
        restart={restartGame} />
    </div>
  )
}

export default Game