import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

export default async function SearchBar_Location({}: Props) {
  let Location: any = "";
  try {
    const res = await fetch(
      "https://api.maptiler.com/geolocation/ip.json?key=G37xRluKpwmumvaEmjcF",
      { cache: "no-store" }
    );
    let Location = await res.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="absolute top-6 right-0 left-0 z-10 mx-auto flex h-[65px] w-9/12 flex-row items-center justify-between rounded-3xl bg-white px-2 py-2 drop-shadow-xl sm:h-[75px]">
      <div className="flex flex-row items-center justify-start">
        <div className="flex w-10 items-center justify-center xl:w-16">
          <MapPinIcon className="h-6 w-6 text-slate-800"></MapPinIcon>
        </div>
        <div className="flex items-center truncate text-gray-400">
          <span className="text-sm font-bold text-slate-800 sm:text-base">
            Current location:
          </span>
          &nbsp;{+Location?.country ?? " ... " + " " + Location?.city ?? ""}
        </div>
      </div>
      <div className="flex h-full w-16 cursor-pointer items-center justify-center rounded-3xl bg-slate-800 transition-all duration-300 active:scale-95">
        <MagnifyingGlassIcon className="h-5 w-5 text-stone-50 sm:h-6 sm:w-6"></MagnifyingGlassIcon>
      </div>
    </div>
  );
}
