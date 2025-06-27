import { useState } from "react";


const initialBoard = () => Array(9).fill(null);
export const useTicTacToe = () => {
    const [board, setBoard] = useState(initialBoard());
    const [isXNext, setIsXNext] = useState(true);

    const WinningPatters = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const calculateWinner = (board) => {

        for(let i=0;i<WinningPatters.length;i++){
            const [a,b,c]=WinningPatters[i];
            
            
            if(board[a] && board[a]===board[b] && board[a]===board[c] ){
                
              
                return board[a];
            }
        }
        return null;
    };

    

    const handleClick = (index) => {
        const winner = calculateWinner(board);
    
        if (winner ) {
            return
        };

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const getStatusMessage = () => { 
        const winner=calculateWinner(board)
        if(winner){
            return `player ${winner} wins`;
        }
        if(!board.includes(null)){
            return `its a draw`;
        }

        return `Player ${isXNext?"X":"O"}'s Move`;
    };

    const resetGame = () => {

        setBoard(initialBoard());
        setIsXNext(true)

     };


    return { board, handleClick, calculateWinner, getStatusMessage, resetGame };

}