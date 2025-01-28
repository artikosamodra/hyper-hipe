"use client";
import React from "react";
import NavLogo from "../organisms/NavLogo";
import NavDropdown from "../organisms/NavDropdown";
import NavContact from "../organisms/NavContact";

const Navbar = () => {
  return (
    <div className="w-full h-full bg-rose-300">
      <div className="container mx-auto w-full h-[60px] flex items-center justify-between grid lg:grid-cols-3 grid-cols-2 flex items-center">
        <div className="">
          <NavLogo />
        </div>

        <div className="w-full h-full flex col-span-2">
          <NavDropdown />
          <NavContact />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
