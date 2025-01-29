import React from "react";
import Header from "../templates/Header";
import { poppins } from "@/app/fonts/GoogleFont";
import ProfileCard from "../organisms/ProfileCard";
import ProfileSlider from "../templates/ProfileSlider";

const MainPage = () => {
  return (
    <div
      className={`container mx-auto w-full h-full ${poppins.className} font-black flex flex-col justify-center items-center relative my-[40px]`}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full relative">
        {/* Header */}
        <div className="w-full h-full flex justify-center items-center py-[60px]">
          <Header />
        </div>

        {/* Card Slide */}
        <div className="w-full h-full flex flex-col justify-center items-center gap-[14px] relative">
          <ProfileSlider />
        </div>
      </div>

      {/* Slider Item */}
      <div className="w-full h-full flex justify-center items-center">
        Slider
      </div>
    </div>
  );
};

export default MainPage;
