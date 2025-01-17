import React from 'react';

function Footer() {
  const quickLinks = ['Home', 'Services', 'Dashboard', 'Profile'];

  return (
    <footer className="flex flex-col items-start px-16 pt-8 pb-28 w-full bg-emerald-500 bg-opacity-30 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="mb-0 max-w-full w-[1086px] max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[53%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-5xl font-semibold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <div className="self-start max-md:text-4xl">
                Pro<span className="text-emerald-500">Care</span>
              </div>
              <div className="flex shrink-0 mt-11 bg-white h-[180px] max-md:mt-10 max-md:max-w-full" />
              <div className="flex shrink-0 mt-8 bg-white h-[98px] max-md:max-w-full" />
            </div>
          </div>
          <nav className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
            <h3 className="text-4xl text-teal-600">Quick Links</h3>
            <ul className="mt-11 max-md:mt-10">
              {quickLinks.map((link, index) => (
                <li key={index} className="mt-8 first:mt-0">
                  <a href="#" className="text-4xl text-teal-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <h3 className="mt-3 text-4xl text-teal-600 max-md:mt-10">Features</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;