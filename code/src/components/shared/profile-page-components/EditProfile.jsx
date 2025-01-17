import React from "react";

import ProfileForm from "./ProfileForm";

function EditProfile() {
  return (
    <main className="flex flex-col self-center w-full max-w-[1418px] max-md:max-w-full">
      <h1 className="self-start mt-10 text-4xl font-medium text-black max-md:mt-10 max-md:text-4xl">
        Edit Profile
      </h1>
      <ProfileForm />
      {/* <button className="self-start px-8 py-6 my-6 text-xl text-white bg-sky-400 rounded-3xl max-md:px-5 max-md:mt-10">
                Save Changes
            </button> */}
    </main>
  );
}

export default EditProfile;
