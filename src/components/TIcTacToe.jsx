import { useTicTacToe } from "./hooks/use-tic-tac-toe";



export function TicTacToe() {   

    const  {board,handleClick,getStatusMessage,resetGame}=useTicTacToe();
    
    return (
        <div className="game">
            <h1  className="heading">Tic Tac Toe</h1>
           

            <div className="board">
                {board.map((b,index) => {
                    return <button className="cell" onClick={()=>handleClick(index)} disabled={b!==null} >{b}</button>;
                    
                })}
               
            </div>
             <div className="status">{getStatusMessage()}</div>
            <button className="reset-button" onClick={resetGame}>Reset</button>
        </div>
    )
}