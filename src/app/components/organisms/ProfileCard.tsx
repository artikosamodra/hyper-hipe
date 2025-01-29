import React from "react";
import ProfilePic from "../molecules/ProfilePic";
import ProfileTag from "../molecules/ProfileTag";
import ProfileInfo from "../molecules/ProfileInfo";

interface ProfileCardProps {
  src: string;
  flag: string;
  username: string;
  bio: string;
  info: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  src,
  flag,
  username,
  bio,
  info,
}) => {
  return (
    <div className="w-[294px] h-[408px] bg-white rounded-[12px] p-[36px] flex flex-col justify-center items-center gap-[36px] shadow-lg shadow-[#0000001F]">
      <div className="text-[#24252F] w-full h-full flex flex-col justify-center items-center text-center gap-[16px]">
        <ProfilePic src={src} flag={flag} />
        <ProfileInfo username={username} bio={bio} />
      </div>

      <div className="text-[#5E626F] w-full h-full flex flex-wrap justify-center items-center gap-[4px]">
        {info.map((item, index) => (
          <ProfileTag key={index} textTag={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
