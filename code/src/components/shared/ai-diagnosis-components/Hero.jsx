import Image from "next/image";

import React from "react";

function Hero() {
  return (
    <section className="relative p-2 w-full rounded-3xl overflow-hidden">
      {/* Image area: aspect ratio keeps it proportional on small screens,
      md:h-[420px] gives a fixed taller area on larger screens */}
      <div className="relative w-full aspect-[16/9] md:h-[420px]">
        <Image
          priority
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c72135f5bf335eb13670f7fcf6a0967d67c3c043b91ad9c2e1dcaceb09e7a3d7?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8"
          alt="diagnosis illustration"
          fill
          className="object-cover"
        />

        {/* subtle gradient so white text is readable on any part of the image */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* headline container — responsive sizing + max-width so it wraps nicely */}
        <div className="absolute right-4 bottom-4 md:right-8 md:bottom-10 max-w-[70%] md:max-w-[40%]">
          <p className="text-white font-semibold leading-tight text-2xl sm:text-3xl md:text-5xl">
            AI Powered Diagnosis
          </p>
        </div>
      </div>

      {/* if you need spacing/content below the image, keep it here */}
      <div className="px-4 md:px-8 py-6">
        {/* secondary content goes here */}
      </div>
    </section>

  );
}

export default Hero;
