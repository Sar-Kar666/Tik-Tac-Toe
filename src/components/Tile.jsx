

export function Tile({ className = "" ,value,onClick}){
    return <div onClick={onClick} className={` border-indigo-500 bg-blue text-3xl flex justify-center-safe  ${className}`}>
       <p className=" text-center py-7">{value}</p>
    </div>
}