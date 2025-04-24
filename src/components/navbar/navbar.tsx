"use client";
import Image from "next/image";
import React from "react";
import SeearchIcon from "../icons/search-icon";
import { navbarItems } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoveIcon from "../icons/love-icon";
import CartIcon from "../icons/cart-icon";
import UserIcon from "../icons/user-icon";
import { Menu } from "lucide-react";
import MobileMenu from "./mobile-view";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="h-[70px] px-[5px] lg:px-[40px] items-center flex justify-between gap-3 lg:gap-4">
      <div className="gap-[25px] flex-1 w-full flex items-center">
        <Image
          src={"/logo.png"}
          width={70}
          height={70}
          className="object-contain max-h-[70px] max-w-[70px]"
          alt=""
        />
        <form className="flex flex-1 px-1 items-center bg-[#F5F5F5] h-[45px] rounded-[8px] ">
          <SeearchIcon size={24} color="#989898" />
          <input
            type="text"
            placeholder="Search"
            className="ml-1 h-full bg-transparent border-none outline-none "
          />
        </form>
      </div>
      <div className="md:flex hidden flex-1 items-center justify-center gap-2 lg:gap-6">
        {navbarItems.map((item) => (
          <Link
            key={item.id}
            className={`${pathName === item.pathName ? "text-black" : "text-black/70"} cursor-pointer text-lg font-semibold capitalize`}
            href={item.pathName}
          >
            {item.title}{" "}
          </Link>
        ))}
      </div>
      <div className="flex-1 md:flex hidden items-center justify-end gap-2 lg:gap-5">
        <LoveIcon className="cursor-pointer" size={32} />
        <CartIcon className="cursor-pointer" size={32} />
        <UserIcon className="cursor-pointer" size={32} />
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
