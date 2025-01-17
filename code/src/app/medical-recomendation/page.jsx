"use client";
import { CircleArrowDown, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import HeroSection from "@/components/shared/medical-recomendation-components/HeroSection";
// import MedicationRecommendation from "@/components/shared/medical-recomendation-components/MedicationRecomendation";
import axios from "axios";
import React from "react";
import axiosInstance from "@/utils/axios.instance";
const animatedComponents = makeAnimated();
export default function MedicationRecommendation() {
  const uniqueSymptoms = [
    "Fever",
    "Cough",
    "Headache",
    "Fatigue",
    "Shortness of breath",
    "Nausea",
    "Vomiting",
    "Sore Throat",
    "Joint Pain",
    "Chest Pain",
    "Dizziness",
    "Itching",
    "Redness",
    "Abdominal Pain",
    "Bloating",
    "Sadness",
    "Muscle Aches",
    "Sneezing",
    "Blurred Vision",
    "Stomach Pain",
    "Diarrhea",
    "Swelling",
    "Back Pain",
    "Numbness",
    "Weakness",
    "Anxiety",
    "Rapid Heartbeat",
    "Skin Rash",
    "Palpitations",
    "Difficulty breathing",
    "Chills",
    "Sensitivity",
    "Cramps",
  ];
  const causes = [
    "Viral Infection",
    "Stress",
    "Pollution",
    "Food Poisoning",
    "Bacterial Infection",
    "Rheumatoid Arthritis",
    "High Blood Pressure",
    "Allergies",
    "Poor Diet",
    "Depression",
    "Cold Weather",
    "Motion Sickness",
    "Smoking",
    "Migraine Triggers",
    "Spicy Food",
    "Autoimmune Response",
    "Herniated Disc",
    "Pregnancy",
    "Anemia",
    "Obesity",
    "Osteoarthritis",
    "Dehydration",
    "Tension",
    "vereating",
    "Menstrual Cycle",
    "Heart Disease",
    "Hypothyroidism",
    "Infection",
    "COVID-19 Exposure",
    "Overexertion",
    "Eye Strain",
    "Sciatica",
    "Chronic Fatigue Syndrome",
    "Physical Exertion",
  ];
  const diseases = [
    "Common Cold",
    "Migraine",
    "Asthma",
    "Gastroenteritis",
    "Strep Throat",
    "Arthritis",
    "Hypertension",
    "Allergic Reaction",
    "Indigestion",
    "Major Depressive",
    "Influenza",
    "Motion Sickness",
    "Chronic Bronchitis",
    "Gastritis",
    "Rheumatoid Arthritis",
    "Tonsillitis",
    "Sciatica",
    "Morning Sickness",
    "Iron Deficiency",
    "Panic Disorder",
    "Sleep Apnea",
    "Dermatitis",
    "Respiratory infection",
    "Heat Exhaustion",
    "Tension Headache",
    "Menstrual Cramps",
    "Coronary Artery Disease",
    "Thyroid Disorder",
    "Pneumonia",
    "COVID-19",
    "Muscle Strain",
    "Vision Fatigue",
    "Herniated Disc",
    "Chronic Fatigue Syndrome",
    "Anxiety Disorder",
    "Muscle Overuse",
  ];
  const genderr = ["Male", "Female"];
  const genderjson = genderr.map((gender) => ({
    value: gender,
    label: gender,
  }));
  const symptomjson = uniqueSymptoms.map((symptom) => ({
    value: symptom,
    label: symptom,
  }));
  const causesjson = causes.map((causes) => ({
    value: causes,
    label: causes,
  }));
  const diseasesjson = diseases.map((diseases) => ({
    value: diseases,
    label: diseases,
  }));

  const [symptomselect, setsymptomselect] = useState([]);
  const [causesselect, setcausesselect] = useState([]);
  const [diseasesselect, setdiseasesselect] = useState([]);
  const [gender, setgender] = useState("Male");
  const [result, setresult] = useState("");
  const [isPending, startTransition] = useTransition();

  function handlesymptomselect(e) {
    const selectedValues = e.map((option) => option.value);
    setsymptomselect(selectedValues);
  }
  function handlecausesselect(e) {
    const selectedValues = e.map((option) => option.value);
    setcausesselect(selectedValues);
  }
  function handlediseasesselect(e) {
    const selectedValues = e.map((option) => option.value);
    setdiseasesselect(selectedValues);
  }
  function handlegender(e) {
    setgender(e.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const a = JSON.stringify({
          Gender: gender,
          Symptoms: symptomselect,
          Causes: causesselect,
          Disease: diseasesselect,
        });
        console.log(a);
        const res = await axiosInstance.post("/api/model/treatment", a, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        });
        // console.log(res.data);
        setresult(res?.data?.Message["Predicted Medicine"]);
        setsymptomselect([]);
        setdiseasesselect([]);
        setgender("Male");
        setcausesselect([]);
      } catch (error) {
        console.log(error);
        // setError(
        //   error?.response?.data?.Message
        //     ? error?.response?.data?.Message
        //     : "Error Encountered"
        // );
      }
    });
  };
  return (
    <div className="min-h-screen w-full flex flex-col gap-5 px-32 items-center py-10 container ">
      <HeroSection />
      {/* <WelcomeSection /> */}
      <div className="w-full py-10  items-center flex flex-col rounded-xl  bg-violet-100 text-violet-700">
        <h1 className="capitalize tracking-wide font-semibold text-4xl mb-5">
          Let&apos;s get started
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center  gap-2 mt-6"
        >
          <p className=" text-lg ">Select Gender</p>
          <Select
            className="w-[60%]"
            id="ddqvwq"
            key={"zero"}
            // value={[gender]}
            closeMenuOnSelect={true}
            options={genderjson}
            onChange={handlegender}
          />
          <p className=" text-lg">Select relevant symptoms</p>
          <Select
            className="w-[60%]"
            id="d"
            key={"first"}
            value={symptomselect.map((value) => ({ value, label: value }))}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={symptomjson}
            onChange={handlesymptomselect}
          />
          <p className=" text-lg">Select relevant causes</p>
          <Select
            key={"secind"}
            className="w-[60%]"
            id="ddd"
            value={causesselect.map((value) => ({ value, label: value }))}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={causesjson}
            onChange={handlecausesselect}
          />
          <p className=" text-lg">Select relevant disease</p>
          <Select
            className="w-[60%]"
            id="dddqwerdd"
            key={"third"}
            value={diseasesselect.map((value) => ({ value, label: value }))}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={diseasesjson}
            onChange={handlediseasesselect}
          />
          {/* <h1>{select?.length}</h1>
          <h1 className="text-black">{isPending + ""}</h1> */}
          <button
            disabled={
              causesselect.length == 0 ||
              diseasesselect.length == 0 ||
              causesselect.length == 0 ||
              gender.length == 0 ||
              isPending
            }
            type="submit"
            className={`${
              causesselect.length == 0 ||
              diseasesselect.length == 0 ||
              causesselect.length == 0 ||
              gender.length == 0
                ? "cursor-not-allowed disabled:bg-violet-100 disabled:text-violet-300"
                : ""
            }  bg-violet-700 text-violet-200  border-violet-500 mt-4 border w-36 text-center flex items-center justify-center  font-bold py-2 px-4 rounded`}
          >
            {isPending ? (
              <CircleArrowDown className="animate-bounce text-violet-200 text-center flex items-center " />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      {isPending && (
        <>
          <div className=" w-full text-3xl flex justify-center font-bold gap-6 text-emerald-400 items-center py-20 ">
            Loading Results <Loader2 className="animate-spin" />{" "}
          </div>
          <p className="text-sm font-light -mt-12 -ml-10 text-emerald-700 ">
            sometimes it takes time
          </p>
        </>
      )}
      {!isPending && result && (
        <div className="w-full rounded-xl  flex flex-col items-center bg-emerald-200 p-10 gap-10 text-emerald-800 ">
          <h1 className="font-semibold text-5xl">Predicted Results </h1>
          <p className="font-semibold capitalize text-2xl ml-3 ">
            Adviced Presciption :-{" "}
            <span className="italic">&quot;{result}&quot;</span>
          </p>
        </div>
      )}
    </div>
  );
}
