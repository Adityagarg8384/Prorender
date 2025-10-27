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
    <section className="relative w-full rounded-3xl overflow-hidden">
      {/* image area: proportional on small screens, taller on md+ */}
      <div className="relative w-full aspect-[16/9] md:h-[420px]">
        <Image
          priority
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6f620bb4f49371e98af52172e8a07ba3cf8854de50f38e9c4c7672b86cf8887?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8"
          alt="medical illustration"
          fill
          className="object-cover"
        />

        {/* gradient to improve contrast for white text */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/65 via-black/30 to-transparent" />

        {/* headline: centered on small screens, bottom-right on md+ */}
        <div className="absolute right-4 bottom-4 md:right-8 md:bottom-10 max-w-[85%] md:max-w-[40%] sm:left-1/2 sm:-translate-x-1/2 text-right sm:text-center">
          <p className="text-white font-semibold leading-tight text-2xl sm:text-3xl md:text-5xl">
            Medical Recommendations
          </p>
        </div>
      </div>

      {/* optional content under the image */}
      <div className="px-4 md:px-8 py-6">
        {/* add any extra content here */}
      </div>
    </section>
  );
}

export default HeroSection;
