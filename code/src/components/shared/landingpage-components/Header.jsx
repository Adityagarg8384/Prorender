import React from "react";

function Header() {
  return (
    <header className="flex gap-10 justify-between w-full font-semibold text-black max-md:max-w-full mt-10">
      <div className="text-4xl max-md:text-4xl">
        Pro<span className="text-emerald-500">Care</span>
      </div>
      <div className="flex flex-wrap gap-10 text-2xl whitespace-nowrap max-md:max-w-full justify-self-center">
        <a href="/" className="text-emerald-500">
          Home
        </a>
        <a href="#" className="basis-auto">
          Services
        </a>
        <a href="#" className="basis-auto">
          Dashboard
        </a>
        <a href="#" className="basis-auto">
          Home
        </a>
      </div>
      <a
        href="/login"
        className="px-10 py-2 text-xl text-red-300 whitespace-nowrap rounded-lg border-2 border-red-300 border-solid max-md:px-5"
      >
        LogIn
      </a>
    </header>
  );
}

export default Header;
