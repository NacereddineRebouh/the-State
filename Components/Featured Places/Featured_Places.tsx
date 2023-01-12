"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";
import AboutUs_module from "../../styles/aboutUs.module.css";

import { ScrollingCarousel } from "@trendyol-js/react-carousel";

//assets
import image2 from "../../public/Images/Places/2.jpg";
import image6 from "../../public/Images/Places/6.jpg";
import image7 from "../../public/Images/Places/7.jpg";
import image8 from "../../public/Images/Places/8.jpg";
import image9 from "../../public/Images/Places/9.jpg";
import image10 from "../../public/Images/Places/10.jpg";
import image11 from "../../public/Images/Places/11.jpg";
import image12 from "../../public/Images/Places/12.jpg";
import image13 from "../../public/Images/Places/13.jpg";
import image14 from "../../public/Images/Places/14.jpg";
import image15 from "../../public/Images/Places/15.jpg";
import image16 from "../../public/Images/Places/16.jpg";
import image17 from "../../public/Images/Places/17.jpg";
import image20 from "../../public/Images/Places/20.jpg";
import image19 from "../../public/Images/Places/19.jpg";

import profile1 from "../../public/Images/Places/profile pictures/1.jpg";
import profile2 from "../../public/Images/Places/profile pictures/2.jpg";
import profile3 from "../../public/Images/Places/profile pictures/3.jpg";
import PlacesCard from "./PlacesCard";
import { StaticImageData } from "next/image";

type Props = {};

type card = {
  Image_array: StaticImageData[];
  OwnerPicture: StaticImageData;
  owner: string;
  title: string;
  type: string;
  rating: number;
  reviews: number;
  price: string;
};

export default function Featured_Places({}: Props) {
  const Images: card[] = [
    {
      Image_array: [image2, image9, image8, image10, image11],
      owner: "Sean Maxwell",
      title: "Barry Plant Real Estate",
      type: "House",
      rating: 4.5,
      reviews: 41,
      price: "430,000",
      OwnerPicture: profile1,
    },
    {
      Image_array: [image17, image16],
      owner: "Jerome Bell",
      title: "Keller Williams Princeton Realty",
      type: "Apartment",
      rating: 4.9,
      reviews: 120,
      price: "90,000",
      OwnerPicture: profile3,
    },
    {
      Image_array: [image12, image15, image14, image13],
      owner: "Darrell steward",
      title: "Berkshire Hathaway HS HWWB",
      type: "Apartment",
      rating: 4.1,
      reviews: 90,
      price: "50,000",
      OwnerPicture: profile2,
    },
    {
      Image_array: [image6, image7, image19, image20],
      owner: "Sean Maxwell",
      title: "Barry Plant Real Estate",
      type: "House",
      rating: 4.5,
      reviews: 22,
      price: "120,000",
      OwnerPicture: profile1,
    },
  ];
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[2500px]">
        <div className="my-6 mx-0 flex flex-col gap-y-10 xs:mx-5 md:mx-10 md:gap-y-24 lg:mx-16 xl:mx-24">
          {/* Row 1 */}
          <div className="mx-5 flex flex-col items-center justify-center gap-y-8 xs:mx-0 md:flex-row md:justify-between md:gap-y-0">
            {/* Col 1.1 */}
            <div className="flex flex-1 flex-col gap-y-3 text-center text-xl font-semibold text-orange-500 xs:text-2xl sm:text-start">
              <p>Featured Places</p>
              <div className="text-center text-4xl font-extrabold text-slate-800 xs:text-[50px] xs:leading-[60px] sm:text-start sm:text-[60px] sm:leading-[70px] md:text-[70px] md:leading-[90px]">
                You might like these
              </div>
            </div>

            {/* Col 1.2 */}
            <div
              tabIndex={0}
              className="group flex w-full cursor-pointer flex-row items-center justify-center gap-x-5 overflow-hidden rounded-2xl border-[2px] border-slate-700 px-8 py-4 font-medium transition-all duration-300 focus:bg-slate-100 focus:shadow-lg hover:bg-slate-100 active:scale-95 active:shadow-lg md:w-52 "
            >
              <div className="transition-transform duration-300 group-focus:translate-x-4 group-active:translate-x-4">
                See more
              </div>
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 ease-out group-focus:translate-x-40 group-focus:ease-in-out xs:group-focus:translate-x-96 md:group-focus:translate-x-[500px] lg:group-focus:translate-x-16"></ArrowRightIcon>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-center">
            <Swiper
              speed={200}
              // allowTouchMove
              slidesPerView={"auto"}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              {Images.map((ImagesObject: card, index: number) => {
                return (
                  <SwiperSlide
                    key={index}
                    className={`${AboutUs_module["swiper-slideCard"]}`}
                  >
                    <PlacesCard
                      Images={ImagesObject.Image_array}
                      title={ImagesObject.title}
                      distance={500}
                      price={ImagesObject.price}
                      owner={ImagesObject.owner}
                      type={ImagesObject.type}
                      rating={ImagesObject.rating}
                      reviews={ImagesObject.reviews}
                      OwnerPicture={ImagesObject.OwnerPicture}
                    />
                  </SwiperSlide>
                );
              })}
              {/* <SwiperSlide className={`${AboutUs_module["swiper-slideCard"]}`}>
                <PlacesCard
                  title={"Barry Plant Real Estate"}
                  distance={500}
                  price={430000}
                />
              </SwiperSlide>
              <SwiperSlide className={`${AboutUs_module["swiper-slideCard"]}`}>
                <PlacesCard
                  title={"Barry Plant Real Estate"}
                  distance={500}
                  price={430000}
                />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
