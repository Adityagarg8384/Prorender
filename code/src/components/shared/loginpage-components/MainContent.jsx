import React from "react";
import ProCareHero from "./ProCareHero";
import LoginForm from "./LoginForm";

const MainContent = () => {
  return (
    <div className=" mt-10 bg-red-300 rounded-[40px] max-md:mt-10 w-full mb-10 h-1/6 md:h-1/2">
      <div className="flex flex-row justify-center items-center md:h-full h-full">
        <ProCareHero />
        {/* <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <LoginForm />
        </div> */}
      </div>
    </div>
  );
};

export default MainContent;
