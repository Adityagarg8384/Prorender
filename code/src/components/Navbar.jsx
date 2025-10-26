import { GhostIcon } from "lucide-react";

import { Button } from "./ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { auth, signOut } from "@/auth";
import { } from "next/navigation";
import NavbarActiveLink from "./navbarActiveLink";
import Image from "next/image";
const Navbar = async () => {
  const navItems = ["Home", "Services", "Dashboard", "Education"];
  const session = await auth();
  const isLoggedin = Boolean(session);
  const handleSignOut = async () => {
    await signOut({ redirectTo: "/" });
    setMenuOpen(false);
  }

  return (
    <nav className="flex flex-row justify-between px-1 md:mx-10 mx=2 my-5">
      {/* <nav className="px-1 bg-background/50 h-20 border border-b-emerald-100 backdrop-blur-lg transition-all   py-1  z-40   text-foreground w-full top-0 left-0 right-0 items-center  grid  "> */}
      <div className="order-second sm:order-none ">
        <h1 className="col-span-3 col-start-1 flex text-center ">
          <Link replace={true} href="/" className=" ">
            <div className="grow shrink flex font-semibold items-center  text-5xl w-[171px] max-md:text-4xl">
              <Image
                src={"/logo.jpeg"}
                className="rounded-full object-cover object-center "
                quality={100}
                alt="logo"
                height={60}
                width={60}
              />
              <h1 className="ml-4">Pro</h1>
              <span className="text-emerald-500">Care</span>
            </div>
          </Link>
        </h1>
      </div>
      <div className="order-second sm:order-none col-span-8 sm:col-span-5 flex items-center justify-end sm:justify-center ml-auto">
        <NavbarActiveLink session={session} />
      </div>

      <div className="col-start-11 sm:ml-20 gap-2 flex font-semibold text-sm ">
        {!isLoggedin && (
          <>
            <Link href="/signup">
              <button className="bg-emerald-500 uppercase text-white text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-2 rounded-md">
                Signup
              </button>
            </Link>
            <Link href="/login">
              <button className="text-emerald-500 text-xs uppercase p-2 px-4 rounded-md border border-emerald-500 ">
                Login
              </button>
            </Link>
          </>
        )}
        {isLoggedin && (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button className="bg-emerald-500 text-white p-2 px-3 rounded-md">
              Logout
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
