import React from "react";
import SwiperComponent from "../../Components/Explore/SwiperComponent";
import PlacesCard from "../../Components/Featured Places/PlacesCard";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-stone-100">
      <div className="mx-auto">
        {/* <PlacesCard
          title={"Barry Plant Real Estate"}
          distance={500}
          price={430000}
        /> */}
      </div>
    </div>
  );
}
