import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const SignUpPage = () => {
  return (
    <div className="flex overflow-hidden flex-col min-h-screen justify-center items-center px-20 py-14 bg-white max-md:px-5">
      <div className="flex flex-col container h-full ">
        {/* <Header /> */}

        <MainContent />
      </div>
    </div>
  );
};

export default SignUpPage;
