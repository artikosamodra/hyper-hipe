import React from "react";
import SlidesMenu from "../organisms/SlidesMenu";
import CheckboxMenu from "../organisms/CheckboxMenu";

const Slideshow = () => {
  return (
    <div className="container overflow-hidden w-full h-full lg:px-0 px-[16px]">
      <div className="md:flex hidden">
        <SlidesMenu />
      </div>
      <div className="md:hidden block">
        <CheckboxMenu />
      </div>
    </div>
  );
};

export default Slideshow;
