"use client";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex gap-5 mt-20 max-md:flex-col max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start w-full text-emerald-500 max-md:mt-10 max-md:max-w-full">
          <div className="px-5 py-2 text-2xl rounded-xl bg-emerald-500 bg-opacity-10 max-md:px-5">
            Stay Strong, Live Long
          </div>
          <h1 className="mt-6 text-7xl font-semibold text-black leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[66px]">
            Bringing <span className="text-emerald-500">Smiles</span> <br />{" "}
            Back to Health.
          </h1>
          <p className="mt-7 mr-10 text-xl text-wrap  text-justify text-black max-md:mr-2.5 max-md:max-w-full">
            Your AI health partner for accurate disease predictions,
            personalized medication advice, and 24/7 support. Stay ahead of
            health issues with ProCare. Join us today for a healthier tomorrow!
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex gap-3 items-end  mt-5 w-52 max-w-full text-5xl font-semibold whitespace-nowrap max-md:text-4xl"
          >
            <div className="max-md:text-4xl">1000+</div>
            <h1 className="font-medium text-3xl mr-4">users</h1>
            <div className="shrink-0 w-0.5 border-2 border-solid border-neutral-700 border-opacity-50 h-[61px]" />
            <div className="max-md:text-4xl ml-4">3000+</div>
            <h1 className="font-medium text-3xl"> Analysis</h1>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
          <a
            href="/ai-powered-diagnosis"
            className="flex overflow-hidden flex-col grow max-md:mt-2.5 group relative"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6af3e5bd23502919fa31ad7dadc33935f467b4c091117e2db9a2defdccafe5eb?apiKey=eb1e27a892cb49d8a25258d2564dfff8&"
              alt="Hero image"
              className="object-contain w-full rounded-3xl aspect-[1.96] max-md:max-w-full"
            />
            <div className="absolute rounded-3xl bottom-0 w-full h-0  flex justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-[40%] duration-300">
              <div className="text-3xl text-white hover:opacity-[100%] mx-[40px]">
                AI-Powered Diagnosis
              </div>
            </div>
          </a>
          <div className="mt-2 max-md:max-w-full">
            <div className="flex gap-3 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <a
                  href="/medical-recomendation"
                  className="flex overflow-hidden flex-col grow max-md:mt-2.5 group relative"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/14146b2578875713f59d150bdf228b99d67975239af96b451e3a11df9ca8da71?apiKey=eb1e27a892cb49d8a25258d2564dfff8&"
                    alt="Additional image"
                    className="object-contain w-full rounded-3xl aspect-[0.97]"
                  />

                  <div className="absolute rounded-3xl bottom-0 w-full h-0  flex justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-[40%] duration-300">
                    <div className="text-3xl text-white hover:opacity-[100%] mx-[40px]">
                      Medicine Prescribe
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <a
                  href="/lifestyle-analyser"
                  className="flex overflow-hidden flex-col grow max-md:mt-2.5 group relative"
                >
                  <img
                    loading="lazy"
                    src={"hello.jpg"}
                    alt="Additional image"
                    className="object-contain w-full rounded-3xl aspect-[0.97]"
                  />

                  <div className="absolute rounded-3xl bottom-0 w-full h-0  flex justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-[40%] duration-300">
                    <div className="text-3xl text-white hover:opacity-[100%] mx-[40px]">
                      Chronic Disease Track
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
