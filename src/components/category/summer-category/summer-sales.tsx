import React from "react";

const SummerSales = () => {
  return (
    <div
      className={`
        
    h-[450px] 
    bg-[url('/summersales.png')] 
    bg-cover 
    bg-center 
    flex 
    items-center 
    justify-center 
   
  `}
    >
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-white text-3xl md:text-5xl font-light">
          Big Summer <b>Sale</b>
        </h1>
        <span className="text-white/80 text-2xl">
          Commodo fames vitae vitae leo mauris in
        </span>
        <button className="cursor-pointer text-white border border-white text-2xl py-3 px-5">
          shop now
        </button>
      </div>
    </div>
  );
};

export default SummerSales;
