import React from "react";

function HeroSection() {
  return (
    <section className="flex relative flex-col justify-center items-end px-20 py-28 mt-12 w-full rounded-3xl min-h-[360px] max-md:px-5 max-md:py-24 max-md:mt-10">
      <img
        loading="lazy"
        src="/hello.jpg"
        alt=""
        className="object-cover absolute brightness-75 inset-0 size-full rounded-3xl"
      />
      <div className="flex relative shrink-0 mb-0 max-w-full bg-white bg-opacity-0  max-md:mb-2.5" />
      <p className="absolute text-5xl font-semibold text-white  right-8 bottom-10">
        Chronic Disease Tracker
      </p>
    </section>
  );
}

export default HeroSection;
