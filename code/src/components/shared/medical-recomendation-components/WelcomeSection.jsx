import React from 'react';

function WelcomeSection() {
  return (
    <section className="mt-14 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
       <span className='text-green-600'>Medication</span>  Recomendation
      </h1>
      <div className="flex gap-5 mt-6 max-md:flex-col">
        <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
          <p className="text-2xl leading-8 text-black max-md:mt-10 max-md:max-w-full">
            Kindly fill the given form to proceed further with your Diagnosis.
            <br />
            Start knowing yourself now!
          </p>
        </div>
        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
          <button className="px-14 pt-4 pb-2.5 w-full text-2xl text-white bg-red-300 rounded-xl max-md:px-5 max-md:mt-10">
            Fill Form
          </button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;