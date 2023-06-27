import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helplers";

const initalState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      // clone state to not mutate the original state
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(initalState));
      nextState.board = Array(9).fill(null);
      return nextState;
    }

    default:
      console.log("Error");
      break;
  }
  return state;
};
/** 
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // this state is used to determine which player is next (x or o)

  const winner = calculateWinner(board);
  const handelClick = (index) => {
    const boardCopy = [...board]; //clone board to not mutate the original board
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handelClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};
*/

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initalState);
  const winner = calculateWinner(state.board);
  const handelClick = (index) => {
    dispatch({ type: "CLICK", payload: { index, winner } });
  };
  const handleResetGame = () => {
    dispatch({ type: "RESET", payload: {} });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handelClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
