import ProCare from "@/components/shared/landingpage-components/ProCare";
import EditProfile from "@/components/shared/profile-page-components/EditProfile";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center px-[400px]">
        <EditProfile />
      </div>
      {/* <ProCare /> */}
    </>
  );
};

export default page;
