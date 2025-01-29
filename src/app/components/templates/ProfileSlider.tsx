import React from "react";
import ProfileCard from "../organisms/ProfileCard";
import BalonProfile from "../atoms/BalonProfile";
import ImageIcons from "../atoms/IconImages";
import Titles from "../atoms/Titles";

const ProfileSlider = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-[32px]">
      <BalonProfile addClass="flex justify-center items-center text-[#00C696] gap-[10px] px-[16px] py-[8px]">
        <ImageIcons
          src="/img/dollar.png"
          alt="profile"
          width={26}
          height={26}
        />
        <Titles addClass="text-[24px] leading-[36px]">월 100만원</Titles>
      </BalonProfile>
      <ProfileCard />
    </div>
  );
};

export default ProfileSlider;
