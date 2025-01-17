import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    // <section className="flex relative flex-col justify-center items-end px-20 py-28 mt-12 w-full rounded-3xl min-h-[360px] max-md:px-5 max-md:py-24 max-md:mt-10">
    //   <div className="w-full h-96 relative">
    //     <Image
    //       priority
    //       src={
    //         "https://cdn.builder.io/api/v1/image/assets/TEMP/e6f620bb4f49371e98af52172e8a07ba3cf8854de50f38e9c4c7672b86cf8887?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8"
    //       }
    //       alt="image"
    //       fill
    //       className="object-cover absolute inset-0 size-full rounded-3xl"
    //     />
    //   </div>

    //   <div className="flex relative shrink-0 mb-0 max-w-full bg-white bg-opacity-0  max-md:mb-2.5" />
    //   <p className="absolute text-5xl font-semibold text-white right-8 bottom-10">
    //     Medical Recommendations
    //   </p>
    // </section>
    <section className="flex relative flex-col justify-center items-end w-full rounded-3xl min-h-[360px] max-md:px-5 max-md:py-24 max-md:mt-10">
      <div className="w-full h-96 relative">
        <Image
          priority
          src={
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e6f620bb4f49371e98af52172e8a07ba3cf8854de50f38e9c4c7672b86cf8887?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8"
          }
          alt="image"
          fill
          className="object-cover absolute inset-0 size-full rounded-3xl"
        />
      </div>
      <div className="flex relative shrink-0 mb-0 max-w-full bg-white bg-opacity-0  max-md:mb-2.5" />
      <p className="absolute text-5xl font-semibold text-white right-8 bottom-10">
        Medical Recommendations
      </p>
    </section>
  );
}

export default HeroSection;
