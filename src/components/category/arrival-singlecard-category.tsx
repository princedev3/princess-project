import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";

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
    <div className="h-[432px] bg-[#F6F6F6] p-3 grid gap-y-2 rounded-lg">
      <div className="flex justify-end items-center">
        <Heart className="text-gray-500" />
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
