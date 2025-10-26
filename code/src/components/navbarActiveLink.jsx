"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { auth, signOut } from "@/auth";

const NavbarActiveLink = (session) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Education", path: "/education" },
  ];

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // useSession is a client hook provided by next-auth
  const isLoggedin = Boolean(session);
  // const session = await auth();

  return (
    
    <nav className="relative flex items-center justify-between px-4 py-3 w-full">
      {/* Desktop Links */}
      <div className="hidden sm:flex items-center gap-7 font-semibold uppercase text-sm">
        {navItems.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`hover:text-emerald-500 ${
              pathname === item.path ? "text-emerald-500" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 right-4 bg-white shadow-lg rounded-lg flex flex-col items-start p-4 sm:hidden z-50">
          {navItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`block py-2 text-gray-800 hover:text-emerald-500 ${
                pathname === item.path ? "text-emerald-500" : ""
              }`}
              onClick={() => setMenuOpen(false)} // close on click
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarActiveLink;
