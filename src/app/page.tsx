import ArrivalCategory from "@/components/category/arrival-category";
import BrowseByCategory from "@/components/category/category-product";
import DiscountProduct from "@/components/category/discount-product";
import PopularProduct from "@/components/category/popular-product";
import SummerSales from "@/components/category/summer-category/summer-sales";
import HeroProductCard from "@/components/navbar/hero-product-card";
import HeroSection from "@/components/navbar/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <HeroProductCard />
      <BrowseByCategory />
      <ArrivalCategory />
      <PopularProduct />
      <DiscountProduct />
      <SummerSales />
    </div>
  );
}
