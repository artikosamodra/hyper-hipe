'use client'
import React from "react";
import TitleHeader from "../organisms/TitleHeader";
import MenuHeader from "../organisms/MenuHeader";

const Header = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-[60px]">
      <TitleHeader />
      <MenuHeader />
    </div>
  );
};

export default Header;
