"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

const SingleProduct = () => {
  return (
    <div className="p-4">
      <div className="my-6">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Phone</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid sm:grid-cols-[0.8fr,1.3fr] gap-5">
          <div className="min-h-[500px] flex gap-2 self-start">
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map((_, i) => (
                <Image
                  key={i}
                  src="/phone1.png"
                  alt=""
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] object-contain"
                />
              ))}
            </div>

            <div className="h-[500px] w-full relative">
              <Image
                src="/phone1.png"
                alt=""
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
          <div className=" self-start bg-green-200">eee</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
