import React from "react";
import Titles from "../atoms/Titles";

const ProfileInfo = ({
  username,
  bio,
}: {
  username?: string;
  bio?: string;
}) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Titles addClass="text-[24px] leading-[36px]">{username}</Titles>
      <Titles addClass="text-[16px] leading-[24px] text-[#4A77FF]">
        {bio}
      </Titles>
    </div>
  );
};

export default ProfileInfo;
