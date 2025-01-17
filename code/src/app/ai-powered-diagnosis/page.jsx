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
    "shortness of breath",
    "dizziness",
    "asthenia",
    "fall",
    "syncope",
    "vertigo",
    "sweat",
    "sweating increased",
    "palpitation",
    "nausea",
    "angina pectoris",
    "pressure chest",
    "polydypsia",
    "pain chest",
    "orthopnea",
    "rale",
    "unresponsiveness",
    "mental status changes",
    "vomiting",
    "labored breathing",
    "feeling suicidal",
    "suicidal",
    "hallucinations auditory",
    "feeling hopeless",
    "weepiness",
    "sleeplessness",
    "motor retardation",
    "irritable mood",
    "blackout",
    "mood depressed",
    "hallucinations visual",
    "worry",
    "agitation",
    "tremor",
    "intoxication",
    "verbal auditory hallucinations",
    "energy increased",
    "difficulty",
    "nightmare",
    "homelessness",
    "hypokinesia",
    "dyspnea on exertion",
    "chest tightness",
    "cough",
    "fever",
    "decreased translucency",
    "productive cough",
    "pleuritic pain",
    "yellow sputum",
    "breath sounds decreased",
    "chill",
    "rhonchus",
    "non-productive cough",
    "wheezing",
    "haemoptysis",
    "distress respiratory",
    "tachypnea",
    "night sweat",
    "jugular venous distention",
    "dyspnea",
    "dysarthria",
    "speech slurred",
    "facial paresis",
    "hemiplegia",
    "seizure",
    "numbness",
    "chest discomfort",
    "bradycardia",
    "pain",
    "erythema",
    "pruritus",
    "diarrhea",
    "abscess bacterial",
    "swelling",
    "apyrexial",
    "dysuria",
    "hematuria",
    "lethargy",
    "hyponatremia",
    "hemodynamically stable",
    "consciousness clear",
    "guaiac positive",
    "ecchymosis",
    "tumor cell invasion",
    "haemorrhage",
    "fatigue",
    "orthostasis",
    "transaminitis",
    "patient non compliance",
    "unconscious state",
    "abdominal tenderness",
    "unsteady gait",
    "hyperkalemia",
    "ascites",
    "hypotension",
    "muscle twitch",
    "sleepy",
    "headache",
    "lightheadedness",
    "food intolerance",
    "general discomfort",
    "drowsiness",
    "prostatism",
    "mass of body structure",
    "lesion",
    "cushingoid facies",
    "cushingoid habitus",
    "decreased body weight",
    "thicken",
    "spontaneous rupture of membranes",
    "redness",
    "sore to touch",
    "burning sensation",
    "constipation",
    "pain abdominal",
    "breech presentation",
    "cyanosis",
    "clonus",
    "anorexia",
    "metastatic lesion",
    "gurgle",
    "oliguria",
    "catatonia",
    "paresthesia",
    "lung nodule",
    "distended abdomen",
    "sinus rhythm",
    "splenomegaly",
    "painful swallowing",
    "throat sore",
    "snuffle",
    "urge incontinence",
    "scar tissue",
    "extreme exhaustion",
  ];
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
  const [isPending, startTransition] = useTransition();

  function handleOnChange(e) {
    const selectedValues = e.map((option) => option.value);
    setselect(selectedValues);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const a = JSON.stringify({ symptoms: select });
        // console.log(a);
        const res = await axios.post("/api/model/diagnosis", a, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        });
        // console.log(res.data);
        setresult(res?.data?.Message?.predicted_disease);
        setselect([]);
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
      <Hero />
      {/* <WelcomeSection /> */}
      <div className="w-full py-10 h-96 items-center flex flex-col rounded-xl gap-5 bg-violet-100 text-violet-700">
        <h1 className="capitalize tracking-wide font-semibold text-4xl">
          Let&apos;s get started
        </h1>
        <p className=" text-lg">Please select relevant symptoms you posses</p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-10 "
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
          {/* <h1>{select?.length}</h1>
          <h1 className="text-black">{isPending + ""}</h1> */}
          <button
            disabled={select.length == 0 || isPending}
            type="submit"
            className={`${
              select.length == 0
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
            You are diagnosed with :-{" "}
            <span className="italic">&quot;{result}&quot;</span>
          </p>
        </div>
      )}
    </div>
  );
}
