import React from "react";
import Header from "../templates/Header";
import { poppins } from "@/app/fonts/GoogleFont";
import ProfileSlider from "../templates/ProfileSlider";
import Slideshow from "../templates/Slideshow";

const MainPage = () => {
  return (
    <div
      className={`container mx-auto w-full h-full ${poppins.className} font-black flex flex-col justify-center items-center relative mt-[60px]`}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full relative gap-[14px]">
        {/* Header */}
        <div className="w-full h-full flex justify-center items-center py-[60px] lg:px-0 px-[16px]">
          <Header />
        </div>

        {/* Card Slide */}
        <div className="w-full h-full flex flex-col justify-center items-center gap-[14px] relative">
          <ProfileSlider />
        </div>
      </div>

      {/* Slider Item */}
      <div className="w-full h-full flex justify-center items-center">
        <Slideshow />
      </div>
    </div>
  );
};

export default MainPage;
