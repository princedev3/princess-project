import { gadgetItems } from "@/utils/constants";
import React from "react";
import PopularProductCard from "./popular-product-card";

const PopularProduct = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(225px,_1fr))]">
      {gadgetItems.slice(0, 4).map((item, index) => (
        <PopularProductCard key={item.name} index={index} {...item} />
      ))}
    </div>
  );
};

export default PopularProduct;
