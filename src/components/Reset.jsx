import { GameState } from "./GameState";


export function Reset({gameState,onReset}){
    if(gameState===GameState.inProgress){
        return;
    }

    return <button onClick={onReset} className="mt-[60px] p-5 bg-[#0074a6] text-white w-full text-[1.5em]">Reset</button>
}