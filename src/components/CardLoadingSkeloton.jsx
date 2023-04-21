import React from "react";

const CardLoadingSkeloton = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 w-60 rounded-lg sm:w-80 min-w-96 border border-gray-700">
      <div className="animate-pulse bg-slate-700 w-full h-40 rounded-lg"></div>
      <div className="p-6 flex items-start justify-between flex-col gap-4 w-full">
        <div className="animate-pulse w-24 h-6 bg-slate-700 rounded"></div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <div className="h-2 animate-pulse bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 animate-pulse bg-slate-700 rounded col-span-1"></div>
          <div className="h-2 animate-pulse bg-slate-700 rounded col-span-1"></div>
          <div className="h-2 animate-pulse bg-slate-700 rounded col-span-2"></div>
        </div>
        <div className="animate-pulse w-16 h-6 bg-slate-700 rounded"></div>
        <div className="animate-pulse bg-slate-700 rounded-lg h-10 w-full mt-4"></div>
      </div>
    </div>
  );
};

export default CardLoadingSkeloton;
