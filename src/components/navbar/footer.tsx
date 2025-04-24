import { footerData } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className=" bg-[#000] p-5 md:p-20 text-white grid gap-y-5 ">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-[50px] ">
        <div className="grid gap-y-4">
          <Link href={"/"}>
            <Image
              src={"/white-Logo.png"}
              className="object-contain w-[100px] h-[100px] cursor-pointer"
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <span className="text-lg text-white">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </span>
        </div>

        <>
          {footerData.map((item) => (
            <div key={item.header} className="">
              <h1 className="font-semibold text-xl mb-2 md:text-2xl">
                {item.header}{" "}
              </h1>
              <div className="grid gap-y-2">
                {item.list.map((item) => (
                  <span key={item} className="">
                    {item}{" "}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </>
      </div>
      <Separator className="my-3 bg-slate-800" />
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <FaTwitter size={24} className="text-white cursor-pointer" />
        </Link>
        <Link href={"/"}>
          <FaFacebookF size={24} className="text-white cursor-pointer" />
        </Link>
        <Link href={"/"}>
          <FaInstagramSquare size={24} className="text-white cursor-pointer" />
        </Link>
        <Link href={"/"}>
          <FaTiktok size={24} className="text-white cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
