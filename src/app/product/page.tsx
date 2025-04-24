import ArrivalSinglecardCategory from "@/components/category/arrival-singlecard-category";
import { gadgetItems } from "@/utils/constants";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Product = () => {
  return (
    <div>
      <h1 className="mx-auto grid text-center font-semibold text-3xl my-4">
        OUR PRODUCT
      </h1>
      <div className="">
        <div className="my-8">
          <div className=" flex bg-[#FFFBF5] border p-1 rounded-2xl">
            <input
              placeholder="Showing all result"
              className="w-full outline-none bg-transparent h-[40px] text-xl px-2"
            />
            <Select>
              <SelectTrigger className="w-[180px] rounded-2xl border-gray-500 !outline-none">
                <SelectValue placeholder="Default Setting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="text-lg text-gray-600 capitalize">
            result for search "Phone"
          </span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(225px,_1fr))] gap-6">
          {gadgetItems.map((item) => (
            <ArrivalSinglecardCategory key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
