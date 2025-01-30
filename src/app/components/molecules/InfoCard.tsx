import React from "react";
import Titles from "../atoms/Titles";

const InfoCard = ({
  leader,
  position,
  company,
}: {
  leader: string;
  position: string;
  company: string;
}) => {
  return (
    <div className="flex flex-col gap-[16px] max-w-[455px]">
      <div className="text-[12px] leading-[18px] text-[#343741]">
        {position}
      </div>
      <div className="flex flex-col gap-[16px] text-[13px] leading-[19.5px]">
        <Titles addClass="">{leader}</Titles>
        <Titles addClass="">{company}</Titles>
      </div>
    </div>
  );
};

export default InfoCard;
