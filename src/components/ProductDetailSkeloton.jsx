import React from "react";

const ProductDetailSkeloton = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 w-full sm:w-1/2 min-w-96">
      <div className="animate-pulse bg-slate-700 w-full h-60 rounded-lg"></div>
      <div className="animate-pulse w-20 h-7 bg-slate-700 rounded"></div>
      <div className="animate-pulse bg-slate-700 rounded w-48  h-7"></div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="h-2 animate-pulse bg-slate-700 rounded col-span-2"></div>
        <div className="h-2 animate-pulse bg-slate-700 rounded col-span-1"></div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="h-2 animate-pulse bg-slate-700 rounded col-span-1"></div>
        <div className="h-2 animate-pulse bg-slate-700 rounded col-span-2"></div>
      </div>
      <div className="animate-pulse bg-slate-700 rounded w-32 h-7"></div>
    </div>
  );
};

export default ProductDetailSkeloton;
