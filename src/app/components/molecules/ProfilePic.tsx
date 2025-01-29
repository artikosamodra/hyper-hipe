import React from "react";
import ImageIcons from "../atoms/IconImages";

const ProfilePic = ({ src, flag }: { src: string; flag: string }) => {
  return (
    <div className="w-[120px] h-[120px] flex justify-center items-center relative">
      <ImageIcons
        src={src}
        alt="profile"
        width={120}
        height={120}
        addClass="w-auto h-auto rounded-full"
      />

      <div className="absolute bottom-[3px] right-[7px]">
        <ImageIcons
          src={flag}
          alt="profile"
          width={120}
          height={120}
          addClass="w-[25px] h-[18px] rounded-[2px]"
        />
      </div>
    </div>
  );
};

export default ProfilePic;
