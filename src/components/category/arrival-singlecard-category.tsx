import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
import { FaRegEye } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const ArrivalSinglecardCategory = ({
  name,
  image,
  price,
}: {
  name: string;
  image: string;
  price: number;
}) => {
  return (
    <div className="min-h-[432px] bg-[#F6F6F6] p-3 grid gap-y-2 rounded-lg relative">
      <div className="absolute right-3 top-3">
        <div className="flex flex-col gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Heart className="text-gray-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Like Product</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={`/product/${name}`}>
                  <FaRegEye size={24} className="text-gray-500" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>See More</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="h-[200px] w-[80%] mx-auto grid relative">
        <Image src={image} alt="" fill className="object-contain" />
      </div>
      <h1 className="grid mx-auto text-center text-lg">{name} </h1>
      <h1 className="grid mx-auto text-center text-xl font-semibold">
        ₦{price}{" "}
      </h1>
      <button className="cursor-pointer bg-black w-[80%] mx-auto text-white grid h-[45px] items-center rounded-xl capitalize text-lg">
        Buy now
      </button>
    </div>
  );
};

export default ArrivalSinglecardCategory;
