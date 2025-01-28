import React from "react";
import NavLogo from "../organisms/NavLogo";
import NavDropdown from "../organisms/NavDropdown";
import NavButton from "../organisms/NavContact.tsx";

const Navbar = () => {
  return (
    <div className="w-full h-full bg-rose-300">
      <div className="container mx-auto w-full h-[60px] flex items-center justify-between">
        <NavLogo />
        <NavDropdown />
        <NavButton />
      </div>
    </div>
  );
};

export default Navbar;
