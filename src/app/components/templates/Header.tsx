"use client";
import React from "react";
import TitleHeader from "../organisms/TitleHeader";
import MenuHeader from "../organisms/MenuHeader";

const Header = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <TitleHeader />

      <div className="lg:flex hidden">
        <MenuHeader />
      </div>
    </div>
  );
};

export default Header;
