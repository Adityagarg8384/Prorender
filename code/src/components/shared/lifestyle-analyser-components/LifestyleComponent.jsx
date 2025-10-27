import React from "react";

import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import FormSection from "./FormSection";
import ResultSection from "./ResultSection";
import ProCare from "@/components/shared/landingpage-components/ProCare";

function LifestyleComponent() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center md:px-32">
        <div className="flex z-10 px-5 flex-col self-center w-full max-w-[1409px] max-md:max-w-full">
          {/* <Header /> */}
          <HeroSection />
          {/* <WelcomeSection /> */}
          <FormSection />
          {/* <ResultSection /> */}
        </div>
      </div>

      {/* <ProCare /> */}
    </>
  );
}

export default LifestyleComponent;
