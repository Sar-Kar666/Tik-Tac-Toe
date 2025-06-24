import { Strike } from "./Strike";
import { Tile } from "./Tile";



export function Board({tiles, onTileClick, strikeClass}){
    return <div className=' grid grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px] cursor-pointer relative'>
        <Tile onClick={()=>{onTileClick(0)}} value={tiles[0]} className="border-b-6 border-r-6" />
        <Tile onClick={()=>{onTileClick(1)}} value={tiles[1]} className="border-b-6 border-r-6" />
        <Tile onClick={()=>{onTileClick(2)}} value={tiles[2]} className="border-b-6 "/>
        <Tile onClick={()=>{onTileClick(3)}} value={tiles[3]} className="border-b-6 border-r-6"/>
        <Tile onClick={()=>{onTileClick(4)}} value={tiles[4]} className="border-b-6 border-r-6"/>
        <Tile onClick={()=>{onTileClick(5)}} value={tiles[5]} className="border-b-6 "/>
        <Tile onClick={()=>{onTileClick(6)}} value={tiles[6]} className=" border-r-6"/>
        <Tile onClick={()=>{onTileClick(7)}} value={tiles[7]} className=" border-r-6"/>
        <Tile onClick={()=>{onTileClick(8)}} value={tiles[8]}/>
        <Strike  strikeClass={strikeClass}/>
    </div>
}