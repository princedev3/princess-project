import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";

const PopularProductCard = ({
  name,
  image,
  price,
  index,
}: {
  name: string;
  image: string;
  price: number;
  index: number;
}) => {
  return (
    <div
      style={{
        backgroundColor: `rgba(168, 164, 166, ${index / 10})`,
      }}
      className={`h-[432px]  p-3 grid gap-y-2`}
    >
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
      <button className="cursor-pointer  w-[80%] mx-auto text-black border grid h-[45px] items-center border-black capitalize text-lg">
        Buy now
      </button>
    </div>
  );
};

export default PopularProductCard;
