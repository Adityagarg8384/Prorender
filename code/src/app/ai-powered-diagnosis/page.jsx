// components/MultiSelectSearch.tsx
"use client";
import Hero from "@/components/shared/ai-diagnosis-components/Hero";
import WelcomeSection from "@/components/shared/ai-diagnosis-components/WelcomeSection";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { CircleArrowDown, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
// console.log(jsonArray);
const animatedComponents = makeAnimated();
export default function AiPoweredDiagnosis() {
  const symptoms = [
    'abdominal_pain', 'acidity', 'anxiety', 'blackheads', 'bloody_stool',
               'blurred_and_distorted_vision', 'breathlessness', 'chest_pain',
               'chills', 'constipation', 'continuous_feel_of_urine',
               'continuous_sneezing', 'cough', 'dischromic _patches', 'dizziness',
               'fatigue', 'foul_smell_of urine', 'headache', 'high_fever',
               'hip_joint_pain', 'indigestion', 'irregular_sugar_level',
               'irritation_in_anus', 'joint_pain', 'knee_pain',
               'lack_of_concentration', 'lethargy', 'loss_of_appetite', 'mood_swings',
               'movement_stiffness', 'nausea', 'neck_pain', 'nodal_skin_eruptions',
               'pain_in_anal_region', 'passage_of_gases', 'pus_filled_pimples',
               'restlessness', 'shivering', 'skin_peeling', 'skin_rash',
               'small_dents_in_nails', 'sweating', 'swelling_joints', 'vomiting',
               'watering_from_eyes', 'No Symptom', 'itching'
  ];
  // console.log("symptoms")
  const jsonArray = symptoms.map((symptom) => ({
    value: symptom,
    label: symptom,
  }));
  // const customStyles = {
  //   control: (provided) => ({
  //     // class attribute : class=" css-i32vvf-control"
  //     ...provided,

  //     display: "flex",
  //     flexWrap: "nowrap",
  //     borderColor: "hsl(0deg 78.56% 55.56%);",
  //   }),
  //   menu: (provided) => ({
  //     // 'menu' is from the div class too.
  //     ...provided,
  //   }),
  // };
  const [select, setselect] = useState([]);
  const [result, setresult] = useState(null);
  const [result2, setresult2]= useState(null);
  const [isPending, startTransition] = useTransition();
  const [age, setAge]= useState('')
  const [days, setDays]= useState('')

  function handleOnChange(e) {
    const selectedValues = e.map((option) => option.value);
    setselect(selectedValues);
  }

  function handleAgeChange(e){
    // console.log(e.target.value);
    setAge(e.target.value)
  }

  function handleDateChange(e){
    // console.log(e.target.value);
    setDays(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const a = JSON.stringify({ symptoms: select, age:age, days:days });
        // console.log(a);
        const res = await axios.post("/api/model/diagnosis", a, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        });
        // console.log(res.data);
        setresult(res?.data?.Message?.predictions[0]);
        setresult2(res?.data?.Message?.predictions[1]);
        setselect([]);
      } catch (error) {
        // console.log(error);
        setError(
          error?.response?.data?.Message
            ? error?.response?.data?.Message
            : "Error Encountered"
        );
      }
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-5 md:px-32 items-center py-10 md:container">
      <Hero />
      {/* <WelcomeSection /> */}
      <div className="w-full py-10 h-auto items-center flex flex-col rounded-xl gap-5 bg-violet-100 text-violet-700">
        <h1 className="capitalize tracking-wide font-semibold text-4xl">
          Let&apos;s get started
        </h1>
        <p className=" text-lg">Please select relevant symptoms you posses</p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-5 "
        >
          <Select
            className="w-[60%]"
            id="d"
            value={select.map((value) => ({ value, label: value }))}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={jsonArray}
            onChange={handleOnChange}
          />
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            min="0"
            max="100"
            placeholder="Age"
            className="w-[60%] mt-1 p-1.5"
          />

          <input
            type="number"
            id="date"
            value={days}
            onChange={handleDateChange}
            min="0"
            max="25"
            placeholder="Number of Days of Symptoms"
            className="w-[60%] mt-1 p-1.5"
          />
          {/* <h1>{select?.length}</h1>
          <h1 className="text-black">{isPending + ""}</h1> */}
          <button
            disabled={select.length == 0 || age.length==0 || days.length==0 || isPending}
            type="submit"
            className={`${
              select.length == 0 || age.length==0|| days.length==0
                ? "cursor-not-allowed disabled:bg-violet-100 disabled:text-violet-300"
                : ""
            }  bg-violet-700 text-violet-200  border-violet-500 border w-36 text-center flex items-center justify-center  font-bold py-2 px-4 rounded`}
          >
            {isPending ? (
              <CircleArrowDown className="animate-bounce text-violet-200 text-center flex items-center " />
            ) : (
              // <Loader2 />
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
            {" "} 
            <span className="italic">&quot;{result.disease}&quot; </span>
            with probability {""}
            <span className="italic">&quot;{Math.round(result.probability * 100 * 10) / 10}&quot; </span>
            %
          </p>
          <p className="font-semibold capitalize text-2xl ml-3 ">
            {" "} 
            <span className="italic">&quot;{result2.disease}&quot; </span>
            With probability {""}
            <span className="italic">&quot;{Math.round(result2.probability * 100 * 10) / 10}&quot; </span>
            %
          </p>
        </div>
      )}
    </div>
  );
}
