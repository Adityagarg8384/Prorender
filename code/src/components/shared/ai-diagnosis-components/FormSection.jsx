import React from "react";

const FormInput = ({ label, type = "text" }) => (
  <div className="flex flex-col">
    <label htmlFor={label.toLowerCase()} className="text-2xl text-black mb-2">
      {label}
    </label>
    <input
      type={type}
      id={label.toLowerCase()}
      className="flex shrink-0 max-w-full bg-white rounded-md border border-solid border-stone-500 h-[60px] w-full  text-xl px-2"
      aria-label={label}
    />
  </div>
);

const SubmitButton = () => (
  <button
    type="submit"
    className="px-12 bg-sky-400 rounded-xl text-xl text-white  max-md:px-2"
  >
    Submit
  </button>
);
function FormSection() {
  const formInputs = [
    { label: "First Name", type: "text" },
    { label: "Last Name", type: "text" },
    { label: "Gender", type: "text" },
    { label: "Date of Birth", type: "date" },
    { label: "Pin Code", type: "number" },
    { label: "City", type: "text" },
  ];
  return (
    <form className="flex overflow-hidden flex-col px-8 pt-6 pb-16 bg-violet-100 bg-opacity-50 max-md:px-5 max-md:pb-24 my-10">
      <div className="w-full max-w-[1004px] max-md:max-w-full flex flex-col items-center">
        <header className="flex flex-col gap-5 max-md:flex-col items-center">
          <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full items-center">
            <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl max-md:max-w-full max-md:text-4xl">
                Let&quot;s get you started
              </h2>
              <div className="flex flex-col self-center mt-4 ml-6 max-w-full w-[434px]">
                <p className="text-3xl max-md:max-w-full">
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
              <FormInput label={input.label} type={input.type} />
            </div>
          ))}
        </div>
        <section className="mt-4 max-w-full w-[484px]">
          <div className="flex gap-2 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl text-black max-md:mt-10">
                <label htmlFor="drink">Do you Drink?</label>
                <label
                  htmlFor="symptoms"
                  className="self-start mt-12 max-md:mt-8"
                >
                  Symptoms
                </label>
              </div>
            </div>
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-8 max-md:mt-8">
                <input
                  type="checkbox"
                  id="drink"
                  className="flex shrink-0 bg-white border border-solid border-stone-500 h-[40px] w-[40px]"
                />
                <input
                  type="checkbox"
                  id="drink"
                  className="flex shrink-0 bg-white border border-solid border-stone-500 h-[40px] w-[40px]"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-wrap gap-5 justify-between mt-8 text-3xl text-white whitespace-nowrap max-md:max-w-full">
          <textarea className="flex max-w-full bg-white rounded-md border border-solid border-stone-500 h-[82px] w-[616px]" />
          <SubmitButton />
        </div>
      </main>
    </form>
  );
}

export default FormSection;
