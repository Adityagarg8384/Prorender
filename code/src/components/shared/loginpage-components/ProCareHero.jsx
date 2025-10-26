import React from "react";
import LoginForm from "../loginpage-components/LoginForm";

const ProCareHero = () => {
  return (
    <section className="flex flex-col  max-md:w-full md:h-auto">
      <div className="flex flex-col flex-center items-center md:mt-2 text-white ">
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69dc7918c46cc36d58ab15242bb456368f4c05c3a0eb159237d5df0374a9852a?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8"
          className="object-contain aspect-square w-[79px]"
          alt="ProCare logo"
        /> */}
        <h1 className="mt-2 md:text-6xl text-lg font-semibold max-md:mt-10 ">
          ProCare
        </h1>
        <p className=" mt-2 mb-4 md:text-5xl text-lg ">
          Stay Strong, Live Long
        </p>

        <div className=" flex flex-row justify-center items-center max-md:ml-0 w-5/6 md:w-full mb-6">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default ProCareHero;
