export function Strike({strikeClass}){
   const base = " absolute bg-orange-600";
  const variants = {
    "row-1": "w-full h-1 top-[15%]",
    "row-2": "w-full h-1 top-[48%]",
    "row-3": "w-full h-1 top-[83%]",
    "col-1": "h-full w-1 left-[16%]",
    "col-2": "h-full w-1 left-[49%]",
    "col-3": "h-full w-1 left-[83%]",
    "diag-1": "w-[100%] h-1 top-1/2  transform skew-y-45",
    "diag-2": "w-[100%] h-1 top-1/2  transform -skew-y-45",
  };

  return <div className={`${base} ${variants[strikeClass]}`} />;
}


