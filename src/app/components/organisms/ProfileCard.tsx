import React from "react";
import ProfilePic from "../molecules/ProfilePic";
import ProfileTag from "../molecules/ProfileTag";
import ProfileInfo from "../molecules/ProfileInfo";

const ProfileCard = ({}) => {
  return (
    <div className="w-[294px] h-[408px] bg-white rounded-[12px] p-[36px] flex flex-col justify-center items-center gap-[36px] shadow-lg shadow-[#0000001F]">
      <div className="text-[#24252F] w-full h-full flex flex-col justify-center items-center text-center gap-[16px]">
        <ProfilePic
          src="/img/profile/picprofile.png"
          flag="/img/profile/flag.png"
        />
        <ProfileInfo username="Abhishek Gupta" bio="마케팅 · 2y+" />
      </div>

      <div className="text-[#5E626F] w-full h-full flex flex-wrap justify-center items-center gap-[4px]">
        <ProfileTag textTag="마케팅 콘텐츠 제작" />
        <ProfileTag textTag="인스타그램 관리" />
        <ProfileTag textTag="트위터 관리" />
        <ProfileTag textTag="블로그 글 작성" />
      </div>
    </div>
  );
};

export default ProfileCard;
