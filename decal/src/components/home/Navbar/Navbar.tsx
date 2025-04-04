"use client";
import { Navlinks } from "@/constant/constans";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, Search, ShoppingCart } from "lucide-react";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.screenY <= 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const bg_style = navBg ? "bg-gray-900 shadow-md" : "";

  return (
    <div
      className={`flex items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200 ${bg_style}`}
    >
      <h1 className="text-3xl text-white font-bold ml-8 md:ml-15">O-PUNK</h1>
      <div className="md:flex items-center space-x-10 hidden">
        {Navlinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className="relative text-white text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              <p>{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center space-x-5 text-white md:space-x-8 mr-8 md:mr16">
        <ShoppingCart className="cursor-pointer w-6 h-6" />
        <Search className="cursor-pointer w-6 h-6" />
        <Menu onClick={openNav} className="cursor-pointer w-6 h-6 md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
