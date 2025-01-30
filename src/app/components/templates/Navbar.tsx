"use client";
import React, { useState } from "react";
import NavLogo from "../organisms/NavLogo";
import NavDropdown from "../organisms/NavDropdown";
import NavContact from "../organisms/NavContact";
import NavButton from "../molecules/NavButton";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-full h-full">
      <div className="container mx-auto w-full h-[60px] flex items-center justify-between grid lg:grid-cols-3 grid-cols-2 flex items-center relative lg:px-0 px-[16px]">
        <div className="">
          <NavLogo />
        </div>

        <div className="w-full h-full flex justify-end lg:hidden block">
          <NavButton handleShow={handleShow} />
        </div>

        <div
          className={`w-full col-span-2 lg:flex justify-start items-center lg:bg-opacity-0 bg-opacity-70 bg-black lg:py-0 py-5 lg:top-0 top-[60px] z-20 ${
            show ? "lg:relative absolute" : "hidden"
          }`}
        >
          <NavDropdown />
          <NavContact />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
