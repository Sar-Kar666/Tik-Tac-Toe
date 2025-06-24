import { Strike } from "./Strike";
import { Tile } from "./Tile";



export function Board(){
    return <div className='  grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px] '>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Strike/>
    </div>
}