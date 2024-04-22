import { cardColors, cn } from "@/libs/utils";
import React from "react";
import Button from "../ui/button";

const ExploreProductCard = ({ bgColor }: any) => {
  return (
    <div
      className={cn(
        "relative max-w-md w-full lg:max-w-full flex group cursor-pointer rounded-xl p-4 h-[240px] max-h-[250px] pl-8 pt-6 mx-auto md:m-0",
        bgColor
      )}
    >
      <div className="flex flex-col justify-between">
        <div className="max-w-xs">
          <span className="block mb-2 text-sm text-slate-700">
            Sale collection
          </span>
          <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">
            Up to <br /> 80% off retail
          </h2>
        </div>
        <div className="mt-auto pb-2">
          <Button className="bg-white text-neutral-600 shadow-md">
            Show me all
          </Button>
        </div>
      </div>
      <div>
        <div className="absolute inset-5 sm:inset-8">
          {/* <img
              src="./static/media/3.dea1e24d9b1c408e5839.png"
              className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl"
              alt="nc-imgs"
            /> */}
        </div>
      </div>
      <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>
    </div>
  );
};

export default ExploreProductCard;
