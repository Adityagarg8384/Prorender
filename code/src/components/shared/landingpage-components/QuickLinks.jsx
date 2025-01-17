import React from "react";

const links = ["Home", "Services", "Dashboard", "Profile"];

function QuickLinks() {
  return (
    <nav className="flex flex-col ml-20 w-[27%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start self-stretch my-auto text-3xl text-teal-600 max-md:mt-10">
        <h2 className="self-stretch">Quick Links</h2>
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            className={`${index === 0 ? "mt-11 max-md:mt-10" : "mt-8"} ${
              link === "Dashboard" ? "self-stretch max-md:mr-2" : ""
            }`}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default QuickLinks;
