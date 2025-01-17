import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" border-t-2 py-6 h-48  relative inset-x-0 gap-10 px-3    bottom-0   grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6  w-full  bg-emerald-700 text-emerald-100 ">
      {/* <div className="     flex items-center justify-center md:justify-start ml-3 gap-3  md:col-span-2 ">
       
      </div>
      <div className=" flex md:justify-start justify-between items-center md:col-start-4  ">
        <h1 className="opacity-60 text-sm sm:mx-0 mx-auto">©Copyright 2024</h1>
      </div>
      <div className="  mr-2  md:col-start-6 hover:cursor-pointer transition-all delay-300 ease-in-out rounded-lg opacity-80  text-foreground gap-3 md:gap-0  flex items-center md:justify-around justify-center md:px-10 ">
        
      </div> */}
      <div className="w-full flex flex-col items-start gap-10 pt-2   col-span-2 ">
        <div className=" flex  items-center px-3 gap-4">
          {" "}
          <div className="h-[6rem] w-24 relative">
            <Image src={"/logo.jpeg"} alt="logo" className="rounded-md" fill />
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-4xl font-bold"> Pro Care</h1>
            <p className="font-light ">Your one stop medical assitance</p>
          </div>
        </div>

        <p className="font-light text-xs px-3">
          Project by <span className="font-semibold">Team Hexagon6</span>
        </p>
      </div>
      <div className="w-full  flex flex-col items-start gap-5 px-16 pt-2  col-span-2">
        <h1 className="font-bold text-2xl ">Quick Links</h1>
        <section className="flex flex-col items-start gap-3 text-emerald-50 transition-all ease-in-out duration-100 delay-500 cursor-pointer  font-light ">
          <div className="flex items-center gap-14 justify-between">
            <Link href={"/"}>
              {" "}
              <p className="hover:underline">Home</p>
            </Link>
            <Link href={"/dashboard"}>
              {" "}
              <p className="hover:underline">Dashboard</p>
            </Link>
          </div>
          <div className="flex items-center gap-8 justify-between">
            <Link href={"/education"}>
              {" "}
              <p className="hover:underline">Education</p>
            </Link>
            <Link href={"/profile"}>
              {" "}
              <p className="hover:underline">Profile</p>
            </Link>
            {/* <p className="hover:underline">Education</p>
            <p className="hover:underline">Profile</p> */}
          </div>
        </section>
      </div>
      <div className="w-full flex  col-span-2 pt-2   flex-col items-start gap-5 px-16 ">
        <h1 className="font-semibold text-lg">
          © 2024 Pro Care. All rights reserved.
        </h1>
        <p className="font-light text-xs text-justify">
          This website and its content, including text, graphics, logos, and
          images, are the property of Adolescent Pro Care and are protected by
          international copyright laws. Unauthorized use any material from this
          site is strictly prohibited.
        </p>
      </div>
    </footer>
  );
}
