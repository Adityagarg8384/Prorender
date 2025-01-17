"use client";
import React, { useState, useTransition } from "react";
import axios from "axios";
import axiosInstance from "@/utils/axios.instance";
import { Loader2, Rss } from "lucide-react";

export default function HealthForm() {
  const [formData, setFormData] = useState({
    HighBP: 0,
    HighChol: 0,
    CholCheck: 0,
    BMI: 10,
    Smoker: 0,
    stroke: 0,
    Diabetes: 0,
    PhysActivity: 0,
    Fruits: 0,
    Veggies: 0,
    HvyAlcoholConsump: 0,
    AnyHealthcare: 0,

    NoDocbcCost: 0,
    GenHlth: 1,
    MentHlth: 0,
    PhysHlth: 0,
    DiffWalk: 0,
    Sex: 0,
    Age: 1,
    Education: 1,
    Income: 1,
  });
  const [result, setresult] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value), // ensure numerical values
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    startTransition(async () => {
      try {
        const res = await axiosInstance.post(
          "/api/model/chronic",
          JSON.stringify(formData),
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
        setresult(res?.data?.Message?.prediction);
        setFormData({
          HighBP: 0,
          HighChol: 0,
          CholCheck: 0,
          BMI: 10,
          Smoker: 0,
          stroke: 0,
          Diabetes: 0,
          PhysActivity: 0,
          Fruits: 0,
          Veggies: 0,
          HvyAlcoholConsump: 0,
          AnyHealthcare: 0,

          NoDocbcCost: 0,
          GenHlth: 1,
          MentHlth: 0,
          PhysHlth: 0,
          DiffWalk: 0,
          Sex: 0,
          Age: 1,
          Education: 1,
          Income: 1,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const formInputs = [
    { label: "HighBP (0-1)", name: "HighBP", type: "number", min: 0, max: 1 },

    {
      label: "HighChol (0-1)",
      name: "HighChol",
      type: "number",
      min: 0,
      max: 1,
    },
    {
      label: "CholCheck  (0-1)",
      name: "CholCheck",
      type: "number",
      min: 0,
      max: 1,
    },
    { label: "BMI (10-40)", name: "BMI", type: "number", min: 10, max: 40 },
    { label: "Smoker (0-1)", name: "Smoker", type: "number", min: 0, max: 1 },
    { label: "Stroke (0-1)", name: "stroke", type: "number", min: 0, max: 1 },
    {
      label: "Diabetes (0-2)",
      name: "Diabetes",
      type: "number",
      min: 0,
      max: 2,
    },
    {
      label: "Phys Activity (0-1)",
      name: "PhysActivity",
      type: "number",
      min: 0,
      max: 1,
    },
    { label: "Fruits (0-1)", name: "Fruits", type: "number", min: 0, max: 1 },
    { label: "Veggies (0-1)", name: "Veggies", type: "number", min: 0, max: 1 },
    {
      label: "Hvy Alcohol (0-1)",
      name: "HvyAlcoholConsump",
      type: "number",
      min: 0,
      max: 1,
    },
    {
      label: "Any Healthcare (0-1)",
      name: "AnyHealthcare",
      type: "number",
      min: 0,
      max: 1,
    },
    {
      label: "NoDocbcCost (0-1)",
      name: "NoDocbcCost",
      type: "number",
      min: 0,
      max: 1,
    },
    {
      label: "Gen Hlth (1-5)",
      name: "GenHlth",
      type: "number",
      min: 1,
      max: 5,
    },
    {
      label: "Ment Hlth (0-30)",
      name: "MentHlth",
      type: "number",
      min: 0,
      max: 30,
    },
    {
      label: "Phys Hlth  (0-30)",
      name: "PhysHlth",
      type: "number",
      min: 0,
      max: 30,
    },
    {
      label: "Diff Walk (0-1)",
      name: "DiffWalk",
      type: "number",
      min: 0,
      max: 1,
    },
    {
      label: "Sex (0-Female, 1-Male)",
      name: "Sex",
      type: "number",
      min: 0,
      max: 1,
    },
    { label: "Age (1-100)", name: "Age", type: "number", min: 1, max: 100 },
    {
      label: "Education (1-9)",
      name: "Education",
      type: "number",
      min: 1,
      max: 9,
    },
    { label: "Income (1-9)", name: "Income", type: "number", min: 1, max: 9 },
  ];

  const FormInput = ({ label, name, type, min, max }) => (
    <div className="flex flex-col">
      <label className="text-lg font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        min={min}
        max={max}
        value={formData[name]}
        onChange={handleChange}
        className="px-4 py-2 mt-2 border rounded-md border-stone-500"
        required
      />
    </div>
  );

  const SubmitButton = () => (
    <button
      type="submit"
      disabled={isPending}
      className="px-6 py-3 mt-4 text-xl font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
    >
      {isPending ? "Submitting..." : "Submit"}
    </button>
  );

  return (
    <div className="w-full my-3  flex flex-col rounded-xl  ">
      <form
        onSubmit={handleSubmit}
        className="flex overflow-hidden flex-col px-8 pt-6 pb-16 bg-violet-100 bg-opacity-50 max-md:px-5 max-md:pb-24 my-10"
      >
        <div className="w-full max-w-[1004px] max-md:max-w-full flex flex-col items-center">
          <header className="flex flex-col gap-5 max-md:flex-col items-center">
            <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full items-center">
              <div className="flex flex-col items-center grow text-black max-md:mt-10 max-md:max-w-full">
                <h2 className="text-4xl font-semibold max-md:max-w-full max-md:text-4xl">
                  Let&apos;s get you started
                </h2>
                <div className="flex flex-col items-center self-center mt-4 ml-6 max-w-full w-[434px]">
                  <p className="text-xl font-light max-md:max-w-full">
                    Enter the details to get going
                  </p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <main className="mt-8">
          <div className="grid w-full grid-cols-2 grid-rows-3 gap-4">
            {formInputs.map((input, index) => (
              <div key={index} className="mb-8 col-span-1 row-span-1">
                <FormInput
                  label={input.label}
                  name={input.name}
                  type={input.type}
                  min={input.min}
                  max={input.max}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 justify-between mt-8 text-3xl text-white whitespace-nowrap max-md:max-w-full">
            {/* <textarea className="flex max-w-full bg-white rounded-md border border-solid border-stone-500 h-[82px] w-[616px]" /> */}
            <SubmitButton />
          </div>
        </main>
      </form>
      {isPending && (
        <>
          <div className=" w-full text-3xl flex justify-center font-bold gap-6 text-emerald-400 items-center py-20 ">
            Loading Results <Loader2 className="animate-spin" />{" "}
          </div>
          <p className="text-sm font-light text-center -mt-12 -ml-10 text-emerald-700 ">
            sometimes it takes time
          </p>
        </>
      )}
      {!isPending && result && (
        <div className="w-full rounded-xl flex flex-col items-center bg-emerald-200 p-10 gap-10 text-emerald-800 ">
          <h1 className="font-semibold text-5xl">Predicted Results </h1>
          <p className="font-semibold capitalize text-2xl ml-3 ">
            Disease Prediction :-{" "}
            <span className="italic">&quot;{result}&quot;</span>
          </p>
        </div>
      )}
    </div>
  );
}
