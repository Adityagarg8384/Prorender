import React from "react";
import ProCareHero from "./ProCareHero";
import LoginForm from "./LoginForm";

const MainContent = () => {
  return (
    <main className="pl-20 mt-16 bg-red-300 rounded-[40px]   max-md:pl-5 max-md:mt-10 max-md:max-w-[80%] mb-32">
      <div className="flex gap-5 h-full">
        <ProCareHero />
        <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
