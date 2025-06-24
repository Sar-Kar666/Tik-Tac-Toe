import { GameState } from "./GameState";

export function GameOver({gameState}){

  switch(gameState){
    default: 
    return<></>;

    case GameState.inProgress: 
    return <></>;

    case GameState.playerOWins:
        return <div className="text-center border-8 border-solid border-[#5468ff] p-2 mt-[50px] text-[1.5em]">O Wins</div>;

    case GameState.playerXWins:
        return <div className="text-center border-8 border-solid border-[#5468ff] p-2 mt-[50px] text-[1.5em]">X Wins</div>;

    
    case GameState.draw:
        return <div className="text-center border-8 border-dotted border-[#5468ff] p-2 mt-[50px] text-[1.5em]">Draw</div>;


  }
}