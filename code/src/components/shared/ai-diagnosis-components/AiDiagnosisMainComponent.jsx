import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import WelcomeSection from "./WelcomeSection";
import FormSection from "./FormSection";
import ResultSection from "./ResultSection";
import ProCare from "@/components/shared/landingpage-components/ProCare";

function AiDiagnosisMainComponent() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center px-32">
        <div className="flex z-10 px-20 flex-col self-center w-full max-w-[1409px] max-md:max-w-full">
          {/* <Header /> */}
          <Hero />
          <WelcomeSection />
          <FormSection />
          <ResultSection />
        </div>
      </div>

      <ProCare />
    </>
  );
}

export default AiDiagnosisMainComponent;
