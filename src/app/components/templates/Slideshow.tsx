import React from "react";
import SlidesMenu from "../organisms/SlidesMenu";
import CheckboxMenu from "../organisms/CheckboxMenu";

const Slideshow = () => {
  return (
    <div className="container overflow-hidden w-full h-full lg:px-0 px-[16px]">
      <div className="md:flex hidden my-[60px]">
        <SlidesMenu />
      </div>
      <div className="md:hidden block mb-[60px]">
        <CheckboxMenu />
      </div>
    </div>
  );
};

export default Slideshow;
