import Image from "next/image";

import React from "react";

function Hero() {
  return (
    <section className="flex relative flex-col justify-center items-end w-full rounded-3xl min-h-[360px] max-md:px-5 max-md:py-24 max-md:mt-10">
      <div className="w-full h-96 relative">
        <Image
          priority
          src={
            "https://cdn.builder.io/api/v1/image/assets/TEMP/c72135f5bf335eb13670f7fcf6a0967d67c3c043b91ad9c2e1dcaceb09e7a3d7?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8"
          }
          alt="image"
          fill
          className="object-cover absolute inset-0 size-full rounded-3xl"
        />
      </div>
      <div className="flex relative shrink-0 mb-0 max-w-full bg-white bg-opacity-0  max-md:mb-2.5" />
      <p className="absolute text-5xl font-semibold text-white right-8 bottom-10">
        AI Powered Diagnosis
      </p>
    </section>
  );
}

export default Hero;
