import Image from "next/image";
import React from "react";

const HeroProductCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white ">
      {/* Playstation 5 */}
      <div className="grid grid-rows-2 ">
        {/* PS5 Top Section */}
        <div className="bg-white flex">
          <Image
            src="/PlayStation.png"
            alt="Playstation 5"
            width={250}
            height={250}
            className="object-contain  w-[200px]  h-[250px]  lg:h-[225px]"
            priority
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold">Playstation 5</h2>
            <p className="text-lg text-gray-600 mt-2">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>

        {/* AirPods Max & Vision Pro */}
        <div className="grid grid-cols-2">
          {/* AirPods Max */}
          <div className="bg-gray-100 flex items-center gap-4">
            <div className="relative w-1/3  h-[250px] lg:h-[225px] min-w-[80px]">
              <Image
                src="/earbud.png"
                alt="AirPods Max"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-medium leading-tight">
                Apple <br />
                AirPods <span className="font-bold">Max</span>
              </h2>
              <p className="text-lg text-gray-600 mt-1">
                Computational audio. Listen, it's powerful.
              </p>
            </div>
          </div>

          {/* Vision Pro */}
          <div className="bg-gray-900 text-white flex items-center gap-4">
            <div className="relative w-1/3  h-[250px] lg:h-[225px] min-w-[80px]">
              <Image
                src="/headset.png"
                alt="Vision Pro"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-medium leading-tight">
                Apple <br />
                Vision <span className="font-bold">Pro</span>
              </h2>
              <p className="text-lg text-gray-300 mt-1">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Macbook Air */}
      <div className="bg-gray-100  flex items-center ">
        <div className="pl-7">
          <h2 className="text-2xl font-medium">
            Macbook <span className="font-bold">Air</span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className="mt-4 px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition">
            Shop Now
          </button>
        </div>
        <Image
          src="/mac.png"
          alt="Macbook"
          width={200}
          height={400}
          className="h-[400px] lg:h-[450px]  object-contain"
        />
      </div>
    </div>
  );
};

export default HeroProductCard;
