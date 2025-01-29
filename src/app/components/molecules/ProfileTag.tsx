import React from "react";
import Text from "../atoms/Texts";

const ProfileTag = ({ textTag }: { textTag?: string }) => {
  return (
    <Text addClass="text-[16px] leading-[24px] px-[6px] py-[3px] border border-[#C1C5CF] rounded-[6px]">
      {textTag}
    </Text>
  );
};

export default ProfileTag;
