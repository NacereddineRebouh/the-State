"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import image9 from "../../public/Images/Explore/9.jpg";
import image10 from "../../public/Images/Explore/10.jpg";
import image11 from "../../public/Images/Explore/11.jpg";
import image12 from "../../public/Images/Explore/12.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string;
  distance: number;
  price: number;
};

export default function PlacesCard({ title, distance, price }: Props) {
  const Images: StaticImageData[] = [image9, image10, image11, image12];
  const [loaded, setloaded] = useState<string>("pulse");
  return (
    <div
      className={`group relative inline-grid w-80 cursor-pointer grid-rows-[2fr_minmax(0px,1.6fr)] overflow-visible rounded-2xl border-[1px] bg-gray-100 p-3 text-left transition-all duration-300 ease-out`}
    >
      <div className="h-1/2">
        <Carousel
          className="relative aspect-square rounded-xl transition-all duration-300"
          swipeable={true}
          showThumbs={false}
          showStatus={false}
          transitionTime={250}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <button
                key="GoLeft"
                className={`${
                  hasPrev
                    ? "hover:scale-[113%] hover:opacity-100 hover:shadow-xl"
                    : ""
                } absolute top-[48%] bottom-0 left-0 z-10 ml-4 hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full border-b-[1.5px] border-gray-300 bg-zinc-100 opacity-50 shadow-sm transition-all duration-300 ease-in-out lg:hidden lg:border-[1.5px] lg:group-hover:flex`}
                onClick={clickHandler}
                disabled={!hasPrev}
              >
                <ChevronLeftIcon className="mx-auto h-[14px] w-[14px] font-bold" />
              </button>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <button
                key="GoRight"
                className={`${
                  hasNext
                    ? "hover:scale-[113%] hover:opacity-100 hover:shadow-xl"
                    : ""
                } absolute top-[48%] bottom-0 right-0 z-10 mr-4 hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full border-b-[1.5px] border-gray-300 bg-zinc-100 opacity-50 shadow-sm transition-all duration-300 ease-in-out lg:hidden lg:border-[1.5px] lg:group-hover:flex`}
                onClick={clickHandler}
                disabled={!hasNext}
              >
                <ChevronRightIcon className="mx-auto h-[14px] w-[14px] font-bold " />
              </button>
            );
          }}
        >
          {Images.map((image: StaticImageData, index: number) => {
            return (
              <div
                className={`aspect-square h-full w-full overflow-clip rounded-xl bg-gray-300 animate-${loaded}`}
                key={image.src}
              >
                <Image
                  src={image}
                  style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
                  alt="image"
                  quality={60}
                  width={1000}
                  height={1000}
                  onLoad={() => setloaded("none")}
                  // placeholder="blur"
                  className="h-auto w-auto rounded-xl transition-all duration-300 ease-out hover:scale-110"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* info about house */}
      <div className="group/loading mt-5 h-1/2">
        <div className="text-[15px] font-bold">{title}</div>
        <div className="text-gray-500">{distance} kilometers away</div>
        <div className="text-gray-500">jun 9-11</div>
        <div className="font-semibold">
          ${Math.floor(price / 30)}{" "}
          <span className="text-[15px] font-normal">night</span>
        </div>
      </div>
    </div>
  );
}
