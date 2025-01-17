import { WobbleCard } from "@/components/ui/wobble-card";
import Designer from "../../../public/Designer.jpeg";
import img1 from "../../../public/img1.jpeg";
import Image from "next/image";

import { BackgroundOverlay } from "@/components/ui/background-overlay-card";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import Loader2 from "./loader";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col w-full py-10 items-center gap-4 ">
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <div className=" w-full  col-span-2 col-start-1">
            <div
              className={cn(
                "group w-full  overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('../../public/img1.jpeg')] bg-cover bg-center",
                // Preload hover image by setting it in a pseudo-element

                "after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50"
              )}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                  AI Assisted Diagnosis
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                  Experience precise and swift medical diagnoses with our
                  cutting-edge AI technology.
                </p>
              </div>
            </div>
          </div>
          <Link href={"/ai-powered-diagnosis"}>
            <div className=" cursor-pointer overflow-hidden flex flex-col gap-5 rounded-md items-center text-center justify-center   col-span-1 relative inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient)] pointer-events-nonerounded-md">
              <Boxes />
              <h1
                className={cn(
                  "md:text-5xl font-bold text-xl text-white relative z-20 "
                )}
              >
                Get <span className="text-emerald-500">Diagnosed</span>
              </h1>
            </div>
          </Link>
        </div>
      </Suspense>
      <Suspense fallback={<Loader2 />}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <Link href={"/medical-recomendation"}>
            {" "}
            <div className=" overflow-hidden cursor-pointer flex flex-col gap-5 rounded-md items-center text-center justify-center   col-span-1 relative inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient)] pointer-events-nonerounded-md">
              <Boxes />
              <h1
                className={cn(
                  "md:text-5xl font-bold text-xl text-white relative z-20 "
                )}
              >
                Get <span className="text-emerald-500">Treatment</span>
              </h1>
            </div>
          </Link>
          <div className=" w-full col-span-2 col-start-2">
            <div
              className={cn(
                "group w-full overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('../../public/img2.png')]  bg-cover bg-center",
                // Preload hover image by setting it in a pseudo-element

                "after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50"
              )}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                  AI Assisted Treatment
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                  Unlock personalized treatment plans tailored by advanced AI
                  for optimal health outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <div className=" w-full  col-span-2 col-start-1">
            <div
              className={cn(
                "group w-full  overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('../../public/Designer9.png')] bg-cover bg-center",
                // Preload hover image by setting it in a pseudo-element

                "after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50"
              )}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                  AI Assisted Chronic Disease Track
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                  Leverage the benefit of prior prediction of any chronic
                  disease.
                </p>
              </div>
            </div>
          </div>

          <Link href={"/lifestyle-analyser"}>
            <div className=" cursor-pointer overflow-hidden flex flex-col gap-5 rounded-md items-center text-center justify-center   col-span-1 relative inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient)] pointer-events-nonerounded-md">
              <Boxes />
              <h1
                className={cn(
                  "md:text-5xl font-bold text-xl text-white relative z-20 "
                )}
              >
                Get <span className="text-emerald-500">Prediction</span>
              </h1>
            </div>
          </Link>
        </div>
      </Suspense>
    </div>
  );
};

export default Dashboard;
