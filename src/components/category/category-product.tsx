"use client";
import { useRef, useState } from "react";
import CarouselControl from "./carousel-control";
import { browseByCategoryData } from "@/utils/constants";

const BrowseByCategory = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [selectCategory, setSelectCategory] = useState("1");

  return (
    <div className="bg-[#FAFAFA] w-full p-5 md:p-20 grid gap-y-10">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Browse By Category</h1>
        <div className="flex items-center gap-6">
          <CarouselControl
            sliderRef={sliderRef as React.RefObject<HTMLDivElement>}
            sliderType="categorySlider"
          />
        </div>
      </div>
      {/* Scrollable Category List */}
      <div className="flex gap-5 overflow-x-hidden snap-x" ref={sliderRef}>
        {browseByCategoryData.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectCategory(item.id)}
            className={`${
              selectCategory === item.id ? "border-sky-300 border-2" : ""
            } snap-start bg-[#EDEDED] min-w-[170px] h-[145px] flex-shrink-0 flex flex-col justify-center items-center cursor-pointer rounded-md transition`}
          >
            <div>
              <item.icon size={45} color={"black"} />
            </div>
            <div className="text-[14px] mt-2">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
