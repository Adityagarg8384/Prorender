"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

const NavbarActiveLink = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Education", path: "/education" },
  ];
  const pathname = usePathname();
  return (
    <div className="flex mx-auto font-semibold  items-center gap-7 max-sm:gap-5 col-span-5 col-start-5 uppercase text-sm  ">
      {navItems.map((item, index) => (
        <Link
          href={`${item?.path}`}
          key={index}
          className={pathname === item?.path ? "text-emerald-500 " : ""}
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default NavbarActiveLink;
