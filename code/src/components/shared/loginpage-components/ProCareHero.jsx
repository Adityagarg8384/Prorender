import React from "react";

const ProCareHero = () => {
  return (
    <section className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full h-auto">
      <div className="flex flex-col items-start mt-16 text-white max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69dc7918c46cc36d58ab15242bb456368f4c05c3a0eb159237d5df0374a9852a?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8"
          className="object-contain aspect-square w-[79px]"
          alt="ProCare logo"
        />
        <h1 className="mt-16 text-6xl font-semibold max-md:mt-10 max-md:text-4xl">
          ProCare
        </h1>
        <p className=" mt-10 text-5xl max-md:text-4xl">
          Stay Strong, Live Long
        </p>
      </div>
    </section>
  );
};

export default ProCareHero;
