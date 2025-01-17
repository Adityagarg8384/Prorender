"use client";
import React from "react";

function InputField({ label, placeholder, isTextarea, handleChange }) {
  const commonClasses =
    " p-4 w-full text-lg rounded-xl border-solid bg-zinc-100 border-[3px] border-zinc-400 text-stone-400 max-md:px-5 max-md:mt-8 max-md:max-w-full";

  if (isTextarea) {
    return (
      <textarea
        id={label.toLowerCase().replace(" ", "-")}
        name={label.toLowerCase().replace(" ", "-")}
        placeholder={placeholder}
        className={`${commonClasses} pb-20 max-md:pb-24`}
        onChange={handleChange}
        aria-label={label}
      />
    );
  }

  return (
    <input
      type={label.toLowerCase() === "email" ? "email" : "text"}
      id={label.toLowerCase().replace(" ", "-")}
      name={label.toLowerCase().replace(" ", "-")}
      placeholder={placeholder}
      className={commonClasses}
      onChange={handleChange}
      aria-label={label}
    />
  );
}

export default InputField;
