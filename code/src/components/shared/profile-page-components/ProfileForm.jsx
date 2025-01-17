"use client";
import React, { useState } from "react";
import FormSection from "./FormSection";
import InputField from "./InputField";

function ProfileForm() {
  const formSections = [
    { label: "First Name", placeholder: "First Name" },
    { label: "Last Name", placeholder: "Last Name" },
    { label: "Email", placeholder: "Example123@xyz.com" },
    { label: "Mobile Number", placeholder: "+91" },
    { label: "Gender", placeholder: "Gender" },
    { label: "Plan Purchased", placeholder: "Optimus" },
    { label: "Password", placeholder: "**************" },
    { label: "Card Number", placeholder: "XXXX XXXX XXXX XXXX" },
    { label: "Address", placeholder: "Address", isTextarea: true },
    { label: "Reviews", placeholder: "Reviews", isTextarea: true },
  ];

  const [formData, setFormData] = useState({
    "first-name": "",
    "last-name": "",
    email: "",
    "mobile-number": "",
    gender: "",
    "plan-purchased": "",
    password: "",
    "card-number": "",
    address: "",
    reviews: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // formData will contain the data from the form ,now  we can use this data to send it to the backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-16 py-14 mt-8 w-full bg-white rounded-3xl border-teal-600 border-solid border-[5px] max-md:px-5 max-md:max-w-full"
    >
      <div className="max-w-full w-[966px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-3xl text-black max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea997de918d4baf7bf5b54e99d7fb5fc41d44975f70ee188db66d73a26d17587?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8"
                className="object-contain w-full rounded-full aspect-[0.99]"
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <div className="grow mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                  <button className="px-4 py-2 w-full text-lg text-teal-600 bg-green-200 rounded-md max-md:px-5 max-md:mt-8">
                    Upload New
                  </button>
                </div>
                <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                  <button className="px-2 py-2 w-full text-lg text-rose-400 bg-rose-200 rounded-md max-md:px-5 max-md:mt-8">
                    Delete Avatar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-16">
        {formSections.map((section, index) => (
          <FormSection key={index} {...section}>
            <InputField {...section} handleChange={handleChange} />
          </FormSection>
        ))}
      </div>
      <button
        type="submit"
        className="self-start px-8 py-6 my-6 text-xl text-white bg-sky-400 rounded-3xl max-md:px-5 max-md:mt-10"
      >
        Save Changes
      </button>
    </form>
  );
}

export default ProfileForm;
