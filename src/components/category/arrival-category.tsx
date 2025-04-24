"use client";
import { gadgetItems } from "@/utils/constants";
import React, { useState } from "react";
import ArrivalSinglecardCategory from "./arrival-singlecard-category";

const ArrivalCategory = () => {
  const [activeTag, setActiveTag] = useState<
    "newArrival" | "bestSeller" | "featuredProduct"
  >("newArrival");
  return (
    <div className="p-5 md:p-20">
      <div className="max-w-7xl mx-auto grid gap-y-10">
        {/* Header Tabs */}
        <div className="flex items-center gap-4">
          <h1
            className={`${activeTag === "newArrival" ? "text-black font-semibold underline underline-offset-4" : ""} text-xl cursor-pointer`}
            onClick={() => setActiveTag("newArrival")}
          >
            New Arrival
          </h1>
          <h1
            className={`${activeTag === "bestSeller" ? "text-black font-semibold underline underline-offset-4" : ""} text-xl cursor-pointer`}
            onClick={() => setActiveTag("bestSeller")}
          >
            Bestseller
          </h1>
          <h1
            className={`${activeTag === "featuredProduct" ? "text-black font-semibold underline underline-offset-4" : ""} text-xl cursor-pointer`}
            onClick={() => setActiveTag("featuredProduct")}
          >
            Featured Products
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(225px,_1fr))] gap-6">
          {gadgetItems.map((item) => (
            <ArrivalSinglecardCategory key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArrivalCategory;
