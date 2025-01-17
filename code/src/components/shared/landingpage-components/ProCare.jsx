import React from "react";
import QuickLinks from "./QuickLinks";
import Features from "./Features";

function ProCare() {
  return (
    <div className="flex flex-col items-start px-32 pt-8 pb-28 -mt-1 w-full bg-emerald-500 bg-opacity-30 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="mb-0 max-w-full w-[1086px] max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
            <header className="flex flex-col grow text-5xl font-semibold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <h1 className="self-start max-md:text-4xl">
                Pro<span className="text-emerald-500">Care</span>
              </h1>
              <div className="flex shrink-0 mt-11 bg-white h-[160px] max-md:mt-10 max-md:max-w-full" />
              <div className="flex shrink-0 mt-8 bg-white h-[80px] max-md:max-w-full" />
            </header>
          </div>
          <QuickLinks />
          <Features />
        </div>
      </div>
    </div>
  );
}

export default ProCare;
