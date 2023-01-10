import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

export default function Featured_Places({}: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[2500px]">
        <div className="my-6 mx-5 flex flex-col gap-y-24 md:mx-10 lg:mx-16 xl:mx-24">
          {/* Row 1 */}
          <div className="flex flex-row items-center justify-between">
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
              className="group flex w-52 cursor-pointer flex-row items-center justify-center gap-x-5 overflow-hidden rounded-2xl border-[2px] border-slate-700 px-8 py-4 font-medium transition-all duration-300 focus:bg-slate-100 focus:shadow-lg hover:bg-slate-100 active:scale-95 active:shadow-lg"
            >
              <div className="transition-transform duration-300 group-focus:translate-x-4 group-active:translate-x-4">
                See more
              </div>
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 ease-out group-focus:translate-x-16 group-focus:ease-in-out group-active:translate-x-24 group-active:ease-in-out"></ArrowRightIcon>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full overflow-x-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-stone-300 scrollbar-thumb-rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
