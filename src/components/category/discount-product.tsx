import { gadgetItems } from "@/utils/constants";
import React from "react";
import ArrivalSinglecardCategory from "./arrival-singlecard-category";

const DiscountProduct = () => {
  return (
    <div className="p-5 md:p-20">
      <div className="max-w-7xl mx-auto grid gap-y-10">
        <h1 className={` text-black font-semibold  text-xl`}>
          Discounts up to -50%
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(225px,_1fr))] gap-6">
          {gadgetItems.slice(0, 4).map((item) => (
            <ArrivalSinglecardCategory key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
